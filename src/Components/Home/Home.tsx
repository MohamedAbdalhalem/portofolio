import { Button } from "flowbite-react";


export default function Home() {
  return (
    <div id="home" className='bg-gray-950  p-10 min-h-screen  flex juctify-center items-center'>
         <div>
             <h1 className="w-full text-center mb-7 font-bold text-white text-4xl">HEY, I'M MOHAMED ABDELHALIM</h1>
              <p className="text-white text-center leading-10 text-2xl">Front-End Developer with a strong foundation in <span className="text-blue-400  font-bold">React </span> , HTML, Typescript, CSS, and JavaScript. Focused on building responsive and user-friendly web applications. Passionate about learning new technologies and creating dynamic user interfaces. Eager to contribute to projects and grow as a developer</p>
              <div className="text-center mt-7">
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=https://mail.google.com/mail/?view=cm&fs=1&to=example@gmail.com" target="_blank" className="fa-solid fa-envelope cursor-pointer mx-3 text-white text-3xl"></a>
                  <a href="https://github.com/MohamedAbdalhalem" target="_blank" className="fa-brands fa-github cursor-pointer mx-3 text-white text-3xl"></a>
                  <a href="https://www.linkedin.com/in/mohamed-abdalhalem-a158922a6/"
                  target="_blank" className="fa-brands fa-linkedin cursor-pointer mx-3  text-white text-3xl"></a>
              </div>
              <a href="#projects">
                <Button className="mx-auto px-7 mt-7 font-bold text-xl cursor-pointer "  color="alternative">Projects <i className="ms-2 fa-solid fa-down-long"></i></Button>
              </a>
         </div>
    </div>
  )
}
