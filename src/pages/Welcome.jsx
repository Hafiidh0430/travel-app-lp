import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import Navigation from "../components/Navigation";
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

  const [category, setCategory] = useState("");
  const [accordion, setAccordion] = useState(Number);

  console.log(accordion);
  return (
    <>
      <Layout>
        <Hero />
        <div className="main-content ">
          <div className="villa-section">
            <header className="header-villa-section flex flex-col gap-2">
              <h3 className="w-fit category-content text-lg px-5 py-[6px] rounded-full bg-slate-200">
                Most Visited.
              </h3>
              <h1 className="slogan text-[2.5rem]">
                Experience Luxury at Our Most
                <br /> Popular Villas.
              </h1>
              <div className="category-btn flex justify-between">
                <Category
                  key={category}
                  category={category}
                  setCategory={setCategory}
                />
                <a
                  className="inline-flex items-center text-[14px] gap-2 pl-4 pr-1 py-1 bg-slate-200 rounded-full"
                  href=""
                >
                  See more
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
            <div className="card-villas pb-4 overflow-x-auto flex gap-4">
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

          <div className="resort-section mt-20">
            <header className="header-resort-section flex flex-col gap-2">
              <h3 className="w-fit category-content text-lg px-5 py-[6px] rounded-full bg-slate-200">
                Strategic Areas.
              </h3>
              <h1 className="slogan text-[2.5rem]">
                Indulge in Luxury at Our Strategically <br /> Located Resorts.
              </h1>
              <div className="category-btn flex justify-between">
                <Category
                  key={category}
                  category={category}
                  setCategory={setCategory}
                />
                <a
                  className="inline-flex items-center text-[14px] gap-2 pl-4 pr-1 py-1 bg-slate-200 rounded-full"
                  href=""
                >
                  See more
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
            <div className="card-resorts pb-4 overflow-x-auto flex gap-4">
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
              <h3 className="w-fit category-content text-lg py-[4px]">
                Escape to Excellence.
              </h3>
              <div className="slogan-destination flex justify-between">
                <h1 className="slogan text-[2.5rem]">
                  Your Iconic Homestays <br /> Adventure Begins.
                </h1>
                <p className="w-[21rem] text-justify">
                  Explore and feel its charming allure in every corner of the
                  city and enjoy an unforgettable adventure in this destination.
                </p>
              </div>
              <div className="category-btn flex justify-between">
                <Category
                  key={category}
                  category={category}
                  setCategory={setCategory}
                />
                <a
                  className="inline-flex items-center text-[14px] gap-2 pl-4 pr-1 py-1 bg-slate-200 rounded-full"
                  href=""
                >
                  More categories
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
            <div className="card-destination mt-8 grid grid-cols-4 gap-4">
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

          <div className="testimonial-section mt-20">
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
      </Layout>
      <div className="card-destination flex flex-col relative gap-4 mt-4">
        <div className="shape-right h-full bg-gradient-to-r from-white to-transparent w-[32rem] absolute"></div>
        <div className="shape-left h-full bg-gradient-to-l right-0 from-white to-transparent w-[32rem] absolute"></div>
        <div className="cards grid grid-cols-4 w-full gap-4">
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
        <div className="cards w-full grid grid-cols-4 gap-4">
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

      <Layout>
        <div className="faq-section mt-20">
          <header className="header-destination-section relative flex flex-col gap-2">
            <h3 className="w-fit category-content text-lg py-[4px]">
              StayInAja’s FAQ.
            </h3>
            <div className="slogan-destination flex justify-between">
              <h1 className="slogan text-[2.5rem]">
                Most Asked by <br />
                People.
              </h1>
              <p className="w-[24rem] text-justify">
                If you have questions, we have answers for you here. In case we
                don’t, please feel free to reach out to us here{" "}
                <span className="font-bold underline">
                  stayinajacontactid@gmail.com
                </span>
              </p>
            </div>
            <span className="line absolute bottom-0 top-44 rounded-full w-full h-[1px] bg-slate-950"></span>
          </header>
          <div className="faq-content mt-10 flex justify-between items-start">
            <h3 className="accordion-direction inline-flex items-center gap-3 font-bold text-2xl">
              May it will help you{" "}
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

        <div className="footer mt-24">
          <Footer />
        </div>
      </Layout>
    </>
  );
}
