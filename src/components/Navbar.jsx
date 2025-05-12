import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      
      <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/">
          <img src="/assets/logo-transparent-svg.svg" alt="Logo" className="h-28 w-auto" />
        </Link>
        <ul className="hidden md:flex space-x-6 text-secondary font-semibold pr-14">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
