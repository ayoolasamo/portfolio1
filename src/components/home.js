import React from "react";

const Home = () => {
  return (
    <div className=" mx-5 lg:mx-16 grid sm:grid-cols-2 mb-20 ">
      <div className=" max-sm:order-1 my-20  w-9/12 lg:w-9/12 text-secondary2 dark:text-secondary">
        <span className="text-4xl lg:text-6xl sm:text-5xl">
          My name is
          <br /> <span className="font-bold">Samo Ayoola</span>
          <br />
        </span>
        <p className="text-lg text-justify my-3 mb-6">A frontend web developer who is mindful about growth and development.</p>
        <div className="grid w-3/4 grid-cols-2 gap-x-6 gap-y-4 text-center ">
          <span className="bg-primary2 p-2 rounded-lg text-l font-medium text-secondary2 ">Javascript</span>
          <span className="bg-primary p-2 rounded-lg text-l font-medium text-secondary ">React.js</span>
          <span className="bg-secondary2 p-2 rounded-lg text-l font-medium text-secondary">Tailwind</span>
          <span className="bg-secondary p-2 rounded-lg text-l font-medium text-secondary2">Redux</span>
        </div>
      </div>
      <div className=" relative max-sm:-right-32  lg:-right-32  -right-28 z-40  topmargin">
        <div className="bg-primary mx-auto -skew-y-[30deg]    rounded-full rounded-r-none image-container  ">
          <img src="../images/profile.png"  alt="profile" className="rounded-full  skew-y-[30deg] w-44 h-96 relative -top-20 "></img>
          <div className=" bg-secondary2 text-secondary p-4     w-36 skew-y-[30deg]    rounded-3xl top-28 absolute -left-20 z-20">
            <span>1+</span>
            <br />
            <span>Year Experience</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
