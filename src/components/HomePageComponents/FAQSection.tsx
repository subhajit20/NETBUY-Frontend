import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

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
      answer: 'You can store your items in our warehouse for 120 days for free, starting from the order status “In Warehouse”. To extend your warehouse storage after the 120 days, we charge a small fee of 2.5 € per order per month. If your items reach over 120 days and you haven’t shipped them or extended their storage, they’ll be automatically considered given up and will be destroyed.'
    }
  ];

  const toggleAccordion = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Frequently Asked Questions
          <span className="block mt-2 h-1 w-20 bg-brandColor mx-auto rounded-full" />
        </h2>

        <div className="space-y-6 max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className={`group relative transition-all duration-200 ease-out ${
                activeIndex === index ? 'scale-[1.02]' : 'hover:scale-[1.01]'
              }`}
            >
              <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-100 to-white opacity-0 transition-all 
                ${activeIndex === index ? 'opacity-100' : 'group-hover:opacity-100'}`}
              />
              
              <div className={`relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md 
                transition-all duration-200 border border-white/20 ${
                  activeIndex === index ? 'ring-1 ring-indigo-500/20' : ''
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 md:py-6 text-left flex items-start justify-between space-x-4"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`bg-indigo-500 text-white w-9 h-9 md:w-10 md:h-10 rounded-xl flex 
                      items-center justify-center flex-shrink-0 transition-all duration-200 ${
                        activeIndex === index ? 'rotate-12 scale-110' : ''
                      }`}
                    >
                      <span className="font-medium text-lg">{index + 1}</span>
                    </div>
                    <span className={`text-base md:text-2xl font-semibold tracking-tight text-white 
                      leading-snug transition-colors `}
                    >
                      {item.question}
                    </span>
                  </div>
                  {activeIndex === index ? (
                    <FiChevronUp className="w-7 h-7 text-indigo-500 mt-1 flex-shrink-0" />
                  ) : (
                    <FiChevronDown className="w-7 h-7 text-gray-400 mt-1 flex-shrink-0 group-hover:text-indigo-500" />
                  )}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 ml-16 md:ml-20">
                    <p className="text-base md:text-xl text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-5 flex flex-col justify-center items-center'>
          <h1 className='text-center text-lg md:text-2xl py-5'>Still have questions that aren’t answered above?</h1>
          <a href="#service" className='hover:scale-[0.9] btn btn-sm md:btn-lg bg-brandColor text-white rounded-full'>Contact Us Today</a>
      </div>
    </div>
  );
};

export default FAQSection;