import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Register",
    description:
      "Fill up the registration form with your correct details and submit your application.",
    icon: "📝",
  },
  {
    id: "02",
    title: "Admin Approval",
    description:
      "Admins will review your submission and approve or reject your registration.",
    icon: "✅",
  },
  {
    id: "03",
    title: "Get Match Schedule",
    description:
      "Once approved, you will receive your match schedule and opponent details.",
    icon: "📅",
  },
  {
    id: "04",
    title: "Compete & Win",
    description:
      "Play your matches fairly, follow the rules, and move forward to win prizes.",
    icon: "🏆",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-24 bg-zinc-950 text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-0 top-1/2 w-72 h-72 bg-green-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 w-72 h-72 bg-blue-500/10 blur-[120px]" />

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
            How <span className="text-green-400">It Works</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Simple steps to participate in the tournament and start competing
            like a pro.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative p-6 rounded-xl bg-white/5 border border-white/10 hover:border-green-400/40 transition"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-green-500 text-black font-bold flex items-center justify-center shadow-lg">
                {step.id}
              </div>

              {/* Icon */}
              <div className="text-4xl mb-4">{step.icon}</div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
