"use client";
import React, { useState } from "react";
import { fetchBalance } from "@wagmi/core";
import { CONTRACT_ADDRESS } from "@/data/ContractDetails";
import abi from "@/data/json/abi.json";
import { useAccount } from "wagmi";
import { useWeb3ModalState } from "@web3modal/wagmi/react";
import { readContract, writeContract } from "@wagmi/core";
import { parseEther } from "viem";

const UserAccount = () => {
  const [address, setAddress] = useState("");
  const { selectedNetworkId } = useWeb3ModalState();
  const checkBalance = async () => {
    const res: any = await readContract({
      address: CONTRACT_ADDRESS,
      abi: abi,
      functionName: "balanceOf",
      args: [address],
    });
    console.log("get balance", res);
    alert(`The Balance is ${res} `);
  };

  const ApproveTokens = async () => {
    const res: any = await writeContract({
      address: CONTRACT_ADDRESS,
      abi: abi,
      functionName: "approve",
      args: [address, parseEther("1")],
    });

    alert(`your hash is ${res?.hash}`);
  };
  return (
    <div>
      <div className="form">
        <div className="flex items-center gap-[20px]">
          <input
            className="w-[400px] p-[10px] rounded dark:text-gray-800"
            type="text"
            value={address}
            onChange={(e: any) => setAddress(e.target.value)}
          />
          <button
            onClick={checkBalance}
            className="bg-blue-500 px-[15px] rounded-full py-[5px] text-white cursor-pointer"
          >
            Check Balance
          </button>
          <button
            onClick={ApproveTokens}
            className="bg-blue-500 px-[15px] rounded-full py-[5px] text-white cursor-pointer"
          >
            Approve
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
