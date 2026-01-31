import { motion } from "framer-motion";

const prizes = [
  {
    position: "Champion",
    amount: "৳ 5,000",
    icon: "🥇",
    highlight: true,
  },
  {
    position: "Runner-Up",
    amount: "৳ 3,000",
    icon: "🥈",
    highlight: false,
  },
  {
    position: "Semi Finalist",
    amount: "৳ 1,000",
    icon: "🥉",
    highlight: false,
  },
];

const PrizePool = () => {
  return (
    <section className="relative py-24 bg-zinc-950 text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-green-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-yellow-500/10 blur-[140px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Prize <span className="text-green-400">Pool</span>
          </h2>
          <p className="mt-4 text-gray-400">
            Compete hard and win exciting cash prizes.
          </p>
        </motion.div>

        {/* Prize Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prizes.map((prize, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-2xl border 
                ${
                  prize.highlight
                    ? "bg-gradient-to-b from-green-500/20 to-transparent border-green-400/40 scale-105"
                    : "bg-white/5 border-white/10"
                }
                hover:border-green-400/60 transition`}
            >
              {/* Glow ring for champion */}
              {prize.highlight && (
                <div className="absolute inset-0 rounded-2xl border border-green-400/30 blur-sm" />
              )}

              <div className="relative z-10 text-center">
                <div className="text-5xl mb-4">{prize.icon}</div>

                <h3 className="text-xl font-semibold mb-2">
                  {prize.position}
                </h3>

                <p className="text-3xl font-extrabold text-green-400">
                  {prize.amount}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-sm text-gray-400"
        >
          * Prize money will be distributed after tournament completion.
        </motion.p>
      </div>
    </section>
  );
};

export default PrizePool;
