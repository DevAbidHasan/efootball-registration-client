import { Link } from "react-router";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-16 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-green-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo + Description */}
          <div>
            <Link to="/" className="text-2xl font-bold text-white tracking-wide">
              <span className="text-green-400">E</span>Football
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              Join the ultimate eFootball tournament and compete with top players. Stay updated and never miss a match.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-green-400 transition">Home</Link></li>
              {/* <li><Link to="/tournament" className="hover:text-green-400 transition">Tournament</Link></li> */}
              <li><a href="#rules" className="hover:text-green-400 transition">Rules</a></li>
              <li><Link to="/registration" className="hover:text-green-400 transition">Register</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Email: <a href="mailto:support@efootball.com" className="hover:text-green-400 transition">support@efootball.com</a></li>
              <li>Phone: <a href="tel:+880123456789" className="hover:text-green-400 transition">+880 1641 0150 06</a></li>
              <li>Venue: বিদ্রোহী হল 1013 & 1035</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Follow Us</h4>
            <div className="flex items-center gap-4 text-white">
              <a href="https://www.facebook.com/anirban.paul.112233445" target="_blank" className="hover:text-green-400 transition"><FaFacebookF /></a>
              <a href="#" className="hover:text-green-400 transition"><FaTwitter /></a>
              <a href="#" className="hover:text-green-400 transition"><FaInstagram /></a>
              <a href="#" className="hover:text-green-400 transition"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-6"></div>

        {/* Copyright */}
        <p className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Developed by <Link to="https://www.facebook.com/plabon48">Plabon</Link> . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
