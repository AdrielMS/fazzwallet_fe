"use client";

import TransferSuccess from "./statusSuccess";
import TransferFailed from "./statusFailed";

export default function StatusTransfer() {
  const transferConfirm = typeof JSON.parse(
    localStorage.getItem("@transferConfirm")
  );
  const transferStatus = transferConfirm === "number";
  return <>{transferStatus ? <TransferSuccess /> : <TransferFailed />}</>;
}
