import { Button } from "flowbite-react";

export default function About() {
  return (
    <div id="about" className="bg-gray-900 text-white p-10">
          <h2 className=" text-center text-4xl mb-10 font-bold">ABOUT ME</h2>
          <p className="text-center text-2xl mb-10 font-medium">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
          <div className="grid lg:grid-cols-2 gap-10">
              <div>
                  <p className="text-xl mb-5 leading-10">
                      I'm a Frontend Focused Web Developer building and managing the Front-end of Websites.Check out some of my work in the <a
                      href="#projects"    className="text-blue-400 cursor-pointer hover:text-blue-500 transition-all">Projects</a> section.
                  </p>
                  <p className="text-xl mb-5 leading-10">
                    I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.  
                  </p>
                  <div className="">
                      <a  href="#projects">
                        <Button className="mx-auto inline  mt-7 font-bold text-xl cursor-pointer " color="alternative">Contact Me</Button>
                      </a>
                      <Button className="mx-auto inline ms-3 mt-7 font-bold text-xl cursor-pointer "  color="alternative">View Cv <i className="fa-solid fa-eye"></i></Button>
                  </div>
              </div>
              <div>
                  <p className="text-xl font-light leading-10">SKIILS</p>
                  <div className="bg-white py-2 mb-4 px-4 shadow-sm shadow-gray-300 text-gray-950 font-bold text-xl rounded-lg">
                      Html
                  </div>
                  <div className="bg-white py-2 mb-4 px-4 shadow-sm shadow-gray-300 text-gray-950 font-bold text-xl rounded-lg">
                      Css
                  </div>
                  <div className="bg-white py-2 mb-4 px-4 shadow-sm shadow-gray-300 text-gray-950 font-bold text-xl rounded-lg">
                      Bootstarp
                  </div>
                  <div className="bg-white py-2 mb-4 px-4 shadow-sm shadow-gray-300 text-gray-950 font-bold text-xl rounded-lg">
                      Tialwind
                  </div>
                  <div className="bg-white py-2 mb-4 px-4 shadow-sm shadow-gray-300 text-gray-950 font-bold text-xl rounded-lg">
                      Java Script
                  </div>
                  <div className="bg-white py-2 mb-4 px-4 shadow-sm shadow-gray-300 text-gray-950 font-bold text-xl rounded-lg">
                    Type Script
                  </div>
                  <div className="bg-white py-2 mb-4 px-4 shadow-sm shadow-gray-300 text-gray-950 font-bold text-xl rounded-lg">
                      Jquery
                  </div>
                  <div className="bg-white py-2 mb-4 px-4 shadow-sm shadow-gray-300 text-gray-950 font-bold text-xl rounded-lg">
                      React
                  </div>
                  <div className="bg-white py-2 mb-4 px-4 shadow-sm shadow-gray-300 text-gray-950 font-bold text-xl rounded-lg">
                      Next
                  </div>

              </div>
          </div>
    </div>
  )
}
