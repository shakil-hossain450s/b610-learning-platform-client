import React from "react";

const FAQ = () => {
  return (
    <div >
      <h3 className="text-4xl text-center font-semibold my-8">FAQ: Frequently Asked Question</h3>
      <hr className="w-[50%] mx-auto border-2 my-1"/>
      <div className="grid grid-cols-2 gap-8 mx-8 mt-12 mb-[20%]">
        <div className="border-2 shadow-xl rounded-lg p-5">
          <h2 className="text-2xl font-medium">What is the <mark style={{ backgroundColor: "cyan" }}>Web Development</mark>?</h2>
          <div className="divider my-2"></div>
          <p>
            Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).[1] Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services. A more comprehensive list of tasks to which Web development commonly refers, may include Web engineering, Web design, Web content development, client liaison, client-side/server-side scripting, Web server and network security configuration, and e-commerce development.
          </p>
        </div>
        <div className="border-2 shadow-xl rounded-lg p-5">
          <h2 className="text-2xl font-medium">Why This <mark style={{ backgroundColor: "yellowgreen" }}>Course</mark>?</h2>
          <div className="divider my-2"></div>
          <p>
            Web development gives you the opportunity to express yourself creatively on the internet. If you have an idea you would like to try as you discover your web dev skills, try it out. Web dev is a fun, creative experience.
          </p>
        </div>
        <div className="border-2 shadow-xl rounded-lg p-5">
          <h2 className="text-2xl font-medium"><mark style={{ backgroundColor: "lightblue" }}>Benefits</mark> of Web Development</h2>
          <div className="divider my-2"></div>
          <p>

            The Internet is the most valuable invention of the modern world. Many see it as an inexhaustible source of data, capable of offering the ideal solution to any problem with a couple of clicks. PWM, as a pioneer of web development, cannot promise that the Internet has the answer to everything; what is certain is that your business needs to carve its space numerically. The benefits of web development are contemporary necessities for businesses of today.
          </p>
        </div>
        <div className="border-2 shadow-xl rounded-lg p-5">
          <h2 className="text-2xl font-medium">Why Should I Learn <mark>Web Development</mark> ? </h2>
          <div className="divider my-2"></div>
          <p>Web development has a number of pros: High earning potential, opportunity for growth, and flexibility are usually top of mind for most who get into the industry. Some of the challenges for people who pursue web development is the competitive nature of the job market.</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
