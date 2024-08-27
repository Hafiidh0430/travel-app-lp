import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Category from "../components/Category";
import CardDestination from "../components/CardDestination";
import CardTestimonal from "../components/CardTestimonal";
import Accordion from "../components/Accordion";
import Footer from "../components/Footer";

export default function welcome() {
  const villas = [
    {
      name: "Sarasvati Borobudur Hotel",
      price: "2.300.500",
      location: "Borobdur, Magelang",
      rating: 4.4,
      visitors: 784,
    },
    {
      name: "Arasatu Villas & Sanctuary",
      price: "3.450.063",
      location: "Berau, Kalimantan Timur",
      rating: 4.8,
      visitors: 441,
    },
    {
      name: "Swiss-Belresort Pecatu",
      price: "791.596",
      location: "Kuta Selatan, Bali",
      rating: 4.5,
      visitors: 2.261,
    },
    {
      name: "Edensor Hills Villa",
      price: "1.138.433",
      location: "Sentul, Bogor",
      rating: 4.9,
      visitors: 762,
    },
    {
      name: "Miracle Signature Hills",
      price: "1.101.829",
      location: "Ciater, Lembang",
      rating: 4.6,
      visitors: 306,
    },
  ];

  const destinations = [
    {
      title: "Bali",
      visitors: 14.672,
    },
    {
      title: "Braga",
      visitors: 12.52,
    },
    {
      title: "Puncak",
      visitors: 10.732,
    },
    {
      title: "Borobudur",
      visitors: 9.826,
    },
    {
      title: "Wonosobo",
      visitors: 6.034,
    },
    {
      title: "Banyuwangi",
      visitors: 2.562,
    },
    {
      title: "Cibeureum",
      visitors: 6.623,
    },
    {
      title: "Lombok",
      visitors: 4.823,
    },
  ];

  const testimonials = [
    {
      user: "Sinta Maharani",
      profession: "Doctor",
      message:
        "After using your platform to find a place to crash, I gotta say, I'm stoked! It was so easy and hassle-free.",
    },
    {
      user: "Sinta Maharani",
      profession: "Doctor",
      message:
        "After using your platform to find a place to crash, I gotta say, I'm stoked! It was so easy and hassle-free.",
    },
    {
      user: "Sinta Maharani",
      profession: "Doctor",
      message:
        "After using your platform to find a place to crash, I gotta say, I'm stoked! It was so easy and hassle-free.",
    },
    {
      user: "Sinta Maharani",
      profession: "Doctor",
      message:
        "After using your platform to find a place to crash, I gotta say, I'm stoked! It was so easy and hassle-free.",
    },
    {
      user: "Sinta Maharani",
      profession: "Doctor",
      message:
        "After using your platform to find a place to crash, I gotta say, I'm stoked! It was so easy and hassle-free.",
    },
    {
      user: "Sinta Maharani",
      profession: "Doctor",
      message:
        "After using your platform to find a place to crash, I gotta say, I'm stoked! It was so easy and hassle-free.",
    },
    {
      user: "Sinta Maharani",
      profession: "Doctor",
      message:
        "After using your platform to find a place to crash, I gotta say, I'm stoked! It was so easy and hassle-free.",
    },
    {
      user: "Sinta Maharani",
      profession: "Doctor",
      message:
        "After using your platform to find a place to crash, I gotta say, I'm stoked! It was so easy and hassle-free.",
    },
    {
      user: "Sinta Maharani",
      profession: "Doctor",
      message:
        "After using your platform to find a place to crash, I gotta say, I'm stoked! It was so easy and hassle-free.",
    },
    {
      user: "Sinta Maharani",
      profession: "Doctor",
      message:
        "After using your platform to find a place to crash, I gotta say, I'm stoked! It was so easy and hassle-free.",
    },
    {
      user: "Sinta Maharani",
      profession: "Doctor",
      message:
        "After using your platform to find a place to crash, I gotta say, I'm stoked! It was so easy and hassle-free.",
    },
  ];

  const [category, setCategory] = useState("Recommended");
  const [accordion, setAccordion] = useState(Number);

  return (
    <>
      <Hero />
      <Layout is_mt>
        <div className="main-content z-50">
          <div className="villa-section mt-[-9rem]">
            <header className="header-villa-section flex flex-col gap-4">
              <div className="">
                <h1 className="slogan text-[2.5rem]">
                  Discover most popular places.
                </h1>
                <p className="text-slate-600">
                  Lorem ipsum dolor sit amet. Sit quidem vitae qui tempore
                  maxime eum.
                </p>
              </div>
              <div className="category-btn flex justify-between">
                <Category
                  key={category}
                  category={category}
                  setCategory={setCategory}
                />
                <a
                  className="inline-flex items-center text-sm gap-3 pl-4 pr-1 py-1 bg-slate-200 rounded-full"
                  href=""
                >
                  More
                  <svg
                    class="w-7 h-7 rounded-full text-slate-100 p-1 bg-gray-950 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m9 5 7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </header>
            <div className="card-villas pb-4 flex gap-4">
              {villas.map(({ name, price, location, rating, visitors }) => {
                return (
                  <Card
                    name={name}
                    price={price}
                    location={location}
                    rating={rating}
                    visitors={visitors}
                  />
                );
              })}
            </div>
          </div>

          <div className="resort-section mt-16">
            <header className="header-villa-section flex flex-col gap-4">
              <div className="">
                <h1 className="slogan text-[2.5rem]">
                  Warming with family here.
                </h1>
                <p className="text-slate-600">
                  Lorem ipsum dolor sit amet. Sit quidem vitae qui tempore
                  maxime eum.
                </p>
              </div>
              <div className="category-btn flex justify-between">
                <Category
                  key={category}
                  category={category}
                  setCategory={setCategory}
                />
                <a
                  className="inline-flex items-center text-sm gap-3 pl-4 pr-1 py-1 bg-slate-200 rounded-full"
                  href=""
                >
                  More
                  <svg
                    class="w-7 h-7 rounded-full text-slate-100 p-1 bg-gray-950 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m9 5 7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </header>
            <div className="card-resorts pb-4 flex gap-4">
              {villas.map(({ name, price, location, rating, visitors }) => {
                return (
                  <Card
                    name={name}
                    price={price}
                    location={location}
                    rating={rating}
                    visitors={visitors}
                  />
                );
              })}
            </div>
          </div>

          <div className="destination-section mt-16">
            <header className="header-destination-section flex flex-col gap-2">
              <div className="slogan-destination flex max-md:flex-col justify-between ">
                <h1 className="slogan lg:w-[28rem] text-[2.5rem] ">
                  Iconic destinations, catch your vibes.
                </h1>
                <p className="w-[22rem] text-justify">
                  Explore and feel its charming allure in every corner of the
                  city and enjoy an unforgettable adventure in this destination.
                </p>
              </div>
              <div className="category-btn max-md:mt-2 flex justify-between">
                <Category
                  key={category}
                  category={category}
                  setCategory={setCategory}
                />
                <a
                  className="inline-flex items-center text-sm gap-3 pl-4 pr-1 py-1 bg-slate-200 rounded-full"
                  href=""
                >
                  More
                  <svg
                    class="w-7 h-7 rounded-full text-slate-100 p-1 bg-gray-950 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m9 5 7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </header>
            <div className="card-destination max-sm:grid-cols-2 mt-8 grid grid-cols-4 gap-4">
              {destinations.map(({ title, visitors }) => {
                return (
                  <CardDestination
                    key={title}
                    title={title}
                    visitors={visitors}
                  />
                );
              })}
            </div>
          </div>
          <div className="testimonial-section mt-[6rem]">
            <header className="header-destination-section flex flex-col gap-2">
              <h3 className="w-fit category-content text-lg py-[4px]">
                Their Experience is Our Happiness.
              </h3>
              <div className="slogan-destination flex justify-between">
                <h1 className="slogan text-[2.5rem]">They Make Us Grow.</h1>
              </div>
            </header>
          </div>
        </div>
        <div className="card-testimonial flex flex-col relative gap-4 mt-4">
          <div className="shape-right h-full bg-gradient-to-r from-white to-transparent max-md:w-[12rem] w-[18rem] absolute"></div>
          <div className="shape-left h-full bg-gradient-to-l right-0 from-white to-transparent max-md:w-[12rem] w-[18rem] absolute"></div>
          <div
            className={` max-md:grid-cols-2 cards grid grid-cols-4 w-full gap-4`}
          >
            {testimonials.slice(0, 4).map(({ user, profession, message }) => {
              return (
                <CardTestimonal
                  key={message}
                  user={user}
                  profesion={profession}
                  message={message}
                />
              );
            })}
          </div>
          <div className={`max-md:hidden grid cards w-full grid-cols-4 gap-4`}>
            {testimonials.slice(4, 8).map(({ user, profession, message }) => {
              return (
                <CardTestimonal
                  key={message}
                  user={user}
                  profesion={profession}
                  message={message}
                />
              );
            })}
          </div>
        </div>
        <div className="faq-section mt-[6rem]">
          <header className="header-destination-section relative flex flex-col gap-2">
            <h3 className="w-fit category-content text-lg py-[4px]">
              StayInAja’s FAQ.
            </h3>
            <div className="slogan-destination flex justify-between">
              <h1 className="slogan text-[2.5rem]">Most Asked.</h1>
              <p className="w-[24rem] text-justify">
                If you have questions, we have answers for you here. In case we
                don’t, please feel free to reach out to us here{" "}
                <span className="font-bold underline">
                  stayinajacontactid@gmail.com
                </span>
              </p>
            </div>
            <span className="line block rounded-full w-full h-[1px] bg-slate-950"></span>
          </header>
          <div className="faq-content mt-10 flex justify-between items-start">
            <h3 className="max-sm:hidden accordion-direction inline-flex items-center gap-3 font-bold text-2xl">
              May it will help you
              <svg
                class="w-12 h-12 text-gray-950 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </h3>
            <Accordion accordion={accordion} setAccordion={setAccordion} />
          </div>
        </div>
      </Layout>
      <div className="footer mb-12 max-md:mx-0 mx-20 mt-28">
        <Footer />
      </div>
    </>
  );
}
