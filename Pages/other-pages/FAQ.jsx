import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Is registration free?",
    answer: "No, registration fee is only 30.00 BDT. Just fill the form and await admin approval.",
  },
  {
    question: "How will matches be played?",
    answer: "Matches can be played at the venue or remotely. Make sure you follow the rules and be on time.",
  },
  {
    question: "What happens if I’m late?",
    answer: "If you are late, your opponent may be declared the winner. Always check your schedule.",
  },
  {
    question: "Can I turn off Smart Assist?",
    answer: "Yes, you can choose to play with Smart Assist off if you prefer.",
  },
  {
    question: "Is the admin decision final?",
    answer: "Yes, all decisions made by the admin are final and binding.",
  },
];

const FAQItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="border border-white/10 rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-6 py-4 bg-white/5 hover:bg-green-500/10 transition"
      >
        <span className="text-left font-medium text-lg">{faq.question}</span>
        <span className="text-2xl text-green-400">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="px-6 py-4 text-gray-300 bg-white/2"
        >
          {faq.answer}
        </motion.div>
      )}
    </motion.div>
  );
};

const FAQ = () => {
  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-green-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-blue-500/10 blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Frequently Asked <span className="text-green-400">Questions</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Got questions? Here are the answers to the most common queries about the tournament.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
