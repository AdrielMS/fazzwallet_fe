import Footer from "@/app/component/footer/footer";
import Header from "@/app/component/header/Header";
import Navigation from "@/app/component/navigation";
import Link from "next/link";
import Image from "next/image";

export default function TransferSuccess() {
  return (
    <>
      <Header />
      <div className="flex justify-evenly p-[50px] sm:p-[20px]">
        <section className="hidden sm:flex w-[20%] rounded-xl bg-white drop-shadow-xl h-[100vh]">
          <Navigation />
        </section>
        <section className="h-[100vh]">
          <div className="p-5 mr-5  bg-white rounded-xl h-[100%] drop-shadow-lg w-[50vw]">
            <div className="flex justify-center my-5">
              <div className="flex">
                <Image
                  className="rounded-xl justify-center"
                  src="/success.png"
                  width={171}
                  height={130}
                  alt=""
                />
              </div>
            </div>
            <form className="h-[100%]">
              <div className="flex justify-between p-[10px] bg-white rounded-lg my-[10px] drop-shadow-md mb-7">
                <div className="">
                  <span className="ml-1 mb-2 block text-[12px] text-[#858D96]">
                    Amount
                  </span>
                  <div className="font-bold ml-1 text-[#514F5B]">
                    Rp.100.000
                  </div>
                </div>
              </div>
              <div className="flex justify-between p-[10px] bg-white rounded-lg my-[10px] drop-shadow-md mb-7">
                <div className="">
                  <span className="ml-1 mb-2 block text-[12px] text-[#858D96]">
                    Balance left
                  </span>
                  <div className="font-bold ml-1 text-[#514F5B]">
                    Rp.1.000.000
                  </div>
                </div>
              </div>
              <div className="flex justify-between p-[10px] bg-white rounded-lg my-[10px] drop-shadow-md mb-7">
                <div className="">
                  <span className="ml-1 mb-2 block text-[12px] text-[#858D96]">
                    Date & Time
                  </span>
                  <div className="font-bold ml-1 text-[#514F5B]">
                    May 11, 2020 - 12.20
                  </div>
                </div>
              </div>
              <div className="flex justify-between p-[10px] bg-white rounded-lg my-[10px] drop-shadow-md mb-7">
                <div className="">
                  <span className="ml-1 mb-2 block text-[12px] text-[#858D96]">
                    Notes
                  </span>
                  <div className="font-bold ml-1 text-[#514F5B]">
                    For buying socks
                  </div>
                </div>
              </div>

              <div className="font-bold">Transfer to</div>
              <div className="py-[40px]">
                <div className="flex items-center p-[10px] bg-white rounded-lg my-[10px] drop-shadow-md mb-7 h-[100px]">
                  <div className="px-2">
                    <Image
                      className="rounded-xl"
                      src="/runrun.png"
                      width={80}
                      height={80}
                      alt=""
                    />
                  </div>
                  <div className="px-2">
                    <div className="text-[#3A3D42] font-bold mb-2">
                      Morita Hikaru
                    </div>
                    <div className="">+62813938772</div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex justify-end">
                  <div className="flex mx-4">
                    <button className="bg-[#6379F426] text-[#6379F4] rounded-lg h-[50px] px-10">
                      Download PDF
                    </button>
                  </div>
                  <Link href="/home">
                    <div className="flex mx-4">
                      <button className="bg-[#6379F4] text-white rounded-lg h-[50px] px-10">
                        Continue
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
