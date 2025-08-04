import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import faqimage from "../assets/faq.png";


const AccordionItem = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="bg-[#0a0202]/60 px-5 rounded-sm border-b border-[#333]">
      <button
        className="w-full py-4 flex justify-between items-center text-left hover:text-[#c7f9cc] transition-colors"
        onClick={toggle}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <BiChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          } `}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <div className="py-4 text-[#c7f9cc]">{answer}</div>
      </div>
    </div>
  );
};

const faqs = [
  {
    question: "What is Zupay?",
    answer:
      "Zupay is a platform that provides virtual US cards for online transactions, making it easy and secure to shop, pay bills, and manage finances globally.",
  },
  {
    question: "How secure is Zupay?",
    answer:
      "We prioritize security with industry-standard encryption and our own advanced security protocols, ensuring your virtual card transactions are protected.",
  },
  {
    question: "Can I send money to anyone?",
    answer:
      "Currently, Zupay focuses on virtual card issuance. You can use your Zupay card for online purchases and payments, but direct money transfers are not yet supported.",
  },
  {
    question: "Do I need a bank account to use Zupay?",
    answer:
      "No, you do not need a traditional bank account. You can fund your Zupay virtual card using various payment methods like credit/debit cards or bank transfers.",
  },
  {
    question: "How do I get started?",
    answer:
      "Download the app, create an account, complete the identity verification process, and generate your virtual US card to begin using Zupay.",
  },
];

function FaQuestion() {
  const [openItem, setOpenItem] = useState(null);

  const toggleClick = (index) => {
    setOpenItem((prev) => (prev === index ? null : index));
  };

  return (
    <div className="bg-[radial-gradient(circle_at_center,#4d7553_0%,#c7f9cc_50%,#fdf0d5_100%)] text-white py-16 px-4 md:px-8 ">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-gray-500 mb-4 text-xl">
              Frequently Asked Question
            </h2>
            <h1 className="text-3xl font-semibold mb-8 text-[#555]">
              What would you like to know about Zupay
            </h1>
            <img src={faqimage} className="w-[7rem] mt-[3rem] filter grayscale-[80%] hue-rotate-[0deg] brightness-0" alt="" />
          </div>
          <div className="relative z-10">
            <div className="space-y-4">
              {faqs.map((faq, index)=>(
                <AccordionItem key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openItem === index}
                toggle= {()=>toggleClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaQuestion;
