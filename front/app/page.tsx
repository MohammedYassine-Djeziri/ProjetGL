import Image from "next/image";
import styles from'./page.module.css'
import Header from"@/Components/Header"
import HeroSection from "@/Components/HeroSection";
import Features from "@/Components/Features";
import Footer from "@/Components/Footer"

function Home() {
  return (
    <>
    <div>
      
      <Header />
      <HeroSection />
      <Features/>
      <Footer/>
    </div></>
  );
};

export default Home;


