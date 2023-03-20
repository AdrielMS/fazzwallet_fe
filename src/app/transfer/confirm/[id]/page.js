"use client";

import Header from "../../../component/header/Header";
import Footer from "../../../component/footer/footer";
import Navigation from "@/app/component/navigation";
import Image from "next/image";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function ConfirmTransfer() {
  const segment = usePathname();
  const router = useRouter();

  // const transferDetail = parseInt(localStorage.getItem("@transfer"));
  const transferDetail = Cookies.get("@transfer");
  // console.log(transferDetail);

  const id = segment.split("/")[3];
  const [userDetail, setUserDetail] = useState([]);
  useEffect(() => {
    axios
      // .get(`http://localhost:5000/api/v1/auth/users/${id}`)
      .get(
        `https://fazzwalletbe-adrel-production.up.railway.app/api/v1/auth/users/${id}`
      )
      .then((result) => {
        console.log(result.data.data);
        setUserDetail(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const idl = Cookies.get("@id");
  const [senderDetail, setSenderDetail] = useState([]);
  useEffect(() => {
    axios
      // .get(`http://localhost:5000/api/v1/auth/users/${idl}`)
      .get(
        `https://fazzwalletbe-adrel-production.up.railway.app/api/v1/auth/users/${idl}`
      )
      .then((res) => {
        console.log(res.data.data);
        setSenderDetail(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [transferConfirm, setTransferConfirm] = useState({
    receiver_id: id,
    sender_id: idl,
    amount: transferDetail,
  });

  console.log(transferConfirm);
  const handleTransfer = (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      // url: "http://localhost:5000/api/v1/profile/transfer",
      url: "https://fazzwalletbe-adrel-production.up.railway.app/api/v1/profile/transfer",
      data: transferConfirm,
    })
      .then((result) => {
        console.log(result.data);
        // localStorage.setItem("@transferConfirm", transferConfirm.amount);
        Cookies.set("@transferConfirm", transferConfirm.amount);
        // localStorage.removeItem("@transfer");
        Cookies.remove("@transfer");
        router.push(`/transfer/status/${id}`);
        // router.push(`/home`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Header />
      <div className="flex justify-evenly p-[50px] sm:p-[20px]">
        <section className="hidden sm:flex w-[20%] rounded-xl bg-white drop-shadow-xl h-[100vh]">
          <Navigation />
        </section>
        <section className="">
          <div className="p-5 mr-5  bg-white rounded-xl h-[100%] drop-shadow-lg w-[50vw]">
            <div className="font-bold">Transfer to</div>
            <div className="py-[40px]">
              <div className="flex items-center p-[10px] bg-white rounded-lg my-[10px] drop-shadow-md mb-7 h-[100px]">
                <div className="px-2">
                  {/* <Image
                    className="rounded-xl"
                    src="/runrun.png"
                    width={80}
                    height={80}
                    alt=""
                  /> */}
                </div>
                <div className="px-2">
                  <div className="text-[#3A3D42] font-bold mb-2">
                    {userDetail.name}
                  </div>
                  <div className="">{userDetail.phone}</div>
                </div>
              </div>
            </div>
            <div>
              <div className="font-bold mb-7">Details</div>
            </div>
            <form onSubmit={handleTransfer}>
              <div className="flex justify-between p-[10px] bg-white rounded-lg my-[10px] drop-shadow-md mb-7">
                <div className="">
                  <span className="ml-1 mb-2 block text-[12px] text-[#858D96]">
                    Amount
                  </span>
                  <div className="font-bold ml-1 text-[#514F5B]">
                    {transferDetail}
                  </div>
                </div>
              </div>
              <div className="flex justify-between p-[10px] bg-white rounded-lg my-[10px] drop-shadow-md mb-7">
                <div className="">
                  <span className="ml-1 mb-2 block text-[12px] text-[#858D96]">
                    Balance left
                  </span>
                  <div className="font-bold ml-1 text-[#514F5B]">
                    {senderDetail.balance - transferDetail}
                  </div>
                </div>
              </div>
              <div className="flex justify-between p-[10px] bg-white rounded-lg my-[10px] drop-shadow-md mb-7">
                <div className="">
                  <span className="ml-1 mb-2 block text-[12px] text-[#858D96]">
                    Date & Time
                  </span>
                  <div className="font-bold ml-1 text-[#514F5B]">
                    May 11, 2020 - 12.20
                  </div>
                </div>
              </div>
              <div className="flex justify-between p-[10px] bg-white rounded-lg my-[10px] drop-shadow-md mb-7">
                <div className="">
                  <span className="ml-1 mb-2 block text-[12px] text-[#858D96]">
                    Notes
                  </span>
                  <input
                    className="h-[50px] bg-white appearance-none w-full pt-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[40vw]"
                    type="text"
                    placeholder="Enter notes"
                  />
                </div>
              </div>

              {/* <Link href="/transferSuccess"> */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-[#6379F4] text-white rounded-lg h-[50px] w-[30%] "
                >
                  Continue
                </button>
              </div>
              {/* </Link> */}
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
