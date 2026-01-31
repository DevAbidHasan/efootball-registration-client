import { motion } from "framer-motion";
import { Link } from "react-router";
import { useEffect, useState } from "react";

const HeroSection = () => {
  // Countdown target
  const targetDate = new Date("2026-02-04T18:00:00"); // Feb 4, 6PM

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({
          days: String(days).padStart(2, "0"),
          hours: String(hours).padStart(2, "0"),
          minutes: String(minutes).padStart(2, "0"),
          seconds: String(seconds).padStart(2, "0"),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative mt-6 min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black">

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
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-6 px-4 py-1 rounded-full border border-blue-400/50 bg-blue-50/10 text-blue-400 text-sm tracking-wide"
        >
          ⚽ Online E-Football Tournament
        </motion.div> */}

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-white leading-tight">
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

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className=" flex flex-wrap justify-center gap-4 text-white font-bold text-sm"
        >
          {["days", "hours", "minutes", "seconds"].map((unit) => (
            <div
              key={unit}
              className="flex mt-5 flex-col items-center bg-white/10 px-5 py-3 rounded-2xl border border-green-400/40 shadow-lg shadow-green-500/30"
            >
              <span className="text-2xl text-red-500">{timeLeft[unit]}</span>
              <span className="text-sm text-white-300 lowercase mt-1">{unit}</span>
            </div>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/register"
            className="px-8 py-3 rounded-lg bg-green-500 text-black font-semibold text-lg hover:bg-green-400 transition shadow-lg shadow-green-500/30"
          >
            Register Now
          </Link>

          <Link
            to="/about"
            className="px-8 py-3 rounded-lg border border-white/20 text-white font-medium hover:bg-white/10 transition"
          >
            About
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
     
    </section>
  );
};

export default HeroSection;
