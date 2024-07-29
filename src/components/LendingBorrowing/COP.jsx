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
  const [arrowClicked, setArrowClicked] = useState(true);
  const [supplyBalance, setSupplyBalance] = useState(0);
  const [borrowBalance, setBorrowBalance] = useState(0);
  const [text, setText] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [client, setClient] = useState(null);
  const { getOfflineSigner, address, getRpcEndpoint, isWalletConnected } =
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

  useEffect(() => {
    client_data();
  });

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
    "mantra1da46lmu9uxd5dwm8lqmhwm8mahuydzysva2y9sw0nqff8rnnupfs8th4l2";

  const protocol_address =
    "mantra1kh4hz9hd6m0jzvsdlvx94q44x57vvveppx0f4p7sudrq87499y3swv08mn";

  const parseMantra = (value) => {
    let number = parseFloat(value);
    let scaledNumber = Math.round(number * 1e6);
    return parseInt(scaledNumber);
  };

  const handleBorrow = async () => {
    try {
      setIsLoading(true);

      const borrow_msg = {
        deposit_collateral_and_mint: {
          token_amount: parseMantra(manageAmount).toString(),
        },
      };

      const funds = [coin(1, "uom")];

      const borrow = await client.execute(
        address,
        protocol_address,
        borrow_msg,
        "auto",
        "",
        funds
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
        redeem_collateral_and_burn: {
          amount_collateral: "1",
          amount_token: parseMantra(manageAmount).toString(),
        },
      };

      const repay = await client.execute(
        address,
        protocol_address,
        repay_msg,
        "auto"
      );

      console.log(repay);
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
            <p className="text-4xl font-bold">
              {arrowClicked
                ? `$ ${parseInt(supplyBalance)?.toFixed(3)}`
                : `$ ${parseInt(borrowBalance)?.toFixed(3)}`}
            </p>
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
                  Borrow USDC
                </span>
              </button>
              <button
                className="flex justify-between items-center px-4 bg-site-black h-14 w-48 tracking-wider rounded-full mr-[20px]"
                onClick={handleManageRepay}
              >
                <span className="text-base text-gray-500 font-semibold">
                  Repay USDC
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
              <div className="flex gap-3">
                <img src={om_token} className="w-6" />
                <h1 className="text-lg font-semibold text-center">OM</h1>
              </div>
            </div>

            <div className="flex flex-row gap-x-[15px] h-[50px] justify-between items-center">
              <button
                onClick={openModal}
                className="h-14 w-80 px-5 bg-site-black rounded-full text-sm flex justify-center items-center"
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
                {manage ? "Manage Lending & Borrowing" : "USDC Wallet Address"}
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
                  $ <span className="text-white">0</span>.000
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
              <h3>$ 0.00</h3>
            </div>
            <div className="flex flex-row mx-[20px] justify-between mt-[20px]">
              <p>Liquidation price</p>
              <h3>0.00</h3>
            </div>
            <div className="flex flex-row mx-[20px] justify-between mt-[20px]">
              <p>Borrow Capacity</p>
              <h3>0.00</h3>
            </div>
            <div className="flex flex-row mx-[20px] justify-between mt-[20px]">
              <p>LTV</p>
              <h3>0.00</h3>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default COP;
