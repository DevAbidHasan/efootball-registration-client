import { motion } from "framer-motion";

const rules = [
  "No Team Strength limitation",
  "চেষ্টা করবেন ভেন্যুতে এসে খেলার জন্য। আমরা ভালোভাবে পর্যবেক্ষণ করতে পারবো এবং কোন সমস্যা হলে সমাধান দিতে পারবো। দূর থেকে খেললে সমস্যার ক্ষেত্রে কিছু করার থাকবে না। গেম যাকে উইন করে দিবে সেই উইনার। ভেন্যু: বিদ্রোহী হল ১০১৩ এবং ১০৩৫।",
  "সবাই সময় মতো উপস্থিত থাকার চেষ্টা করবেন। অন্যথায় আপনার অপনেন্টকে জয়ী ঘোষণা করা হবে।",
  "দূর থেকে বা ভেন্যু ব্যতীত যারা খেলবেন: কিক অফের আগে নেটওয়ার্ক ইস্যু বা গেইম বন্ধ হলে পুনরায় শুরু হবে। একবার কিক অফ হয়ে গেইম শুরু হলে যাকে গেইম উইনার ঘোষণা করবে, সেই উইনার হবে।",
  "স্মার্ট এসিস্ট চালু থাকবে। চাইলে অফ করে খেলতে পারেন।",
  "অথিরিটির সিদ্ধান্তই চূড়ান্ত। যেকোনো সময় সিদ্ধান্ত পরিবর্তনের ক্ষমতা রাখে।",
];

const TournamentInfo = () => {
  return (
    <section
      id="rules"
      className="relative py-24 bg-black text-white overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Tournament <span className="text-green-400">Rules & Requirements</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            ন্যায্য ও সুশৃঙ্খল টুর্নামেন্ট পরিচালনার জন্য নিচের নিয়মগুলো
            অনুসরণ করা বাধ্যতামূলক।
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Rules List */}
          <motion.ul
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {rules.map((rule, index) => (
              <li
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-green-400/40 transition"
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center font-bold">
                  {index + 1}
                </span>
                <p className="text-gray-300 leading-relaxed">{rule}</p>
              </li>
            ))}
          </motion.ul>

          {/* Visual / Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="info-card">
              <span className="emoji">🎮</span>
              <h4>Game Type</h4>
              <p>eFootball (Competitive Mode)</p>
            </div>

            <div className="info-card">
              <span className="emoji">📍</span>
              <h4>Venue</h4>
              <p>বিদ্রোহী হল ১০১৩ & ১০৩৫</p>
            </div>

            <div className="info-card">
              <span className="emoji">⚖</span>
              <h4>Fair Play</h4>
              <p>Authority decision is final</p>
            </div>

            <div className="info-card">
              <span className="emoji">⏱</span>
              <h4>Time Policy</h4>
              <p>Late arrival = auto loss</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TournamentInfo;
