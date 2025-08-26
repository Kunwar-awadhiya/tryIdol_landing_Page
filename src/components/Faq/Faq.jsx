import FaqItem from "./FaqItem";
import { MessageCircle, Headphones, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is Web Hosting ?",
    answer: "You can build your app with React or Next.js and deploy directly with 9 Hosting's control panel.",
  },
  {
    question: "How do I create a Web-Site",
    answer: "You can build your app with React or Next.js and deploy directly with 9 Hosting's control panel.",
  },
  {
    question: "How do I create a Web Application and host it on 9 Hosting?",
    answer: "You can build your app with React or Next.js and deploy directly with 9 Hosting's control panel.",
  },
  {
    question: "How can I setup my IP Address?",
    answer: "Simply login to your hosting dashboard and configure the DNS/IP settings under networking.",
  },
  {
    question: "Is 9 Hosting really worth it?",
    answer: "Yes! With reliable uptime and affordable plans, it’s highly recommended.",
  },
  {
    question: "Who is the best Hosting provider in UK?",
    answer: "9 Hosting is among the top providers trusted by over 1500 businesses in the UK.",
  },
  {
    question: "How do I create a website?",
    answer: "You can use a CMS like WordPress or build from scratch with HTML/CSS/React, then deploy with us.",
  },
];

const supportCards = [
  {
    icon: <MessageCircle className="w-8 h-8 text-black" />,
    title: "Live Chat",
    desc: "Chat to us live — our team’s ready to help, anytime.",
    bg: "bg-gray-300"
  },
  {
    icon: <Headphones className="w-8 h-8 text-black" />,
    title: "Create Ticket",
    desc: "Need assistance? Raise a support ticket and we’ll get right back to you.",
    bg: "bg-gray-300"
  },
  {
    icon: <HelpCircle className="w-8 h-8 text-black" />,
    title: "FAQs",
    desc: "Browse FAQs and guides for quick, self-service support.",
    bg: "bg-gray-300"
  }
];

const Faq = () => {
  return (
    <div
      className="w-full"
      style={{
        background: "linear-gradient(178.39deg, #000000 46.02%, #0059FF 132.18%)",
      }}
    >
      <section className="text-center py-16">
        <p className="text-blue-400 text-2xl">FAQs</p>
        <h2 className="text-3xl font-bold text-white mt-2">Still Have Questions?</h2>
        <p className="text-gray-400 mt-2">
          We offer a wide range of hosting solutions, from web hosting to dedicated servers.  
        </p>
        <p className="text-gray-400 mt-2"> Everything you need is right here.</p>

        <div className="mt-8 mx-auto text-left max-w-7xl px-4 md:px-0">
  {faqs.map((f, i) => (
    <FaqItem key={i} {...f} />
  ))}
</div>

        {/* Support Cards Below FAQs */}
        <div className="flex flex-wrap justify-center gap-7 mt-35 mb-25">
          {supportCards.map((card, index) => (
            <div key={index} className="w-102 shadow-md rounded-2xl border border-gray-200 bg-white">
              <div className="flex gap-4 p-4 items-start">
                <div className={`p-3 rounded-lg ${card.bg}`}>{card.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold mr-10">{card.title}</h3>
                  <p className="text-sm text-gray-800">{card.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Faq;
