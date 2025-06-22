import { Button } from "flowbite-react";

export default function Contact() {
  return (
    <div id="contact" className="bg-gray-900 px-6 py-16 lg:px-20">
  <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-12">
    Contact
  </h2>

  <div className="bg-gray-800 rounded-xl shadow-md shadow-gray-700 p-8 grid gap-10 lg:grid-cols-2">
    
    <div className="text-white space-y-6">
      <h3 className="text-2xl font-semibold">Get in Touch</h3>
      <p className="text-lg leading-relaxed text-gray-300">
        Feel free to contact me by submitting the form, and I will get back to you as soon as possible.
      </p>
      <div className="space-y-3 mt-6">
        <p className="text-lg"><i className="fa-solid fa-phone mr-3 text-teal-400"></i>01013625625</p>
        <p className="text-lg"><i className="fa-solid fa-envelope mr-3 text-teal-400"></i>mohamed3ab7alem@gmail.com</p>
      </div>
    </div>

    <div className="text-white">
      <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
      <form className="space-y-5">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-md bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-md bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <input
          type="text"
          placeholder="Subject"
          className="w-full p-3 rounded-md bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <textarea
          placeholder="Leave a comment..."
          rows={4}
          className="w-full p-3 rounded-md bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
        ></textarea>
        <Button
                          type="submit"
                          color='alternative'
          className="w-full font-bold text-lg cursor-pointer py-5"
        >
          Send Message
        </Button>
      </form>
    </div>
  </div>
</div>

  )
}
