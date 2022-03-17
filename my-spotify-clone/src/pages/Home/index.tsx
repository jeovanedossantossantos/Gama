import React from "react";
import Banner from "../../components/Banner";
import "../../assets/styles/global.css"
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div style={{overflowY: "auto",height:"100vh"}}>
      <Header />
      <Banner />
      <Footer />
    </div>
  );
}

export default Home;
