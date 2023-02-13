import Image from "next/image";
import { Inter } from "@next/font/google";
import Header from "./component/header/Header";
import Footer from "./component/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export default function LandingPage() {
  return (
    <>
      {/* <Header /> */}
      <div className="block content-center sm:flex justify-center">
        <div className="hidden sm:flex">
          <Image src="/png-phone.png" height={700} width={350} />
        </div>
        <div className="grid content-center">
          <h1 className="text-[50px] w-[500px] block font-bold my-[20px]">
            Awesome App For Saving <a className="text-[#6379F4]">Time</a>
          </h1>
          <div className="flex justify-center sm:hidden">
            <Image src="/png-phone.png" height={700} width={350} />
          </div>
          <h2 className="display center sm:w-[400px] block content-center my-[20px]">
            We bring you a mobile app for banking problems that oftenly wasting
            much of your times.
          </h2>
          <button className="py-[10px] px-[20px] rounded-xl bg-[#6379F4] my-[20px] text-[#FFFFFF] w-[150px]">
            Try it free
          </button>
          <Image
            src="/group 50.png"
            width={100}
            height={50}
            className="my-[20px]"
          />
        </div>
      </div>
      <div className="flex justify-center p-[30px] bg-[#473AD1] bg-opacity-[6%] w-[100%]">
        <Image src="/Group 51.png" height={1000} width={500} />
      </div>

      <Footer />
    </>

    // <main className={styles.main}>
    //   <div className={styles.description}>
    //     <p>
    //       Get started by editing&nbsp;
    //       <code className={styles.code}>src/app/page.js</code>
    //     </p>
    //     <div>
    //       <a
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{" "}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className={styles.vercelLogo}
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className={styles.center}>
    //     <Image
    //       className={styles.logo}
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //     <div className={styles.thirteen}>
    //       <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
    //     </div>
    //   </div>

    //   <div className={styles.grid}>
    //     <a
    //       href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={inter.className}>
    //         Docs <span>-&gt;</span>
    //       </h2>
    //       <p className={inter.className}>
    //         Find in-depth information about Next.js features and API.
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={inter.className}>
    //         Templates <span>-&gt;</span>
    //       </h2>
    //       <p className={inter.className}>Explore the Next.js 13 playground.</p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={inter.className}>
    //         Deploy <span>-&gt;</span>
    //       </h2>
    //       <p className={inter.className}>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>
  );
}
