import React, { useState } from "react";
import Layout from "components/partials/layout";

import TextAnimation from "react-animate-text";
import { Heading } from "@chakra-ui/react";
import {
  MdDateRange,
  MdAlternateEmail,
  MdLocationOn,
  MdComputer,
} from "react-icons/md";
import { RiTwitterLine } from "react-icons/ri";
import { FiGithub, FiInstagram } from "react-icons/fi";
import HomeCard from "../components/elements/home-card";
function HomeView() {
  return (
    <Layout>
      <div
        className="  min-h-full
       "
      >
        <div className="md:flex w-full pb-24 s   ">
          <div className="md:w-1/4 image  ">
            <img
              src="/assets/images/my.jpeg"
              alt=""
              className="image-rounded "
            />
            <div className="bg-white w-2/3 relative left-0 -top-16   rounded-full">
              <ul className="flex justify-around  text-gray-700 text-xl p-2 ">
                <li className="p-2 hover:scale-125 duration-200 hover:text-amber-300 hover:bg-black hover:rounded-full">
                  <a
                    href="https://mobile.twitter.com/efsanegnyl"
                    target="_blank"
                  >
                    <RiTwitterLine className="" />
                  </a>
                </li>
                <li className="p-2 hover:scale-125 duration-200 hover:text-amber-300 hover:bg-black hover:rounded-full">
                  <a
                    href="https://www.instagram.com/efsanegnyl/"
                    target="_blank"
                  >
                    <FiInstagram />
                  </a>
                </li>
                <li className="p-2 hover:scale-125 duration-200 hover:text-amber-300 hover:bg-black hover:rounded-full">
                  <a href="https://github.com/efsanegnyl" target="_blank">
                    <FiGithub />
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="w-3/4 ml-10 mt-16">
            <div className="mb-30">
              <span className="text-xl mb-5">Merhaba 👋</span>
              <Heading className="text-3xl mb-3">
                <span className="text-3xl">Ben</span>
                <TextAnimation> Efsane Günyol</TextAnimation>{" "}
              </Heading>
              <div className="mb-10 ">
                <p className="opacity-75 leading-8 text-xl	">
                  HTML, CSS, SASS, Tailwind, Bootstrap, Javascript,React ile
                  projeler geliştirdim . React Native öğrenmeye başlayarak ,
                  Eisenhower Matrix uygulaması geliştirmeye başladım. Kısa süre
                  içerisinde AppStore ve Play Store'da yayınlama hedefim
                  bulunuyor.
                </p>
              </div>
            </div>
            <div className="mb-10  w-full  border border-amber-300" />
            <div className="w-2/3 ">
              <ul className=" md:flex justify-between">
                <li className="flex items-center mb-2">
                  <MdDateRange className="mr-2  text-amber-300" />
                  <span className="">13.04.1997</span>
                </li>
                <li className="flex items-center mb-2">
                  <MdAlternateEmail className="mr-2 text-amber-300 " />
                  <span>efsanegnyl@gmail.com</span>
                </li>
                <li className="flex items-center">
                  <MdLocationOn className="mr-2 text-amber-300 " />
                  <span>İstanbul , Türkiye</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="">
          <span className="font-bold text-2xl relative mb-14 inline-flex">
            <span className="do ">Neler Yapıyorum</span>
          </span>
          <div className="flex flex-wrap  justify-between">
            <HomeCard image="/assets/images/web-design.png" text="Web Sitesi" />
            <HomeCard image="/assets/images/designer.png" text="Tasarım" />
            <HomeCard
              image="/assets/images/developer.png"
              text=" Yazılım Geliştirme"
            />
            <HomeCard
              image="/assets/images/mobileDev.png"
              text=" Mobil Geliştirme"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default HomeView;
