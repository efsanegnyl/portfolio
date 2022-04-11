import React, { useState } from "react";
import Layout from "components/partials/layout";
import cn from "classnames";
function ResumeCard({ index }) {
  return (
    <Layout>
      <div className="   flex  flex-wrap   ">
        <div
          key={index}
          className={cn([
            "w-3/6 relative  p-5 ",
            (index + 1) % 2 === 0 ? "right" : "left",
          ])}
        >
          <div className="gray rounded-xl  timeline p-10">
            <h2 className="text-amber-300 mb-2 text-sm">{item.year}</h2>
            <span className="font-bold mb-4 flex">{item.title}</span>
            <p>{item.description}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ResumeCard;
