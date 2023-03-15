"use client";

// import Header from "@/app/component/header/Header";
// import Footer from "@/app/component/footer/footer";
// import Navigation from "@/app/component/navigation";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

export default function editImages() {
  // const id = JSON.parse(localStorage.getItem("@login"))?.user.id;
  const id = JSON.parse(Cookies.get("@login"))?.user.id;

  const [userDetail, setUserDetail] = React.useState([]);

  const [image, setImage] = React.useState(null);
  const onImageUploads = (e) => {
    const file = e.target.value[0];
    setImage(File);
  };

  React.useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/auth/users/${id}`)
      .then((res) => {
        setUserDetail(res.data.data);
      })
      .then((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <div>
        <form>
          <label>Upload an Images</label>
          <Image
            src={
              userDetail.img
                ? "http://localhost:5000/api/v1/public/uploads/images"
                : "/user-default-img.jpg"
            }
            width={50}
            height={50}
            alt=""
          />
          {/* <input type="file" onChange={onImageUploads(e)} /> */}
          <button type="submit">Change</button>
        </form>
      </div>
    </>
  );
}
