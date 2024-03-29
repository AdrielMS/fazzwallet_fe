"use client";

import Header from "../component/header/Header";
import Footer from "../component/footer/footer";
import Navigation from "../component/navigation";

import react, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function Profile() {
  const router = useRouter();

  // const id = JSON.parse(localStorage.getItem("@login"))?.user.id;
  const id = Cookies.get("@id");
  const [userDetail, setUserDetail] = useState([]);
  useEffect(() => {
    axios
      // .get(`http://localhost:5000/api/v1/auth/users/${id}`)
      .get(`https://fazzwallet.cyclic.app/api/v1/auth/users/${id}`)
      .then((res) => {
        setUserDetail(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  axios.patch;

  return (
    <>
      <Header />
      <div className="flex justify-evenly p-[50px] sm:p-[20px]">
        <div className="hidden sm:flex">
          <Navigation />
        </div>
        <div>
          <div className="p-[40px]">
            <div className="flex justify-center">
              <Image src={"/user1.png"} width={50} height={50} />
            </div>
            <div className="flex justify-center p-[10px]">
              <Image src={"/Vector.png"} width={15} height={1} />
              <button
                className="text-[10px]"
                // onClick={router.push(`/editImages/${id}`)}
              >
                <Link href={`/profile/editImages/${id}`}>Edit</Link>
              </button>
            </div>
            <div className="mb-[5px]">
              <h1 className="text-center text-[40px]">{userDetail.name}</h1>
              <h2 className="text-center">{userDetail.phone}</h2>
            </div>
          </div>
          <div className="flex justify-between p-[10px] bg-[#E5E8ED] rounded my-[10px]">
            <button className="text-[#4D4B57] font-bold">
              <Link href={`/profile/personalInfo/${id}`}>personal info</Link>
            </button>
            <Image src={"/arrow-left.png"} width={20} height={10} />
          </div>
          <div className="flex justify-between p-[10px] bg-[#E5E8ED] rounded my-[10px]">
            <button className="text-[#4D4B57] font-bold">
              <Link href={`/profile/editPassword/${id}`}>Edit Password</Link>
            </button>
            <Image src={"/arrow-left.png"} width={20} height={10} />
          </div>
          <div className="flex justify-between p-[10px] bg-[#E5E8ED] rounded my-[10px]">
            <button className="text-[#4D4B57] font-bold">Change PIN</button>
            <Image src={"/arrow-left.png"} width={20} height={10} />
          </div>
          <div className="flex justify-between p-[10px] bg-[#E5E8ED] rounded my-[10px]">
            <button className="text-[#4D4B57] font-bold">Log Out</button>
            <Image src={"/arrow-left.png"} width={20} height={10} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
