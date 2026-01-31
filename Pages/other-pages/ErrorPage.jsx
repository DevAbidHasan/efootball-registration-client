import { motion } from "framer-motion";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-red-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-pink-500/10 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-2xl"
      >
        {/* Error Code */}
        <h1 className="text-8xl md:text-9xl font-extrabold text-red-500 mb-6 animate-pulse">
          404
        </h1>

        {/* Error Message */}
        <p className="text-gray-300 text-xl md:text-2xl mb-6">
          Oops! The page you are looking for does not exist.
        </p>

        <p className="text-gray-400 text-base mb-8">
          It might have been removed, renamed, or did not exist in the first place.
        </p>

        {/* Go Back Home Button */}
        <Link
          to="/"
          className="inline-block px-8 py-3 rounded-lg border border-green-500 text-green-400 font-semibold hover:bg-green-500/20 transition shadow-lg shadow-green-500/30"
        >
          ← Go Back Home
        </Link>
      </motion.div>
    </section>
  );
};

export default ErrorPage;
