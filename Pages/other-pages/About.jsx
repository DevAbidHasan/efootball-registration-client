import { motion } from "framer-motion";
import { Link } from "react-router";

const About = () => {
  return (
    <section className="relative min-h-screen bg-black text-white py-20 px-4">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-green-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-500/10 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-8"
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-green-400">
          About the Tournament
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          Welcome to the JKKNIU E-Football Championship 2026! This online tournament brings together
          passionate e-football players to compete in an exciting, professional, and fun environment.
          Players can register online, get approved by admins, and showcase their skills against
          top opponents. Whether you are a casual gamer or a competitive pro, this tournament is
          designed to provide a fair and thrilling gaming experience for everyone.
        </p>

        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          Our mission is to promote esports in a friendly and competitive setting. With clearly
          defined rules, structured matches, and exciting prizes, we ensure that every participant
          enjoys the tournament experience to the fullest.
        </p>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 w-full"
        >
          <div className="bg-white/5 p-6 rounded-2xl border border-green-500/20 shadow-lg shadow-green-500/20">
            <h3 className="text-xl font-semibold text-green-400 mb-2">Professional Setup</h3>
            <p className="text-gray-300 text-sm">
              Structured matches with clear rules and admin support for fair play.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-green-500/20 shadow-lg shadow-green-500/20">
            <h3 className="text-xl font-semibold text-green-400 mb-2">Exciting Prizes</h3>
            <p className="text-gray-300 text-sm">
              Compete to win trophies, rewards, and recognition among the top players.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-green-500/20 shadow-lg shadow-green-500/20">
            <h3 className="text-xl font-semibold text-green-400 mb-2">Global Participation</h3>
            <p className="text-gray-300 text-sm">
              Open to players from all over, fostering a diverse and competitive environment.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-green-500/20 shadow-lg shadow-green-500/20">
            <h3 className="text-xl font-semibold text-green-400 mb-2">Fair Play</h3>
            <p className="text-gray-300 text-sm">
              Admin-approved registrations and monitoring ensure an unbiased tournament experience.
            </p>
          </div>
        </motion.div>

        {/* Go Back Home Button */}
        <Link
          to="/"
          className="mt-10 inline-block px-6 py-3 rounded-lg border border-green-500 text-green-400 font-semibold hover:bg-green-500/20 transition"
        >
          ← Go Back Home
        </Link>
      </motion.div>
    </section>
  );
};

export default About;
