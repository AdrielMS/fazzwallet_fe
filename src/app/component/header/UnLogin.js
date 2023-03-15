import Link from "next/link";
import Image from "next/image";

export default function UnLogin() {
  return (
    <>
      <div>
        <div className="flex justify-between p-10">
          <Image src="/logo-blue.png" width={100} height={80} alt="" />
          <div className="flex">
            <button className="p-[10px] border-[1px] rounded mx-[10px]">
              <Link href="/login">Login</Link>
            </button>
            <button className="p-[10px] border-[1px] rounded bg-[#6379F4] mx-[10px]">
              <Link href="/signup">Sign Up</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
