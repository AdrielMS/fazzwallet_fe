import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <div className="block h-[100vh]">
      <div className="flex p-[20px] hover:border-l-[1px] border-[blue]">
        <Image src={"/grid.png"} width={20} height={20} className="mr-[10px]" />
        <button className="">
          <Link href="/">Dashboard</Link>
        </button>
      </div>
      <div className="flex p-[20px] hover:border-l-[1px] border-[blue]">
        <Image
          src={"/arrow-up.png"}
          width={20}
          height={20}
          className="mr-[10px]"
        />
        <button className="">
          <Link href="/transfer">Transfer</Link>
        </button>
      </div>
      <div className="flex p-[20px] hover:border-l-[1px] border-[blue]">
        <Image src={"/plus.png"} width={20} height={20} className="mr-[10px]" />
        <button className="">Top Up</button>
      </div>
      <div className="flex p-[20px] hover:border-l-[1px] border-[blue]">
        <Image src={"/grid.png"} width={20} height={20} className="mr-[10px]" />
        <button className="">
          <Link href="/profile">Profile</Link>
        </button>
      </div>
      <div className="flex p-[20px] hover:border-l-[1px] border-[blue]">
        <Image
          src={"/log-out.png"}
          width={20}
          height={20}
          className="mr-[10px]"
        />
        <button className="">Log Out</button>
      </div>
    </div>
  );
}
