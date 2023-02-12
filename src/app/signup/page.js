import Image from "next/image";

export default function Signup() {
  return (
    <>
      <main className="bg-white h-screen flex h-[1000px]">
        <section className="bg-black invisible w-[0px] bg-hero lg:visible lg:w-screen">
          <div className="m-[50px] align-center h-[85%]  from-violet-500 to-fuchsia-500 bg-no-repeat bg-cover">
            <div className="pl-10 invisible lg:visible">
              <Image src="/logo-white.png" width={100} height={80} alt="" />
            </div>
            <div className="pl-10 pt-10 invisible lg:visible">
              <Image src="/prev1.png" width={440} height={440} alt="" />
            </div>
            <div className="lg:text-[24px] mx-[50px] font-semibold text-white">
              App that Covering Banking Needs.
            </div>
            <div className="mx-[50px] mt-[30px] text-[14px] text-white">
              FazzPay is an application that focussing in banking needs for all
              users in the world. Always updated and always following world
              trends. 5000+ users registered in FazzPay everyday with worldwide
              users coverage.
            </div>
          </div>
        </section>
        <section className="w-screen">
          <div className="h-[85%] lg:m-[50px]">
            <div className="pl-5 pt-10 lg:invisible">
              <Image
                className=" pt-10 lg:invisible"
                src="/logo-blue.png"
                width={70}
                height={60}
                alt=""
              />
            </div>
            <div className="text-center flex pl-5 pt-10 text-[32px] font-bold text-[#3A3D42] lg:hidden lg:h-[0%] ">
              Sign up
            </div>
            <div className=" mb-6 hidden lg:flex lg:pl-5 lg:text-[32px] font-semi-bold text-[#3A3D42]">
              Start Accessing Banking Needs <br /> With All Devices and All
              Platforms <br /> With 30.000+ Users
            </div>

            <div className="flex lg:hidden pl-5 pt-2 text-[14px] text-[#858D96]">
              Create your account to access FazzPay.
            </div>

            <div className="hidden lg:flex pl-5 pt-2 text-[14px] text-[#858D96]">
              Transfering money is eassier than ever, you can access <br />{" "}
              FazzPay wherever you are. Desktop, laptop, mobile phone? <br /> we
              cover all of that for you!
            </div>
            <form className=" mt-10 ml-5 mr-5">
              <div className="mb-4">
                <span className="ml-1 block text-[12px] text-[#858D96]">
                  First Name
                </span>
                <input
                  className="h-[50px] bg-white appearance-none border-b-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="Enter your First Name"
                />
              </div>
              <div className="mb-4">
                <span className="ml-1 block text-[12px] text-[#858D96]">
                  Last Name
                </span>
                <input
                  className="h-[50px] bg-white appearance-none border-b-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="Enter your Last Name"
                />
              </div>
              <div className="mb-4">
                <span className="ml-1 block text-[12px] text-[#858D96]">
                  Email
                </span>
                <input
                  className="h-[50px] bg-white appearance-none border-b-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="Enter your Email"
                />
              </div>
              <div className="mb-[70px]">
                <span className="ml-1 block text-[12px] text-[#858D96]">
                  Password
                </span>
                <input
                  className="h-[50px] bg-white appearance-none border-b-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="password"
                  placeholder="Enter your Password"
                />
              </div>

              <div className="flex justify-center m-5">
                <button
                  type="submit"
                  className="bg-[#DADADA] text-[#88888F] hover:bg-[#6379F4] hover:text-white font-bold py-2 px-4 w-[343px] h-[50px] w-[100%] rounded-xl"
                >
                  Sign up
                </button>
              </div>
              <div className="flex justify-center m-7">
                <div className="text-[14px]">Already have an account? Lets</div>

                <button className="text-[14px] ml-1 text-[#6379F4] font-bold">
                  Login
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
