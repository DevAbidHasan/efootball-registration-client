import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router"; // fixed import

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    gameId: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your message has been sent.`);
    setFormData({ name: "", email: "", mobile: "", gameId: "", message: "" });
  };

  return (
    <section className="relative min-h-screen bg-black text-white py-20 px-4">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-green-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-500/10 blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h2 className="text-4xl font-bold mb-6 text-green-400">Get in Touch</h2>
          <p className="text-gray-400 mb-6">
            Have questions about the tournament? Fill the form or contact us directly.
          </p>

          <div className="space-y-4 text-gray-300">
            <p><span className="font-semibold text-green-400">Email:</span> anirban65536@gmail.com</p>
            <p><span className="font-semibold text-green-400">Phone:</span> +8801641015006</p>
            <p><span className="font-semibold text-green-400">Venue:</span> বিদ্রোহী হল 1013 & 1035</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 mt-6 text-white">
            <a href="#" className="hover:text-green-400 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-green-400 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-green-400 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-green-400 transition"><FaLinkedinIn /></a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 bg-white/5 p-8 rounded-2xl border border-green-500/20 shadow-lg shadow-green-500/20"
        >
          <h3 className="text-2xl font-semibold mb-6 text-white">Send a Message</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition"
              required
            />
            {/* New Optional Fields */}
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Mobile Number (Optional)"
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition"
            />
            <input
              type="text"
              name="gameId"
              value={formData.gameId}
              onChange={handleChange}
              placeholder="Game ID (Optional)"
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition"
              required
            ></textarea>

            <button
              type="submit"
              className="mt-4 hover:cursor-pointer text-center px-6 py-3 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-400 transition shadow-lg shadow-green-500/30"
            >
              Send Message
            </button>
          </form>

          {/* Go Back Home Button */}
          <div className="mt-8 text-center">
            <Link
              to="/"
              className="inline-block px-6 py-3 rounded-lg border border-green-500 text-green-400 font-semibold hover:bg-green-500/20 transition"
            >
              ← Go Back Home
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
