import React, { useState, useEffect } from "react";
import Layout from "components/partials/layout";
import axios from "axios";
import { catchError } from "rxjs";
function BlogView() {
    const [blog, setBlog] = useState([]);
    const config = {
        method: 'get',
        url: 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@efsanegnyl',
        headers: { }
    };

  useState(() => {
      axios(config)
          .then(function (response) {
              setBlog(response.data.items);
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
                        Blog
                    </h2>
                </div>


               <div className=" rounded-xl flex flex-wrap ">
                   {
                     blog.map((item)=>(
                         <div className="md:w-1/3 px-2 py-4   " key={item.id}>
                                        <a href={item.link} target="_blank" className="min-h-full ">
                                            <div
                                                className="hover:scale-95 cursor-pointer min-h-full duration-100 border border-gray-700 rounded-xl bg-[#171923]  mb-5  "
                                            >
                                                <div className="mb-4 rounded-xl">
                                                    <img src={item.thumbnail} alt="" className="rounded-t-xl" />
                                                </div>
                                                <div className="px-4">
                                                    <h2 className="text-gray-300 text-lg   mb-4 font-semibold ">
                                                        {item.title}
                                                    </h2>
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

export default BlogView;
