import React from "react";

const About = () => {
  return (
    <div id="about" className=" lg:mx-16 mx-5 my-40 text-justify">
      <p className="text-secondary2 dark:text-secondary text-3xl font-semibold "> Get To know me !</p>
      <div className=" md:w-1/12 w-3/12 bg-primary2 h-1 rounded-full mb-10 " />
      <div className="grid lg:grid-cols-2 gap-20 gap-y-10">
        <div className="">
          <p className="">
            I am a Frontend Web Developer that is passionate about implementing visual elements that users see and interact with in a web application.
            I have a strong desire to lead a passionate life and am constantly eager for personal growth.
          </p>
          <p className="lg:my-10  mt-10">
            My technical skills includes
            <span className="text-primary font-bold mx-1">HTML, CSS, javascript, reactJS, redux-toolkit, context API, tailwindcss, Bootstrap.</span>
          </p>
        </div>
        <div className="">
          <p className="about-text">
            <span className="text-primary font-bold ">I am open to Job opportunities </span> where I can contribute, learn and grow. If you have a
            good opportunity that matches my skills and experience then don't hesitate to contact me.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
