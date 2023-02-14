"use client";

import Header from "@/app/component/header/Header";
import Footer from "@/app/component/footer/footer";
import Navigation from "@/app/component/navigation";

import react, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();

  const id = JSON.parse(localStorage.getItem("@login"))?.user.id;
  const [userDetail, setUserDetail] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/auth/users/${id}`)
      .then((res) => {
        setUserDetail(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const [changeData, setChangeData] = useState({
    password: "",
  });

  const handleUpdate = (event) => {
    event.preventDefault();
    axios({
      method: "PATCH",
      url: `http://localhost:5000/api/v1/auth/users/${id}`,
      data: changeData,
    })
      .then((result) => {
        alert(result.data.message);
        router.refresh();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Header />
      <div className="flex justify-evenly p-[50px] sm:p-[20px]">
        <div className="hidden sm:flex">
          <Navigation />
        </div>
        <div className="w-[50vw]">
          <div className="shadow-xl p-[10px]">
            <div className="mb-[30px] p-[30px] ">
              <h1 className="font-bold text-[20px]">Change Password</h1>
            </div>
            <div className="mb-[30px] p-[30px] ">
              <h1 className="font-bold mb-[30px]">Input Password</h1>
              <form onSubmit={handleUpdate} className="flex justify-between">
                <input
                  onChange={(e) => {
                    setChangeData({
                      ...changeData,
                      password: e.target.value,
                    });
                  }}
                  className="text-[15px] border-[1px] border-black rounded"
                />
                <button
                  type="submit"
                  className="border-[1px] border-white text-[#6379F4]"
                >
                  Change
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
