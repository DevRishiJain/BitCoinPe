"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  CreditCard,
  TrendingUp,
  Award,
  Shield,
  Clock,
  Lock,
  RefreshCw,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const smoothScroll = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#060B26] bg-opacity-90 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-img-TiK5cDd0xEDfhe2f6TbsbFUfXrC4TW.png"
          alt="BitcoinPE Logo"
          className="h-8 md:h-10"
        />
        <nav className="hidden md:flex space-x-6">
          {[
            "Home",
            "Features",
            "How It Works",
            "Use Cases",
            "Loan Calculator",
            "Testimonials",
            "FAQs",
          ].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              onClick={(e) => {
                e.preventDefault();
                smoothScroll(item.toLowerCase().replace(" ", "-"));
              }}
              className="text-sm font-medium hover:text-blue-400 transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>
        <div className="flex items-center">
          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdKpY1Zc9SbnSu0I4BTXCtvazWGiK01XZJw7vBN32DTX9NDHQ/viewform"
            whileHover={{ scale: 1.05, backgroundColor: "#3B82F6" }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors text-sm md:text-base"
          >
            Get Started
          </motion.a>
          <button
            onClick={toggleMenu}
            className="ml-4 md:hidden text-white"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#060B26] py-4"
          >
            {[
              "Home",
              "Features",
              "How It Works",
              "Use Cases",
              "Loan Calculator",
              "Testimonials",
              "FAQs",
            ].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                onClick={(e) => {
                  e.preventDefault();
                  smoothScroll(item.toLowerCase().replace(" ", "-"));
                  toggleMenu();
                }}
                className="block px-4 py-2 text-sm hover:bg-blue-600 transition-colors"
                whileHover={{ backgroundColor: "#3B82F6" }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-blue-900 opacity-20 animate-pulse"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Borrow,
              <br />
              Don&apos;t Sell
              <br />
              Your Bitcoin
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Unlock liquidity without liquidating. Join the DeFi revolution.
            </p>
            <motion.a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdKpY1Zc9SbnSu0I4BTXCtvazWGiK01XZJw7vBN32DTX9NDHQ/viewform"
              whileHover={{ scale: 1.05, backgroundColor: "#3B82F6" }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
            >
              Get Started Today
            </motion.a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2"
          >
            <video
              src="/safe_animation.mp4"
              autoPlay
              muted
              loop
              className="w-full h-auto rounded-lg shadow-2xl"
            >
              <source src="/safe_animation.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function KeyValueProposition() {
  const propositions = [
    {
      title: "Borrow against your Bitcoins",
      icon: <CreditCard className="w-12 h-12" />,
      description:
        "Use your Bitcoin as collateral and access instant liquidity",
    },
    {
      title: "Benefit from market appreciation",
      icon: <TrendingUp className="w-12 h-12" />,
      description:
        "Keep your Bitcoin and potentially profit from price increases",
    },
    {
      title: "No credit score required",
      icon: <Award className="w-12 h-12" />,
      description:
        "Get approved based on your Bitcoin holdings, not your credit history",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#0A1332]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Why Choose BitcoinPE?
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {propositions.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, backgroundColor: "#1C2951" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#0D1A3F] p-6 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:shadow-2xl"
            >
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
                className="mb-4 flex justify-center text-blue-400"
              >
                {prop.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{prop.title}</h3>
              <p className="text-gray-300">{prop.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      title: "Instant Credits",
      icon: <CreditCard className="w-12 h-12" />,
      description: "Get immediate access to funds",
    },
    {
      title: "Security & Ownership",
      icon: <Shield className="w-12 h-12" />,
      description: "Your Bitcoin remains yours",
    },
    {
      title: "Flexible Repayments",
      icon: <Clock className="w-12 h-12" />,
      description: "Choose a plan that suits you",
    },
  ];

  return (
    <section
      id="features"
      className="py-16 md:py-24 bg-gradient-to-b from-[#060B26] to-[#0A1332]"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, backgroundColor: "#1C2951" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#0D1A3F] p-6 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:shadow-2xl"
            >
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
                className="mb-4 flex justify-center text-blue-400"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      title: "KYC Verification",
      icon: <Lock className="w-8 h-8" />,
      description: "Complete a simple verification process",
    },
    {
      title: "Deposit Bitcoins",
      icon: <CreditCard className="w-8 h-8" />,
      description: "Transfer your Bitcoin to our secure wallet",
    },
    {
      title: "Receive Fiat Loans",
      icon: <RefreshCw className="w-8 h-8" />,
      description: "Get instant fiat loans based on your deposit",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-[#0A1332]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          How It Works
        </h2>
        <div className="flex flex-col items-center">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              className="flex items-center mb-12 relative w-full md:w-2/3"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="bg-blue-600 rounded-full p-4 mr-4 z-10"
              >
                {step.icon}
              </motion.div>
              <div className="z-10 flex-grow">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  transition={{ duration: 0.5, delay: (index + 1) * 0.3 }}
                  className="absolute left-6 top-16 w-0.5 bg-blue-600 h-16"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  const cases = [
    {
      title: "Hodlers",
      description:
        "Make your bitcoins work –invest in markets without selling.",
    },
    {
      title: "Emergency Loans",
      description: "Get emergency funds using Bitcoin as collateral.",
    },
    {
      title: "Traders",
      description: "Leverage market conditions with Bitcoin loans.",
    },
    {
      title: "Business Expansion",
      description:
        "Fund your business growth without selling your crypto assets.",
    },
    {
      title: "Real Estate Investment",
      description: "Use your Bitcoin to invest in property markets.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cases.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [cases.length]);

  return (
    <section
      id="use-cases"
      className="py-16 md:py-24 bg-gradient-to-b from-[#0A1332] to-[#060B26]"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Use Cases
        </h2>
        <div className="relative h-64 md:h-80">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="bg-[#0D1A3F] p-6 rounded-lg shadow-lg max-w-md w-full text-center">
                <h3 className="text-2xl font-semibold mb-4">
                  {cases[currentIndex].title}
                </h3>
                <p className="text-lg text-gray-300">
                  {cases[currentIndex].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center mt-8">
          {cases.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full mx-2 ${
                index === currentIndex ? "bg-blue-600" : "bg-gray-400"
              }`}
              aria-label={`Go to use case ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [loanTerm, setLoanTerm] = useState(12);
  const [collateralRatio, setCollateralRatio] = useState(50);

  const calculateAPY = useCallback(() => {
    const baseRate = 5;
    const loanAmountFactor = loanAmount / 10000;
    const loanTermFactor = loanTerm / 6;
    const collateralFactor = collateralRatio / 10;
    const apy = baseRate + loanAmountFactor + loanTermFactor - collateralFactor;
    return apy.toFixed(2);
  }, [loanAmount, loanTerm, collateralRatio]);

  return (
    <section id="loan-calculator" className="py-16 md:py-24 bg-[#0A1332]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Crypto Loan Simulator
        </h2>
        <div className="bg-[#0D1A3F] p-8 rounded-lg shadow-lg">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="loanAmount"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Loan Amount: ${loanAmount.toLocaleString()}
                </label>
                <input
                  type="range"
                  id="loanAmount"
                  min="10000"
                  max="1000000"
                  step="10000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="loanTerm"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Loan Term: {loanTerm} months
                </label>
                <input
                  type="range"
                  id="loanTerm"
                  min="1"
                  max="36"
                  step="1"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="collateralRatio"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Collateral Ratio: {collateralRatio}%
                </label>
                <input
                  type="range"
                  id="collateralRatio"
                  min="25"
                  max="75"
                  step="5"
                  value={collateralRatio}
                  onChange={(e) => setCollateralRatio(Number(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center bg-[#1C2951] p-6 rounded-lg">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <h3 className="text-2xl font-bold mb-4">Estimated APY</h3>
                <motion.p
                  key={calculateAPY()}
                  initial={{ scale: 1.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-5xl font-bold text-blue-400"
                >
                  {calculateAPY()}%
                </motion.p>
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#3B82F6" }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 bg-blue-600 text-white font-bold py-3 px-6 rounded-full text-lg transition-colors"
              >
                Apply Now
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      name: "Neesham Raghav",
      role: "Bussiness Owner",
      quote:
        "Loans from the team helped provide much needed liquidity for my business. I hope the team provides instant loans soon. I recommend this product to anyone that needs loan against bitcoin",
    },
    // {
    //   name: "Jane Smith",
    //   role: "Entrepreneur",
    //   quote:
    //     "Thanks to BitcoinPE, I was able to start my business without selling my long-term Bitcoin holdings.",
    // },
    // {
    //   name: "Alex Johnson",
    //   role: "Day Trader",
    //   quote:
    //     "The quick loan process has been a game-changer for my trading strategy. Highly recommended!",
    // },
    // {
    //   name: "Sarah Lee",
    //   role: "Real Estate Investor",
    //   quote:
    //     "BitcoinPE allowed me to diversify into real estate while holding onto my crypto. It's brilliant!",
    // },
    // {
    //   name: "Mike Brown",
    //   role: "Tech Startup Founder",
    //   quote:
    //     "The competitive rates and easy process made BitcoinPE my go-to for short-term capital needs.",
    // },
  ];

  return (
     <section
      id="testimonials"
      className="py-1 md:py-10 bg-gradient-to-b from-[#060B26] to-[#0A1332] flex justify-center items-center "
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Testimonials
        </h2>
        <div className="flex justify-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#0D1A3F] p-6 rounded-lg shadow-lg flex flex-col justify-between items-center h-full transform transition-all duration-300 hover:shadow-2xl"
              style={{ textAlign: 'center', maxWidth: '600px' }} // Ensures the box is not too wide
            >
              <p className="text-lg mb-4">&quot;{testimonial.quote}&quot;</p>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-400">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      question: "What is a bitcoin backed loan?",
      answer:
        "Bitcoin backed loan is a solution where you get loans with bitcoins as collateral. This allows you to maintain ownership of bitcoins and at the same time maintain liquidity.",
    },
    {
      question: "How to get a loan?",
      answer:
        "We are currently building the product. You can signup for early access to the product and we will keep you posted of our progress!",
    },
    {
      question: "How does bitcoin loan works?",
      answer:
        "Based on the market value of the bitcoins you deposit, we issue a fiat credit line at an LTV ratio of 60% post which you can withdraw your loan to the bank account at any point of time. The LTV ratio we offer the loans at can change based on market situation.",
    },
    {
      question: "Can I take loans for my business?",
      answer:
        "Initially we plan to offer loans for Individuals. Business loans is very much in the pipeline!",
    },
    {
      question: "What regulatory framework does this business fall under?",
      answer:
        "Crypto products including bitcoins are unregulated and can be highly risky. There may be no regulatory recourse for any loss from such transactions.",
    },
    {
      question: "Can you legally lend INR against bitcoins in India?",
      answer:
        "We are not providing lending service but rather facility service. We provide you with cash in advance.",
    },
    {
      question: "What is LTV?",
      answer:
        "LTV means loan to collateral ratio. For example if you deposit bitcoins worth 1L then at an LTV of 60% you can loan a maximum of 60K INR",
    },
    {
      question: "What is margin call?",
      answer:
        "If bitcoin price drops and the LTV increases, we provide you the option to rebalance the LTV by topping up bitcoins again.",
    },
    {
      question: "What is Liquidation Point?",
      answer:
        "It is the point at which we will liquidate your bitcoins to recoup fiat",
    },
    {
      question: "How are you ensuring token security?",
      answer:
        "We are storing your bitcoins in an MPC wallet, part of whose keys you will hold.",
    },
    {
      question: "How can I avail loans at lower rates?",
      answer:
        "By allowing us to monetize bitcoins you provide us the opportunity to offer you loans at lower interest rates. But it comes at the cost of higher risk.",
    },
  ];

  return (
    <section id="faqs" className="py-16 md:py-24 bg-[#0A1332]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQ.Item key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

type FAQItemProps = {
  question: string;
  answer: string;
};


FAQ.Item = function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#0D1A3F] rounded-lg shadow-lg overflow-hidden"
    >
      <button
        className="flex justify-between items-center w-full p-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </motion.span>
      </button>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-4 bg-[#0F2147]">
          <p>{answer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const socials = [
  {
    name: "Twitter",
    link: "https://x.com/bitcoin_pe_loan?s=11&t=-K2L2KfZ8hCV6ovgpxfX7A",
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/search/results/all/?heroEntityKey=urn:li:organization:104439811&keywords=BitcoinPe&origin=ENTITY_SEARCH_HOME_HISTORY&sid=~Dk",
  },
  { name: "Telegram", link: "#" },
  { name: "Discord", link: "#" },
];

function Footer() {
  return (
    <footer className="bg-[#060B26] py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-img-TiK5cDd0xEDfhe2f6TbsbFUfXrC4TW.png"
              alt="BitcoinPE Logo"
              className="h-10 mb-4"
            />
            <p className="text-gray-400">
              Empowering your financial future with Bitcoin-backed loans.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About Us", "How It Works", "FAQs", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {[
                "Terms of Service",
                "Privacy Policy",
                "Cookie Policy",
                "Disclaimer",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <p className="text-gray-400 mb-4">
              Join our newsletter for the latest updates and offers.
            </p>
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Your email"
                className="bg-[#0D1A3F] text-white px-4 py-2 rounded-l-lg focus:outline-none mb-2 sm:mb-0"
              />
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#3B82F6" }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-4 py-2 rounded-r-lg transition-colors"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-wrap justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy;Geekar Technology Private Limited. 2024
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            {socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.link}
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {social.name}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function BitcoinPE() {
  return (
    <div className="min-h-screen bg-[#060B26] text-white font-sans">
      <Header />
      <HeroSection />
      <KeyValueProposition />
      <Features />
      <HowItWorks />
      <UseCases />
      <LoanCalculator />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
