"use client";

import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function Navigation() {
  // const id = JSON.parse(localStorage.getItem("@login"))?.user.id;
  const id = Cookies.get("@id");

  const router = useRouter();

  return (
    <div className="block h-[100vh]">
      <div className="flex p-[20px] hover:border-l-[1px] border-[blue]">
        <Image src={"/grid.png"} width={20} height={20} className="mr-[10px]" />
        <button className="">
          <Link href="/">Dashboard</Link>
        </button>
      </div>
      <div className="flex p-[20px] hover:border-l-[1px] border-[blue]">
        <Image
          src={"/arrow-up.png"}
          width={20}
          height={20}
          className="mr-[10px]"
        />
        <button className="">
          <Link href="/transfer">Transfer</Link>
        </button>
      </div>
      <div className="flex p-[20px] hover:border-l-[1px] border-[blue]">
        <Image src={"/plus.png"} width={20} height={20} className="mr-[10px]" />
        <button className="">Top Up</button>
      </div>
      <div className="flex p-[20px] hover:border-l-[1px] border-[blue]">
        <Image src={"/grid.png"} width={20} height={20} className="mr-[10px]" />
        <button className="">
          <Link href="/profile">Profile</Link>
        </button>
      </div>
      <div className="flex p-[20px] hover:border-l-[1px] border-[blue]">
        <Image
          src={"/log-out.png"}
          width={20}
          height={20}
          className="mr-[10px]"
        />
        <button
          onClick={() => {
            alert("You have been logged out");
            // localStorage.removeItem("@login");
            Cookies.remove("@login");
            Cookies.remove("@id");
            router.push("/");
          }}
          className=""
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
