import Navigation from "../../component/navigation";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/footer";
import Image from "next/image";
import Link from "next/link";

export default function TransferNominal() {
  return (
    <>
      <Header />
      <div className="flex justify-evenly p-[50px] sm:p-[20px]">
        <section className="hidden sm:flex w-[20%] rounded-xl bg-white drop-shadow-xl h-[100vh]">
          <Navigation />
        </section>
        <section className="">
          <div className="p-5 mr-5  bg-white rounded-xl h-[100%] drop-shadow-lg w-[50vw]">
            <div className="font-bold">Transfer to</div>
            <div className="py-[40px]">
              <div className="flex items-center p-[10px] bg-white rounded-lg my-[10px] drop-shadow-md mb-7 h-[100px]">
                <div className="px-2">
                  <Image
                    className="rounded-xl"
                    src="/rectangle 25.png"
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
            <div>
              <div className="mb-7 text-[#7A7886]">
                Type the amount you want to transfer and then <br /> press
                continue to the next steps.
              </div>
            </div>
            <form>
              <div className="mb-10 flex justify-center w-full">
                <div className="w-full">
                  <div className="flex justify-center">
                    <input
                      className="h-[50px] bg-white appearance-none border-b-2 w-[40%] text-[40px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline flex justify-center"
                      id="email"
                      type="text"
                      placeholder="0.00"
                    />
                  </div>
                  <div className="font-bold my-10 flex justify-center">
                    Rp. 1.000.000 available
                  </div>
                  <div className="flex justify-center">
                    <input
                      className="h-[50px] bg-white appearance-none border-b-2 w-[45%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="text"
                      placeholder="add some notes"
                    />
                  </div>
                </div>
              </div>
              <Link href="/transferConfirm" className="w-full">
                <div className="flex justify-end">
                  <button className="bg-[#6379F4] text-white rounded-lg h-[50px] w-[30%] ">
                    Continue
                  </button>
                </div>
              </Link>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
