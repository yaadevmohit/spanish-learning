const Navbar = () => {
  return (
    <nav 
      className="flex items-center justify-between max-w-7xl m-auto border-2 nunito-regular p-2" 
      aria-label="Main Navigation"
    >
      <div className="flex items-center">
        <a 
          href="/" 
          className="text-xl text-black bg-amber-200 p-2 border"
          aria-label="Spanish Learning Home"
        >
          spanish knower
        </a>
      </div>
      
      <ul className="flex space-x-4 text-gray-600 font-medium">
        <li>
          <a href="/exercises" 
            className="bg-[#F03603] text-white py-2 px-4 hover:bg-white hover:text-[#F03603] transition-colors border-[#F03603] border-2">
              Get Started
            </a>
        </li>
        <li>
          <a href="" className="
            text-black hover:bg-black hover:text-white py-2 px-4 border-2 transition-colors border-black">Sign in</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
