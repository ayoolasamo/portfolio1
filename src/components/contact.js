import React from "react";

const Contact = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }
  return (
    <div id="contact">
      <div className=" lg:mx-16 mx-5 ">
        <p className="text-secondary2 dark:text-secondary text-3xl font-semibold "> Sold already? </p>
        <div className="md:w-1/12 w-3/12  bg-primary2 h-1 rounded-full mb-10 " />
        <p className="my-4">
          <a
            href="mailto:ayoolasamo7@gmail.com.com"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-primary border-2 border-secondary2  dark:border-secondary  p-1 mr-4"
          >
            send me an email
          </a>
          or
          <a
            href="https://drive.google.com/file/d/1VeSoKoa__woGKjrOuT5PuYEdj4P5liQK/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className=" p-1 m-4 font-bold text-primary border-2 dark:border-secondary  border-secondary2"
          >
            view my CV
          </a>
        </p>
        <div className="grid md:grid-cols-2 gap-20 gap-y-10">
          <form netlify name="contact" className=" " onSubmit={handleSubmit}>
            <p className="mb-2">Feel free to reach out to me by submitting the form below and I would get back to you as soon as possible.</p>

            <label className="text-primary ">Name</label>
            <br />
            <input name="name" className="mb-4 border-secondary2 h-7 w-48" type="text" onChange={(e) => setName(e.target.value)}></input>
            <br />

            <label className="text-primary">Email</label>
            <br />
            <input name="email" className="mb-4 border-secondary2 h-7 w-48" type="email" onChange={(e) => setEmail(e.target.value)}></input>
            <br />

            <label className="text-primary">Message</label>
            <br />
            <textarea
              rows="4"
              name="message"
              className="w-48 mb-4 border-secondary2 "
              type="text"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <br />

            <button submit type="submit" className="bg-primary2 p-2 rounded-lg text-l font-medium text-secondary2">
              SUBMIT
            </button>
          </form>
          <section>
            <h1 class="text-shadow lineUp"> --Hire Me -- </h1>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
