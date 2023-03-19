"use client";

import Navigation from "../../component/navigation";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/footer";

import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function TransferNominal() {
  const segment = usePathname();
  const router = useRouter();
  const id = segment.split("/")[2];
  // const idl = JSON.parse(localStorage.getItem("@login"))?.user.id;
  const idl = Cookies.get("@id");
  const [userDetail, setUserDetail] = useState([]);
  const [senderDetail, setSenderDetail] = useState([]);
  const [transferData, setTransferData] = useState(0);

  useEffect(() => {
    axios
      // .get(`http://localhost:5000/api/v1/auth/users/${id}`)
      .get(`https://fazzwallet.cyclic.app/api/v1/auth/users/${id}`)
      .then((result) => {
        console.log(result.data.data);
        setUserDetail(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      // .get(`http://localhost:5000/api/v1/auth/users/${idl}`)
      .get(`https://fazzwallet.cyclic.app/api/v1/auth/users/${idl}`)
      .then((res) => {
        console.log(res.data.data);
        setSenderDetail(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleTransfer = (event) => {
    event.preventDefault();
    // parseInt(transferData);
    console.log(transferData);
    // localStorage.setItem("@transfer", transferData);
    Cookies.set("@transfer", transferData);
    router.push(`/transfer/confirm/${userDetail.id}`);
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
                  <Image
                    className="rounded-xl"
                    src="/user-default-img.jpg"
                    width={80}
                    height={80}
                    alt=""
                  />
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
              <div className="mb-7 text-[#7A7886]">
                Type the amount you want to transfer and then <br /> press
                continue to the next steps.
              </div>
            </div>
            <form onSubmit={handleTransfer}>
              <div className="mb-10 flex justify-center w-full">
                <div className="w-full">
                  <div className="flex justify-center">
                    <input
                      onChange={(e) => {
                        setTransferData(e.target.value);
                      }}
                      className="h-[50px] bg-white appearance-none border-b-2 w-[40%] text-[40px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline flex justify-center"
                      type="number"
                      placeholder="0.00"
                    />
                  </div>
                  <div className="font-bold my-10 flex justify-center">
                    {senderDetail.balance}
                  </div>
                  <div className="flex justify-center">
                    <input
                      className="h-[50px] bg-white appearance-none border-b-2 w-[45%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="add some notes"
                    />
                  </div>
                </div>
              </div>
              {/* <Link href="/transferConfirm" className="w-full"> */}
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
