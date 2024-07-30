import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { LoadingButton } from "../ui/LoadingButton";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useChain } from "@cosmos-kit/react";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { coin, GasPrice } from "@cosmjs/stargate";

const Modal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("stake");
  const [amount, setAmount] = useState(0);
  const [depositBalance, setDepositBalance] = useState(0);
  const [withdrawBalance, setWithdrawBalance] = useState(0);
  const [dbData, setDBdata] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [client, setClient] = useState(null);
  const { getOfflineSigner, address } = useChain("mantrachaintestnet");

  const rpc = "https://rpc.hongbai.mantrachain.io";

  const token_address =
    "mantra179mvyhjvckcg6a5r7f8ttasdmlydspfmugm9rzh82zwkvacyzr2q3ea44j";

  const protocol_address =
    "mantra1ry28qu3dagp45aq8rrzrz3n8wdjz067x5srt66ww26s7djtq70hqpdghr0";

  const fetch_balance = async () => {
    const offlineSigner = getOfflineSigner();
    const client = await SigningCosmWasmClient.connectWithSigner(
      rpc,
      offlineSigner,
      {
        gasPrice: GasPrice.fromString("0.025uom"),
      }
    );
    const borrow_msg = {
      info: {
        user: address,
      },
    };
    const deposit_balance = await client.getBalance(address, "uom");
    console.log(deposit_balance);
    const withdraw_balance = await client.queryContractSmart(
      protocol_address,
      borrow_msg
    );
    setDepositBalance(deposit_balance?.amount / 1000000);
    setWithdrawBalance(withdraw_balance?.collateral_deposited / 1000000);
  };

  useEffect(() => {
    fetch_balance();
  }, [address, isLoading]);

  const client_data = async () => {
    const offlineSigner = getOfflineSigner();
    const client_here = await SigningCosmWasmClient.connectWithSigner(
      rpc,
      offlineSigner,
      {
        gasPrice: GasPrice.fromString("0.025uom"),
      }
    );
    setClient(client_here);
  };

  useEffect(() => {
    client_data();
  }, [address, isLoading]);

  const parseMantra = (value) => {
    let number = parseFloat(value);
    let scaledNumber = Math.round(number * 1e6);
    return parseInt(scaledNumber);
  };

  const handleDepositOm = async () => {
    try {
      setIsLoading(true);

      const deposit_message = {
        deposit_collateral: {},
      };

      const fund = [coin(parseMantra(amount), "uom")];

      const deposit = await client.execute(
        address,
        protocol_address,
        deposit_message,
        "auto",
        "",
        fund
      );

      console.log(deposit);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const handleWithdrawOm = async () => {
    try {
      setIsLoading(true);

      const withdraw_msg = {
        redeem_collateral: {
          amount: parseMantra(amount).toString(), // 6 decimals
        },
      };

      const withdrawResponse = await client.execute(
        address,
        protocol_address,
        withdraw_msg,
        "auto"
      );

      console.log(withdrawResponse);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="h-full w-full fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur">
      <ToastContainer />
      <div className="bg-site-black rounded-lg w-[30%]">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Manage Collateral</h2>
          <button onClick={onClose} className="text-2xl">
            &times;
          </button>
        </div>
        <div className="p-4">
          <div className="flex justify-around mb-4 w-full h-full">
            <button
              onClick={() => setActiveTab("stake")}
              className={`px-4 py-2 rounded w-full ${
                activeTab === "stake"
                  ? "bg-purple-600 text-white"
                  : "bg-transparent text-white"
              }`}
            >
              Deposit
            </button>
            <button
              onClick={() => setActiveTab("unstake")}
              className={`px-4 py-2 rounded w-full ${
                activeTab === "unstake"
                  ? "bg-purple-600 text-white"
                  : "bg-transparent text-white"
              }`}
            >
              Withdraw
            </button>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="number"
              placeholder="Amount"
              className="w-full px-4 py-2 border rounded bg-transparent"
              onChange={(e) => setAmount(e.target.value)}
            />
            <button className="ml-2 px-4 py-2 bg-purple-600 rounded">
              Max
            </button>
          </div>
          <div className="flex justify-between mb-4">
            <p>
              {activeTab === "stake"
                ? `Balance: ${depositBalance.toFixed(2) || "0.00"}`
                : `Balance: ${withdrawBalance.toFixed(3) || "0.00"}`}
            </p>
          </div>
        </div>
        <div className="flex justify-center p-4">
          {isLoading ? (
            <LoadingButton disabled>
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </LoadingButton>
          ) : activeTab === "stake" ? (
            <button
              className="px-4 py-2 w-36 h-10 font-semibold bg-purple-600 text-white rounded-lg"
              onClick={handleDepositOm}
            >
              Deposit
            </button>
          ) : activeTab === "unstake" ? (
            <button
              className="px-4 py-2 w-36 h-10 font-semibold bg-purple-600 text-white rounded-lg"
              onClick={handleWithdrawOm}
            >
              Withdraw
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Modal;
