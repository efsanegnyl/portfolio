import React, { useState, useEffect } from "react";
import Layout from "components/partials/layout";
import axios from "axios";
import { catchError } from "rxjs";
function ProjectView() {
  const axios = require("axios");
  const [project, setProjects] = useState([]);
  const data = JSON.stringify({
    query: "query { projects { description imageUrl projectUrl statu title } }",
  });

  const config = {
    method: "post",
    url: "https://api-eu-central-1.graphcms.com/v2/cl06zmj0h0u9u01xr6axnbbhq/master",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  useEffect(() => {
    axios(config)
      .then(function (response) {
        setProjects(response.data.data.projects);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Layout>
      <div className="  flex flex-col">
        <div className="mb-10">
          <h2 className="text-xl border-b py-2 px-5  font-bold border-gray-600">
            Projelerim
          </h2>
        </div>

        <div className=" rounded-xl   flex flex-wrap  justify-between">
          {project.map((item) => (
            <div className="md:w-1/3 px-2 py-4  ">
              <a href={item.projectUrl} target="_blank" className="min-h-full">
                <div
                  className="   hover:scale-95 cursor-pointer min-h-full duration-100 rounded-xl bg-[#171923]  mb-5  "
                  key={item.id}
                >
                  <div className="mb-3 rounded-xl">
                    <img src={item.imageUrl} alt="" className="rounded-t-xl" />
                  </div>
                  <div className="px-4">
                    <h2 className="text-amber-300 mb-2 font-semibold ">
                      {item.title}
                    </h2>
                    <h2 className="pb-6">{item.description}</h2>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default ProjectView;
