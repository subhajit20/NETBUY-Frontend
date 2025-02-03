import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { MdQuestionAnswer } from "react-icons/md";


const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: 'How long does NETBUY take to handle my orders?',
      answer: 'Usually, we fulfill the order within 24 hours after you have paid for the order.'
    },
    {
      question: 'How does NETBUY handle returns?',
      answer: 'As long as the return conditions are met (select accepts return, item is in warehouse for less than 7 days, return shipping fees are paid), we can help you return the item to the seller.'
    },
    {
      question: 'How long can I store my items in your warehouse?',
      answer: 'You can store your items in our warehouse for 90 days for free, starting from the order status “In Warehouse”. To extend your warehouse storage after the 120 days, we charge a small fee of 15 yuan per order per month. If your items reach over 120 days and you haven’t shipped them or extended their storage, they’ll be automatically considered given up and will be destroyed.'
    }
  ];

  const toggleAccordion = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold menu-item justify-center items-center bg-transparent text-gray-800 mb-8 text-center hover:bg-transparent">
        Frequently Asked Questions <MdQuestionAnswer className='text-brandColor' />
      </h2>
      
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div 
            key={index}
            className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 ${
              activeIndex === index ? 'border-l-4 border-indigo-500' : ''
            }`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center group"
              aria-expanded={activeIndex === index}
            >
              <div className="flex items-start space-x-4">
                {/* Index number with circle */}
                <div className="bg-indigo-500 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  {index + 1}
                </div>
                <span className="text-lg font-medium text-white group-hover:text-white transition-colors">
                  {item.question}
                </span>
              </div>
              {activeIndex === index ? (
                <FiChevronUp className="w-6 h-6 text-indigo-500 transition-transform" />
              ) : (
                <FiChevronDown className="w-6 h-6 text-gray-400 group-hover:text-indigo-500 transition-colors" />
              )}
            </button>
            
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-4 ml-12 text-gray-600">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='py-10 flex flex-col justify-center items-center'>
      <h1 className='text-lg md:text-2xl text-center'>Still have questions that aren’t answered above?</h1>
      <a href="#service" className='btn btn-sm md:btn-lg rounded-full bg-brandColor text-white my-5'>Contact us Today</a>
      </div>
    </div>
  );
};

export default FAQSection;