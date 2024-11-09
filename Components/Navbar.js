const Navbar = () => (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      <h1 className="text-lg font-bold">Zain Ul Abideen</h1>
      <div>
        <a href="/" className="mx-2">Home</a>
        <a href="/about" className="mx-2">About</a>
        <a href="/experience" className="mx-2">Experience</a>
        <a href="/education" className="mx-2">Education</a>
        <a href="/skills" className="mx-2">Skills</a>
        <a href="/projects" className="mx-2">Projects</a>
        <a href="/contact" className="mx-2">Contact</a>
      </div>
    </nav>
  );
  
  export default Navbar;