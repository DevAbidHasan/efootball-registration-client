import { motion } from "framer-motion";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <section className="relative mt-6 min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black">

      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-green-500/20 blur-[120px]" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl text-center px-4"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-6 px-4 py-1 rounded-full border border-blue-400/ bg-blue-50/20 text-blue-400 text-sm tracking-wide"
        >
          ⚽ Online E-Football Tournament
        </motion.div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
          JKKNIU E-Football
          <span className="block text-green-400">
            Championship 2026
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
          Register now, get approved by admins, compete with the best players,
          and win exciting prizes in a professional online tournament.
        </p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/register"
            className="px-8 py-3 rounded-lg bg-green-500 text-black font-semibold text-lg hover:bg-green-400 transition shadow-lg shadow-green-500/30"
          >
            Register Now
          </Link>

          <Link
            to="/rules"
            className="px-8 py-3 rounded-lg border border-white/20 text-white font-medium hover:bg-white/10 transition"
          >
            View Rules
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-12 md:bottom-3 flex flex-col items-center text-gray-400 text-sm"
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="mt-1"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
