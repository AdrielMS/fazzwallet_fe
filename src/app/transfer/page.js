import Navigation from "../component/navigation";
import Header from "../component/header/Header";
import Footer from "../component/footer/footer";
import Image from "next/image";

export default function Transfer() {
  return (
    <>
      <Header />
      <div className="flex h-[100%] justify-center p-[50px] sm:p-[20px]">
        <div className="hidden sm:flex w-[20%] rounded-xl bg-white drop-shadow-xl mx-[10px]">
          <Navigation />
        </div>
        <div className="w-[100%] mx-[10px]">
          <div className="bg-white rounded-xl drop-shadow-xl">
            <div className="p-5 w-[100%]">
              <h1 className="py-[10px] font-bold">Search Recevier</h1>
              <input
                placeholder="Search Recivier Here"
                className="w-[100%] rounded bg-[#3A3D42] bg-opacity-[10%] px-[10px]"
              />
              <div className="flex justify-between p-[20px] ">
                <div className="flex">
                  <Image src="/user1.png" width={50} height={50} alt="" />
                  <div className="mx-[10px]">
                    <h1>Samuel Suhi</h1>
                    <h2>Accept</h2>
                  </div>
                </div>
                <h1 className="justify-end">+Rp.50.000</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
