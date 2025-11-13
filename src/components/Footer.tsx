import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import icon from "../assets/whatapp.png";
export const Footer = () => {
  return (
    <footer className="bg-[#7c2725] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className=" p-6 rounded-lg border border-[#1a1a1a]">
            <h3 className="text-2xl font-serif font-bold mb-4">Oyama Sushi</h3>
            <p className="text-sm opacity-90">
              Experience the art of authentic Japanese cuisine crafted by master chefs.
            </p>
          </div>

          <div className=" p-6 rounded-lg border border-[#1a1a1a]">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
          <Link to="/" className="hover:text-accent transition-colors">
            Home
          </Link>
              </li>
              <li>
          <Link to="/about" className="hover:text-accent transition-colors">
            About Us
          </Link>
              </li>
              <li>
          <Link to="/menu" className="hover:text-accent transition-colors">
            Menu
          </Link>
              </li>
              <li>
          <Link to="/reservations" className="hover:text-accent transition-colors">
            Reservations
          </Link>
              </li>
            </ul>
          </div>

          <div className=" p-6 rounded-lg border border-[#1a1a1a]">
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
          <MapPin size={16} className="mt-1 flex-shrink-0" />
          <span>UNIT 1, GRAFTON COURT, Townparks, LONGFORD, N39 FA37</span>
              </li>
              <li className="flex items-center gap-2">
          <Phone size={16} />
          <span>+353433340929</span>
              </li>
              <li>
          <span>
            <img src={icon} alt="WhatsApp" className="inline-block w-4 h-4 mr-1" />
            <a href="" target="_blank" rel="noopener noreferrer">
              Write us on WhatsApp
            </a>
          </span>
              </li>
              <li className="flex items-center gap-2">
          <Mail size={16} />
          <span>info@oyamasushi.com</span>
              </li>
            </ul>
          </div>

          <div className=" p-6 rounded-lg border border-[#1a1a1a]">
            <h4 className="font-semibold mb-4">Hours</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
          <Clock size={16} className="mt-1 flex-shrink-0" />
          <div>
            <p className="font-medium">Delivery</p>
            <p className="opacity-90">Mon-Thu: 12PM - 9:30PM</p>
            <p className="opacity-90">Fri-Sat: 12PM - 10:30PM</p>
            <p className="opacity-90">Sun: 12PM - 9:30PM</p>
          </div>
              </li>
              <li className="flex items-start gap-2">
          <Clock size={16} className="mt-1 flex-shrink-0" />
          <div>
            <p className="font-medium">Collection</p>
            <p className="opacity-90">Mon-Thu: 10AM - 9:30PM</p>
            <p className="opacity-90">Fri-Sat: 10AM - 10:30PM</p>
            <p className="opacity-90">Sun: 10AM - 9:30PM</p>
          </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} Oyama Sushi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
