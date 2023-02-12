import Header from "../component/header/Header";
import Footer from "../component/footer/footer";
import Navigation from "../component/navigation";
import Image from "next/image";

export default function Profile() {
  return (
    <>
      <Header />
      <div className="flex justify-evenly p-[50px] sm:p-[20px]">
        <div className="hidden sm:flex">
          <Navigation />
        </div>
        <div>
          <div className="p-[40px]">
            <div className="flex justify-center">
              <Image src={"/user1.png"} width={50} height={50} />
            </div>
            <div className="flex justify-center p-[10px]">
              <Image src={"/Vector.png"} width={15} height={1} />
              <button className="text-[10px]">Edit</button>
            </div>
            <div className="mb-[5px]">
              <h1 className="text-center text-[40px]">Robert Chandler</h1>
              <h2 className="text-center">+62 813-9387-7946</h2>
            </div>
          </div>
          <div className="flex justify-between p-[10px] bg-[#E5E8ED] rounded my-[10px]">
            <button className="text-[#4D4B57] font-bold">Personal Info</button>
            <Image src={"/arrow-left.png"} width={20} height={10} />
          </div>
          <div className="flex justify-between p-[10px] bg-[#E5E8ED] rounded my-[10px]">
            <button className="text-[#4D4B57] font-bold">
              Change Password
            </button>
            <Image src={"/arrow-left.png"} width={20} height={10} />
          </div>
          <div className="flex justify-between p-[10px] bg-[#E5E8ED] rounded my-[10px]">
            <button className="text-[#4D4B57] font-bold">Change PIN</button>
            <Image src={"/arrow-left.png"} width={20} height={10} />
          </div>
          <div className="flex justify-between p-[10px] bg-[#E5E8ED] rounded my-[10px]">
            <button className="text-[#4D4B57] font-bold">Log Out</button>
            <Image src={"/arrow-left.png"} width={20} height={10} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
