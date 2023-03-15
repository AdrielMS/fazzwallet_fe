"use client";

import TransferSuccess from "./statusSuccess";
import TransferFailed from "./statusFailed";

import Cookies from "js-cookie";

export default function StatusTransfer() {
  const transferConfirm = typeof JSON.parse(
    // localStorage.getItem("@transferConfirm")
    Cookies.get("@transferConfirm")
  );
  const transferStatus = transferConfirm === "number";
  return <>{transferStatus ? <TransferSuccess /> : <TransferFailed />}</>;
}
