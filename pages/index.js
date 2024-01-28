import React from "react";
import Header1 from "../components/Header1";
import Header2 from "@/components/Header2";
import Banner from "@/components/Banner";
import Image from "next/image";
import Head from "next/head";
import Header4 from "@/components/Header4";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>
          OYO: India&#x27;s Best Online Hotel Booking Site for Sanitized Stays
        </title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Header1 />
      <Header2 />
      <Banner />
      <div className="mx-20">
        <div className="my-14">
          <Image
            src={"/banner3.avif"}
            alt="banner1"
            width={100}
            height={200}
            className="w-full h-80"
          />
        </div>
        <div className="mb-14">
          <Image
            src={"/banner4.avif"}
            alt="banner1"
            width={100}
            height={200}
            className="w-full h-40"
          />
        </div>
        <Header4 />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
