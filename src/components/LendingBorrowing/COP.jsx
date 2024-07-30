/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import { toast, ToastContainer } from "react-toastify";
import { LoadingButton } from "../ui/LoadingButton";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useChain } from "@cosmos-kit/react";
import { Wallet } from "../wallet/Wallet";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { coin, GasPrice } from "@cosmjs/stargate";
import { om_token } from "../../assets";

const COP = () => {
  const [manage, setManage] = useState(false);
  const [manageAmount, setManageAmount] = useState("0");
  const [borrowBalance, setBorrowBalance] = useState(0);
  const [collateralBalance, setCollateralBalance] = useState(0);
  const [susdBalance, setsusdBalance] = useState(0);
  const [text, setText] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [client, setClient] = useState(null);
  const [data, setData] = useState({});
  const { getOfflineSigner, address, isWalletConnected } =
    useChain("mantrachaintestnet");

  const rpc = "https://mantra-testnet-rpc.publicnode.com";
  // const rpc = "https://rpc.hongbai.mantrachain.io";

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

  const fetch_balance = async () => {
    const offlineSigner = getOfflineSigner();
    const client_here = await SigningCosmWasmClient.connectWithSigner(
      rpc,
      offlineSigner,
      {
        gasPrice: GasPrice.fromString("0.025uom"),
      }
    );

    const susd_query = {
      balance: {
        address: address,
      },
    };

    const susd_balance = await client_here.queryContractSmart(
      token_address,
      susd_query
    );

    setsusdBalance(susd_balance?.balance);

    const borrow_msg = {
      info: {
        user: address,
      },
    };

    const config_msg = {
      config: {},
    };

    const config_tx = await client_here.queryContractSmart(
      protocol_address,
      config_msg
    );

    setData(config_tx);

    const borrow_balance = await client_here.queryContractSmart(
      protocol_address,
      borrow_msg
    );

    setBorrowBalance(borrow_balance?.total_debt / 1000000);
    setCollateralBalance(borrow_balance?.collateral_deposited / 1000000);
  };

  useEffect(() => {
    fetch_balance();
  }, [address, isLoading, manageAmount]);

  useEffect(() => {
    client_data();
  }, [address, isLoading]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleManageBorrow = () => {
    if (text === 0) {
      setManage(!manage);
    } else {
      setManage(true);
    }
    setText(0);
  };

  const handleManageRepay = () => {
    if (text === 1) {
      setManage(!manage);
    } else {
      setManage(true);
    }
    setText(1);
  };

  const token_address =
    "mantra179mvyhjvckcg6a5r7f8ttasdmlydspfmugm9rzh82zwkvacyzr2q3ea44j";

  const protocol_address =
    "mantra1ry28qu3dagp45aq8rrzrz3n8wdjz067x5srt66ww26s7djtq70hqpdghr0";

  const parseMantra = (value) => {
    let number = parseFloat(value);
    let scaledNumber = Math.round(number * 1e6);
    return parseInt(scaledNumber);
  };

  const handleBorrow = async () => {
    try {
      setIsLoading(true);

      const borrow_msg = {
        borrow_tokens: {
          token_amount: parseMantra(manageAmount).toString(),
        },
      };

      const borrow = await client.execute(
        address,
        protocol_address,
        borrow_msg,
        "auto",
        ""
      );

      console.log(borrow);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const handleRepay = async () => {
    try {
      setIsLoading(true);

      const increase_allowance = {
        increase_allowance: {
          spender: protocol_address,
          amount: parseMantra(manageAmount).toString(),
        },
      };

      const allowanceResponse = await client.execute(
        address,
        token_address,
        increase_allowance,
        "auto"
      );

      console.log("allowance response: ", allowanceResponse);

      const repay_msg = {
        repay: {
          token_amount: parseMantra(manageAmount).toString(),
        },
      };

      const repay_tx = await client.execute(
        address,
        protocol_address,
        repay_msg,
        "auto"
      );

      console.log(repay_tx);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full w-screen flex flex-col items-center p-10 text-white">
      <ToastContainer />
      <div className="flex justify-evenly w-full">
        <div className="flex h-full w-[20%]">
          <div>
            <h1 className="text-purple-500 font-semibold text-lg">Balance</h1>
            <p className="text-4xl font-bold">$ {borrowBalance.toFixed(3)}</p>
          </div>
        </div>
        {!isWalletConnected ? (
          <Wallet />
        ) : (
          <div className="flex justify-center items-center text-lg ">
            <div className="flex">
              <button
                className="flex justify-between items-center px-4 bg-site-black h-14 w-44 rounded-full mr-[20px]"
                onClick={handleManageBorrow}
              >
                <span className="text-base text-gray-500 font-semibold">
                  Borrow SUSD
                </span>
              </button>
              <button
                className="flex justify-between items-center px-4 bg-site-black h-14 w-48 tracking-wider rounded-full mr-[20px]"
                onClick={handleManageRepay}
              >
                <span className="text-base text-gray-500 font-semibold">
                  Repay SUSD
                </span>
              </button>
            </div>
            <Wallet />
          </div>
        )}
      </div>

      <div className="flex justify-center items-center gap-x-12 p-10 mt-10">
        <div className="h-[510px] w-[550px] bg-site-black bg-opacity-30 rounded-lg pb-10 border-2">
          <div className="flex justify-between mt-[20px] mx-[20px]">
            <h1 className="w-full text-gray-400 text-sm">Collateral Asset</h1>
            <h1 className="w-full text-gray-400 text-sm">Protocol Balance</h1>
          </div>

          <div className="mx-[20px] flex flex-row justify-between mt-10">
            <div className="h-[50px] flex flex-col justify-center gap-y-[10px]">
              <div className="flex-col">
                <div className="flex gap-3">
                  <img src={om_token} className="w-6" />
                  <h1 className="text-xl font-semibold text-center">OM</h1>
                </div>
                <span className="text-sm font-medium text-gray-400">
                  {collateralBalance.toFixed(5)}
                </span>
              </div>
            </div>

            <div className="flex flex-row gap-x-[15px] h-[50px] justify-between items-center">
              <button
                onClick={openModal}
                className="h-14 w-60 px-5 bg-site-black rounded-full text-sm flex justify-center items-center"
              >
                Manage Collateral
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-[20px]">
          <div className=" h-full w-[450px] bg-site-black bg-opacity-30 rounded-lg p-10 border-2">
            <div className="flex flex-col gap-5">
              <h1 className="text-gray-400 font-bold">
                {manage ? "Manage Borrow & Repay" : "SUSD Wallet Address"}
              </h1>
              {manage ? (
                <div className="flex w-full justify-between">
                  <input
                    type="number"
                    placeholder="0.000"
                    className={`flex h-9 w-44 border-site-black rounded-md border-2 border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors disabled:cursor-not-allowed disabled:opacity-50`}
                    onChange={(e) => {
                      setManageAmount(e.target.value);
                    }}
                    disabled={isLoading}
                  />
                  {text === 0 ? (
                    <div>
                      {isLoading ? (
                        <LoadingButton disabled>
                          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                          Please wait
                        </LoadingButton>
                      ) : (
                        <button
                          className="flex bg-gray-800 h-10 w-36 justify-center items-center rounded-lg font-semibold cursor-pointer"
                          onClick={handleBorrow}
                        >
                          Borrow
                        </button>
                      )}
                    </div>
                  ) : (
                    <div>
                      {isLoading ? (
                        <LoadingButton disabled>
                          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                          Please wait
                        </LoadingButton>
                      ) : (
                        <button
                          className="flex bg-gray-800 h-10 w-36 justify-center items-center rounded-lg font-semibold cursor-pointer"
                          onClick={handleRepay}
                        >
                          Repay
                        </button>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-gray-500 font-semibold text-lg">
                  ${" "}
                  <span className="text-white">
                    {(susdBalance / 1000000).toFixed(3)}
                  </span>
                </p>
              )}
              <hr className="border-gray-500 border-opacity-30" />
            </div>
          </div>

          <div className=" h-full w-[450px] bg-site-black bg-opacity-30 rounded-lg p-10 border-2">
            <h1 className="text-gray-400 font-medium text-sm">
              Position Summary
            </h1>
            <div className="flex flex-row mx-[20px] justify-between mt-[20px]">
              <p>Collateral Value</p>
              <h3>
                ${" "}
                {((data?.oracle_price / 1000000) * collateralBalance).toFixed(
                  3
                )}{" "}
              </h3>
            </div>
            <div className="flex flex-row mx-[20px] justify-between mt-[20px]">
              <p>Liquidation price</p>
              <h3>
                $ {((1.29 * borrowBalance) / collateralBalance).toFixed(3)}
              </h3>
            </div>
            <div className="flex flex-row mx-[20px] justify-between mt-[20px]">
              <p>Borrow Capacity</p>
              <h3>
                {" "}
                ${" "}
                {(
                  ((data?.oracle_price / 1000000) * collateralBalance) / 1.29 -
                  borrowBalance
                ).toFixed(3)}{" "}
              </h3>
            </div>
            <div className="flex flex-row mx-[20px] justify-between mt-[20px]">
              <p>LTV</p>
              <h3>
                {(
                  (borrowBalance /
                    ((data?.oracle_price / 1000000) * collateralBalance)) *
                  100
                ).toFixed(3)}{" "}
                %
              </h3>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default COP;
