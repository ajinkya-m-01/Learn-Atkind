import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import JoinForm from "@/components/JoinForm"; // import your JoinForm modal

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Courses", to: "/courses" },
    { name: "Categories", to: "/categories" },
    { name: "Instructors", to: "/instructors" },
    { name: "Blog", to: "/blog" },
    { name: "Contact", to: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled
            ? "backdrop-blur-xl bg-white/90 shadow-[0_0_20px_rgba(0,0,0,0.1)] border-b border-white/20"
            : "backdrop-blur-lg bg-white/70 border-b border-white/10"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group relative">
              <div className="relative w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Atkind
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <ul className="flex items-center gap-1">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.to}
                      className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-200
                        ${isActive(link.to)
                          ? "text-purple-600"
                          : "text-gray-700 hover:text-gray-900"
                        }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Auth Buttons */}
              <div className="flex items-center gap-3">
                <Link
                  to="/login"
                  className="px-5 py-2.5 text-gray-700 font-medium rounded-lg hover:text-gray-900 transition-colors hover:bg-gray-50"
                >
                  Login
                </Link>

                {/* Join Now opens modal */}
                <JoinForm>
                  <button className="relative px-6 py-2.5 rounded-xl font-semibold text-white overflow-hidden shadow-lg group transition-all duration-300">
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 group-hover:from-blue-600 group-hover:to-purple-600"></span>
                    <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                    <span className="relative flex items-center justify-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Join Now
                    </span>
                  </button>
                </JoinForm>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="px-4 py-6 bg-white/80 backdrop-blur-md border-t border-white/20">
            <ul className="space-y-2 mb-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className={`block px-4 py-3 rounded-xl font-medium transition-all duration-200
                      ${isActive(link.to)
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                        : "text-gray-700 hover:bg-gray-100"
                      }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Auth Buttons */}
            <div className="space-y-3 pt-6 border-t border-gray-200">
              <Link
                to="/login"
                className="block w-full px-4 py-3 text-center text-gray-700 font-medium bg-white rounded-xl hover:bg-gray-100 transition-colors"
              >
                Login
              </Link>

              <JoinForm>
                <button className="w-full px-4 py-3 rounded-xl font-semibold text-white shadow-lg flex items-center justify-center gap-2 
                  bg-gradient-to-r from-purple-600 to-blue-600 
                  hover:from-blue-600 hover:to-purple-600 
                  transition-all duration-300"
                >
                  <Sparkles className="w-4 h-4" />
                  Join Now
                </button>
              </JoinForm>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-20" />
    </>
  );
};

export default Navbar;
