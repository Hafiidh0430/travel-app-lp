import React, { memo } from "react";

export default function Accordion({ accordion, setAccordion }) {
  const faq = [
    {
      id: 1,
      question: "What’s StayInAja?",
      answer:
        "StayInAja is a cool place to book your favorite villas and resorts! Guaranteed you won't want to go home.",
    },
    {
      id: 2,
      question: "What’s StayInAja?",
      answer:
        "StayInAja is a cool place to book your favorite villas and resorts! Guaranteed you won't want to go home.",
    },
    {
      id: 3,
      question: "What’s StayInAja?",
      answer:
        "StayInAja is a cool place to book your favorite villas and resorts! Guaranteed you won't want to go home.",
    },
    {
      id: 4,
      question: "What’s StayInAja?",
      answer:
        "StayInAja is a cool place to book your favorite villas and resorts! Guaranteed you won't want to go home.",
    },
    {
      id: 5,
      question: "What’s StayInAja?",
      answer:
        "StayInAja is a cool place to book your favorite villas and resorts! Guaranteed you won't want to go home.",
    },
  ];
  return (
    <>
      <div className="accordions flex max-sm:w-full flex-col gap-8">
        {faq.map(({ id, question, answer }) => {
          return (
            <>
              <div key={id} className="accordion w-[24rem] max-sm:w-full flex flex-col gap-7">
                <header onClick={() => memo(setAccordion(id), [])} className="accordion-header cursor-pointer relative justify-between flex">
                  <h4 className="text-lg font-bold">{question}</h4>
                  <svg
                    class="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18 17.94 6M18 18 6.06 6"
                    />
                  </svg>
                  <span className="line absolute bottom-0 top-10 rounded-full w-full h-[1px] bg-slate-950"></span>
                </header>
              {id == accordion && <p className="accordion-answer">{answer}</p> }
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
