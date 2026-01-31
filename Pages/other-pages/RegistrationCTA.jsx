import { motion } from "framer-motion";
import { Link } from "react-router";

const RegistrationCTA = () => {
  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/20 blur-[140px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Animated Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="p-10 md:p-14 rounded-3xl bg-white/5 border border-white/10 backdrop-blur"
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Ready to <span className="text-green-400">Compete?</span>
          </h2>

          {/* Subtext */}
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Join the eFootball Championship now. Register, get approved, and
            compete with the best players to win exciting prizes.
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <Link
              to="/registration"
              className="inline-flex items-center justify-center px-10 py-4 rounded-xl
                         bg-green-500 text-black font-semibold text-lg
                         hover:bg-green-400 transition
                         shadow-lg shadow-green-500/30"
            >
              Register Now
            </Link>
          </motion.div>

          {/* Small Note */}
          <p className="mt-6 text-sm text-gray-500">
            Registration subject to admin approval.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RegistrationCTA;
