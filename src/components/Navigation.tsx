import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logoImage from "../assets/oyama.png";

// Lantern SVG
const Lantern = ({ position }: { position: "top-left" | "bottom-right" }) => (
  <div
    className={
      position === "top-left"
        ? "absolute left-0 -top-8 md:-top-10 z-40 pointer-events-none"
        : "absolute right-0 -bottom-8 md:-bottom-10 z-40 pointer-events-none"
    }
    style={{ opacity: 0.7 }}
  >
    <svg width="60" height="100" viewBox="0 0 60 100" fill="none" className="drop-shadow-lg animate-lantern-pulse">
      <ellipse cx="30" cy="50" rx="24" ry="38" fill="#e6be9a" fillOpacity="0.85" stroke="#8b181d" strokeWidth="4" />
      <ellipse cx="30" cy="50" rx="18" ry="30" fill="#8b181d" fillOpacity="0.25" />
      <rect x="24" y="10" width="12" height="12" rx="4" fill="#8b181d" fillOpacity="0.8" stroke="#e6be9a" strokeWidth="2" />
      <rect x="26" y="88" width="8" height="8" rx="2" fill="#8b181d" fillOpacity="0.7" stroke="#e6be9a" strokeWidth="1" />
      <line x1="30" y1="0" x2="30" y2="20" stroke="#e6be9a" strokeWidth="2" strokeDasharray="4 2" opacity="0.7" />
      <line x1="30" y1="80" x2="30" y2="100" stroke="#e6be9a" strokeWidth="2" strokeDasharray="4 2" opacity="0.7" />
    </svg>
  </div>
);

// Snowflake overlay
const SnowflakeOverlay = () => (
  <div className="absolute inset-0 pointer-events-none z-30">
    {[...Array(18)].map((_, i) => {
      const left = Math.random() * 100;
      const size = 16 + Math.random() * 16;
      const duration = 8 + Math.random() * 8;
      const delay = Math.random() * 8;
      return (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          className="absolute"
          style={{
            left: `${left}%`,
            top: "-24px",
            opacity: 0.25 + Math.random() * 0.25,
            animation: `snowfall ${duration}s linear ${delay}s infinite`,
            filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.08))",
          }}
        >
          <path
            d="M12 2L13.09 8.26L19 7.27L14.18 12L19 16.73L13.09 15.74L12 22L10.91 15.74L5 16.73L9.82 12L5 7.27L10.91 8.26L12 2Z"
            fill="white"
            opacity="0.8"
          />
        </svg>
      );
    })}
  </div>
);

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/menu", label: "Menu" },
    { path: "/about", label: "About Us" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-visible  shadow-lg",
        isScrolled
          ? "bg-gradient-to-r from-[#1d351d] to-[#325632] backdrop-blur-md"
          : "bg-gradient-to-r from-[#1d351d] to-[#325632]"
      )}
      style={{ boxShadow: "0 4px 24px 0 rgba(50,86,50,0.10)" }}
    >
  {/* Lantern decor only left */}
  <Lantern position="top-left" />
      {/* Snowflake Overlay */}
      <div className="container mx-auto  relative">
        <div className="flex items-center justify-between h-20 relative">
          {/* Logo centrado */}
          <div className="hidden md:flex  absolute left-1/2 transform -translate-x-1/2">
            <Link
              to="/"
              className="flex items-center gap-3"
            >
             
              <span
                className="text-3xl font-bold tracking-tight"
                style={{
                  fontFamily: "'Arial', 'Brush Script Std', cursive",
                  color: "#e6be9a",
                  textShadow: "0 2px 8px #8b181d88",
                  letterSpacing: "0.04em",
                }}
              >
                Oyama Sushi
              </span>
            </Link>
          </div>
          {/* Enlaces a la izquierda */}
          <div className="hidden md:flex items-center gap-1 absolute left-0 md:left-4">
             <img 
                src={logoImage} 
                alt="Oyama Sushi Logo" 
                className="flex left-0 w-[140px] object-contain"
              />
            {navLinks.slice(1, 3).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-base font-medium transition-colors px-2 py-1 rounded-lg",
                  location.pathname === link.path
                    ? "text-[#8b181d] bg-[#e6be9a]/60 shadow"
                    : "text-[#e6be9a] hover:text-[#8b181d] hover:bg-[#e6be9a]/40"
                )}
                style={{ transition: "all 0.2s" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
          {/* Reservations a la derecha */}
          <div className="hidden md:flex items-center gap-8 absolute right-0 md:right-4">
            <Link
              to="/reservations"
              className="ml-2 px-4 py-2 rounded-lg font-semibold text-[#8b181d] bg-[#e6be9a] shadow hover:bg-[#8b181d] hover:text-[#e6be9a] transition-colors"
              style={{ boxShadow: "0 2px 8px #e6be9a44", transition: "all 0.2s" }}
            >
              Reservations 🎄
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#e6be9a] hover:text-[#8b181d] transition-colors absolute right-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in bg-[#1d351d]/95 rounded-b-xl shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "block py-2 px-4 text-base font-medium rounded-lg transition-colors",
                  location.pathname === link.path
                    ? "text-[#8b181d] bg-[#e6be9a]/60 shadow"
                    : "text-[#e6be9a] hover:text-[#8b181d] hover:bg-[#e6be9a]/40"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ transition: "all 0.2s" }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/reservations"
              className="block w-full mt-2 px-4 py-2 rounded-lg font-semibold text-[#8b181d] bg-[#e6be9a] shadow hover:bg-[#8b181d] hover:text-[#e6be9a] transition-colors"
              style={{ boxShadow: "0 2px 8px #e6be9a44", transition: "all 0.2s" }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Reservations 🎄
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
