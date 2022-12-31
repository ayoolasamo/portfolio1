import React from "react";
import { projectData } from "../../projectData";

export const Projects = () => {
  return (
    <div id="projects ">
      <div className=" lg:mx-16 mx-5 mb-20 md:mb-80 ">
        <p className="text-secondary2 dark:text-secondary text-3xl font-semibold "> Latest Projects </p>
        <div className="md:w-1/12 w-3/12  bg-primary2 h-1 rounded-full mb-10 " />

        <div className="grid md:grid-cols-3  md:gap-7 gap-20 mx-8 md:mx-0 projects">
          {projectData.map((data) => {
            return (
              <div className="p md:relative">
                <img src={data.projectImage} alt="project" className=" rounded-2xl  w-11/12  h-56"></img>
                <p className="p-3 float-right rounded-2xl text-secondary text-center  text-3xl bg-secondary2 relative -top-6">{data.projectId}</p>
                <div className="px-4">
                  <h4 className="font-semibold text-xl text-secondary2 dark:text-yellow-100">{data.projectName}</h4>
                  <p className=" text-justify text-sm my-3">{data.projectSummary}</p>
                  <a
                    className=" underline decoration-primary text-secondary2 dark:text-yellow-100 hover:text-primary text-lg  font-semibold"
                    target="_blank"
                    rel="noreferrer"
                    href={data.githubURL}
                  >
                    Github
                  </a>
                  <a
                    className=" mx-10 underline decoration-primary text-secondary2 dark:text-yellow-100 hover:text-primary text-lg  font-semibold"
                    href={data.demoURL}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

