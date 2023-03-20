"use client";

import Navigation from "../component/navigation";
import Header from "../component/header/Header";
import Footer from "../component/footer/footer";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Transfer() {
  const router = useRouter();
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios
      // .get(`http://localhost:5000/api/v1/auth/users`)
      .get(
        `https://fazzwalletbe-adrel-production.up.railway.app/api/v1/auth/users`
      )
      .then((result) => {
        console.log(result.data.data);
        setUserData(result.data.data);
      })
      .then((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="flex h-[100%] justify-center p-[50px] sm:p-[20px]">
        <div className="hidden sm:flex w-[20%] rounded-xl bg-white drop-shadow-xl mx-[10px]">
          <Navigation />
        </div>
        <div className="w-[100%] mx-[10px]">
          <div className="bg-white rounded-xl drop-shadow-xl">
            <div className="p-5 w-[100%]">
              <h1 className="py-[10px] font-bold">Search Recevier</h1>
              <input
                placeholder="Search Recivier Here"
                className="w-[100%] rounded bg-[#3A3D42] bg-opacity-[10%] px-[10px]"
              />
              {userData?.map((index) => {
                return (
                  <div className="flex justify-between p-[20px]" key={index.id}>
                    <div
                      onClick={() => router.push(`/transfer/${index.id}`)}
                      className="flex p-[5px] hover:border-[1px] hover:border-black w-[100%]"
                    >
                      <Image
                        src={
                          userData.img
                            ? `https://fazzwalletbe-adrel-production.up.railway.app/api/v1/public/uploads/images/${userData.img}`
                            : `/user-default-img.jpg`
                        }
                        width={50}
                        height={50}
                        alt=""
                      />
                      <div className="mx-[10px]">
                        <h1>{index.name}</h1>
                        <h2>
                          {index.phone ? index.phone : "Phone not filled yet"}
                        </h2>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
