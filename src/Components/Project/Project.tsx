

export default function Project({ img, demo, code, features } : {img : string, demo : string, code : string, features : string } ) {
  return (
    <div className="md:w-9/12 mx-auto border border-gray-700 rounded-2xl bg-gray-900 text-white shadow-lg transition-transform duration-300 hover:scale-[1.01]">
  <a href={demo} target="_blank" rel="noopener noreferrer">
    <img
      src={img}
      className="rounded-t-2xl w-full h-70 object-fill"
      alt="3ab7alim project"
    />
  </a>

  <div className="px-6 py-5 space-y-4">
    <h5 className="text-xl font-semibold tracking-tight text-blue-400 hover:text-blue-300 transition-colors duration-200">
      <a href={code} target="_blank" rel="noopener noreferrer">
        <i className="fa-solid fa-code mr-2"></i>View Code
      </a>
    </h5>

    <p className="text-lg font-medium leading-relaxed break-words  text-gray-200">
      <span className="text-blue-400">Features:</span> {features}
    </p>
  </div>
</div>



  )
}
