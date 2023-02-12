import Navigation from "../component/navigation";
import Header from "../component/header/Header";
import Footer from "../component/footer/footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex justify-evenly p-[50px] sm:p-[20px]">
        <div className="hidden sm:flex">
          <Navigation />
        </div>
        <div>
          <div className="block sm:flex border-[1px] rounded-xl p-[40px] bg-[#6379F4] w-[100%]">
            <div className="w-[100%]">
              <h1 className="mb-[10px] text-[#FFFFFF]">Balance</h1>
              <h1 className="mb-[10px] text-[#FFFFFF] text-[50px]">
                Rp120.000
              </h1>
              <h1 className="text-[#FFFFFF]">+6282112801436</h1>
            </div>
            <div>
              <button className="block w-[100%] border-[1px] px-[30px] py-[10px] rounded mb-[50px] bg-[#FFFFFF] opacity-[50%] hover:opacity-[100%]">
                Transfer
              </button>
              <button className="block w-[100%] border-[1px] py-[10px] rounded bg-[#FFFFFF] opacity-[50%] hover:opacity-[100%]">
                Top Up
              </button>
            </div>
          </div>
          <div className="block sm:flex sm:p-[30px] sm:justify-between">
            <div className="block">
              <div className="flex justify-between ">
                <Image src={"/in2.png"} width={100} height={100} />
                <Image src={"/out2.png"} width={100} height={100} />
              </div>
              <div className="px-[30px]">
                <Image src={"/graphic.png"} width={250} height={250} />
              </div>
            </div>
            <div className="history">
              <h1>Transaction History</h1>
              <div className="flex p-[20px]">
                <Image src={"/user1.png"} width={50} height={50} />
                <div className="mx-[10px]">
                  <h1>Samuel Suhi</h1>
                  <h2>Accept</h2>
                </div>
                <h1>+Rp.50.000</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
