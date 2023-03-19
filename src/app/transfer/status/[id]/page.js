"use client";

import TransferSuccess from "./statusSuccess";
import TransferFailed from "./statusFailed";

import Cookies from "js-cookie";

export default function StatusTransfer() {
  const transferConfirm = Cookies.get("@transferConfirm");
  // const transferConfirm = localStorage.getItem("@transferConfirm")
  const transferStatus = transferConfirm === "number";
  return <>{transferStatus ? <TransferSuccess /> : <TransferFailed />}</>;
}
