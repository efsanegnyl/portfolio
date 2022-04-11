import React, { useState } from "react";
import Layout from "components/partials/layout";
import cn from "classnames";
import educations from "utils/education";
import experiences from "utils/experiences";
import languages from "utils/language";
import designs from "../utils/design";
import { GoLinkExternal } from "react-icons/go";
import { RiReactjsLine } from "react-icons/ri";
import { FaSass, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

function ResumeView() {
  return (
    <Layout>
      <div className="  flex flex-col">
        <div className="mb-10">
          <h2 className="text-xl border-b py-2 px-5  font-bold border-gray-600">
            Öz Geçmiş
          </h2>
        </div>
        <div className="mb-20">
          <div className="w-full flex  justify-center mx-auto">
            <span className="bg-white px-5 py-3 text-gray-700 rounded-full ">
              👩‍💻 Deneyimlerim
            </span>
          </div>

          <div className="   flex  flex-wrap   ">
            {/*   <div className="timeline  border-l h-full border-amber-300 absolute left-1/2 top-0"></div>*/}

            {experiences.map((item, index) => (
              <div
                key={index}
                className={cn([
                  "w-3/6 relative  p-12 ",
                  (index + 1) % 2 === 0 ? "right" : "left",
                ])}
              >
                <div className=" rounded-xl    gray    timeline p-10">
                  <h2 className=" mb-2 text-amber-300 text-sm">{item.year}</h2>
                  <div className=" flex items-center mb-2 font-semibold le">
                    <a
                      href={item.link}
                      target="_blank"
                      className=" mr-2  tracking-wide	"
                    >
                      {item.title}
                    </a>
                    <GoLinkExternal />
                  </div>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="w-full flex justify-center mx-auto">
            <span className="bg-white px-5 py-3 text-gray-700 rounded-full">
              🎓 Eğitimlerim
            </span>
          </div>
          <div className="   flex  flex-wrap pb-32   ">
            {/*   <div className="timeline  border-l h-full border-amber-300 absolute left-1/2 top-0"></div>*/}

            {educations.map((item, index) => (
              <div
                key={index}
                className={cn([
                  "w-3/6 relative  p-5 ",
                  (index + 1) % 2 === 0 ? "right" : "left",
                ])}
              >
                <div className="gray rounded-xl  timeline p-10">
                  <h2 className="text-amber-300 mb-2 text-sm">{item.year}</h2>
                  <span className="font-bold mb-4 flex tracking-wide">
                    {item.title}
                  </span>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <span className="inline-flex border-b pb-1 mb-16 border-amber-300 font-semibold text-2xl  ">
            Yeteneklerim
          </span>

          <div className="  flex flex-wrap items-center rounded-full mb-14 justify-around ">
            <RiReactjsLine className="text-4xl text-amber-300" />
            <FaSass className="text-4xl text-amber-300" />
            <SiTailwindcss className="text-4xl text-amber-300" />
            <FaCss3Alt className="text-4xl text-amber-300" />
            <FaHtml5 className="text-4xl text-amber-300" />
            <IoLogoJavascript className="text-4xl text-amber-300" />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ResumeView;
