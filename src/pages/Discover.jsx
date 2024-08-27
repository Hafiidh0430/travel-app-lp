import React from "react";
import Layout from "../Layout";
import HeroDiscover from "../components/HeroDiscover";
import Card from "../components/Card";
import Footer from "../components/Footer";
export default function Discover() {
  const villas = [  
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
  return (
    <>
      <HeroDiscover />
      <Layout is_mt={false}>
        <div className="container_discover flex flex-col gap-6 items-center">
          <div className="card_discover_villa pb-[2rem] grid grid-cols-3 gap-4 lg:grid-cols-4 w-full h-fit">
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
          <button className="bg-black text-white px-6 rounded-full py-2">More places</button>
        </div>
      </Layout>
      <div className="footer mb-12 max-md:mx-0 mx-20 mt-28">
        <Footer />
      </div>
    </>
  );
}
