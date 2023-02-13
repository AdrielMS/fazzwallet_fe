import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="bg-white p-10 rounded-b-[20px] drop-shadow-xl">
      <div className="flex justify-between w-[100%] px-10">
        <div className="self-center">
          <Link href="/home">
            <Image src="/logo-blue.png" width={100} height={80} alt="" />
          </Link>
        </div>
        <div className="flex items-center">
          <div className="px-2">
            <Image
              className="rounded-xl"
              src="/rectangle 25.png"
              width={40}
              height={40}
              alt=""
            />
          </div>
          <div className="px-2">
            <div className="text-[#3A3D42] font-bold">Robert Chandler</div>
            <div className="">+62813938777946</div>
          </div>
          <div className="px-2">
            <Image src="/bell.png" width={23} height={23} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
