// "use client";

import Login from "./login";
// import UnLogin from "./UnLogin";
// import react, { useState, useEffect } from "react";

export default function Header() {
  // const [isLogin, setIsLogin] = useState(false);
  // useEffect(() => {
  //   if (localStorage.getItem("@Login")) {
  //     setIsLogin(true);
  //   } else {
  //     setIsLogin(false);
  //   }
  // }, []);
  // return <nav>{isLogin ? <Login setIsLogin={setIsLogin} /> : <UnLogin />}</nav>;
  return <Login />;
}
