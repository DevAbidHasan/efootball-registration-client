import { motion } from "framer-motion";

const infoItems = [
  {
    title: "Game",
    value: "eFootball 2026",
    icon: "🎮",
  },
  {
    title: "Match Type",
    value: "1 vs 1",
    icon: "⚔️",
  },
  {
    title: "Platform",
    value: "Mobile / Console",
    icon: "📱",
  },
  {
    title: "Registration Deadline",
    value: "20 Feb 2026",
    icon: "⏳",
  },
  {
    title: "Tournament Mode",
    value: "Knockout",
    icon: "🏆",
  },
  {
    title: "Venue",
    value: "বিদ্রোহী হল",
    icon: "📍",
  },
];

const TournamentOverview = () => {
  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-green-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Tournament <span className="text-green-400">Information</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Everything you need to know before registering for the tournament.
          </p>
        </motion.div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {infoItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-white/5 border border-white/10 
                         hover:border-green-400/40 transition group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold mb-1">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TournamentOverview;
