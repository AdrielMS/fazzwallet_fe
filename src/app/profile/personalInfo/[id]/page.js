"use client";

import Header from "@/app/component/header/Header";
import Footer from "@/app/component/footer/footer";
import Navigation from "@/app/component/navigation";

import react, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function Profile() {
  const router = useRouter();

  // const id = JSON.parse(localStorage.getItem("@login"))?.user.id;
  const id = Cookies.get("@login")?.user.id;
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
    name: "",
    email: "",
    phone: "",
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
        router.reload();
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
          <form onSubmit={handleUpdate} className="flex justify-between">
            <div className="shadow-xl p-[10px]">
              <div className="mb-[5px] p-[30px] ">
                <h1 className="font-bold text-[20px]">Personal Information</h1>
                <h2 className="w-[50%] text-[15px]">
                  We got your personal information from the sign up proccess. If
                  you want to make changes on your information, contact our
                  support.
                </h2>
              </div>
              <div className="mb-[30px] p-[30px] ">
                <h1 className="font-bold text-[20px]">Name</h1>
                <input
                  onChange={(e) => {
                    setChangeData({
                      ...changeData,
                      name: e.target.value,
                    });
                  }}
                  className="text-[15px] w-[100%]"
                  placeholder={userDetail.name}
                />
              </div>
              <div className="mb-[30px] p-[30px] ">
                <h1 className="font-bold text-[20px]">Verified Email</h1>
                <input
                  onChange={(e) => {
                    setChangeData({
                      ...changeData,
                      email: e.target.value,
                    });
                  }}
                  className="text-[15px] w-[100%]"
                  placeholder={userDetail.email}
                />
              </div>
              <div className="mb-[30px] p-[30px] ">
                <h1 className="font-bold text-[20px]">Phone Number</h1>
                {/* <form onSubmit={handleUpdate} className="flex justify-between"> */}
                <div className="flex justify-between">
                  <input
                    onChange={(e) => {
                      setChangeData({
                        ...changeData,
                        phone: e.target.value,
                      });
                    }}
                    className="text-[15px] w-[100%]"
                    placeholder={userDetail.phone}
                  />
                  <button
                    type="submit"
                    className="border-[1px] border-white text-[#6379F4]"
                  >
                    Change
                  </button>
                </div>
                {/* </form> */}
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
