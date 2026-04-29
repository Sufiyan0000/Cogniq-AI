import React from "react";
import bgImage from "./../assets/HeroSectionBG.svg";
import PrimaryBtn from "./ui/PrimaryBtn";
import SecondaryBtn from "./ui/SecondaryBtn";
import IdeaIcon from './../assets/IdeaIconHero.svg'
import BullEyeIcon from './../assets/BullsEyeHero.svg'
import MagicSpIcon from './../assets/MagicSparklesHero.svg'
import {gsap} from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

const Hero = () => {

  const t1 = gsap.timeline( { defaults: { ease: 'power3.out' }})

  useGSAP(() => {
    // Animation for Icon 
    t1.fromTo('.animate-icon',{ opacity: 0,},{ opacity: 1, duration: 1})

    // Animation for Main Hero text
    t1.fromTo('.main-hero-text', { 
      filter:"blur(12px)" ,
      opacity:0,
      y: 40
     },{
      filter: "blur(0px)",
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.15,
     })

     // Animation for cta and sub header
     t1.fromTo('.normal-hero-animate',{ y: 40 , opacity: 0},
      { y: 0, opacity: 1, duration: 0.2, stagger: 0.2})

  },[])

  return (
    <section
      style={{ backgroundImage: `url(${bgImage})` }}
      className="min-h-screen bg-cover bg-center flex items-center"
    >
      {/* Icon for decoration (only on large Screens) */}
      <div className="animate-icon absolute left-[2%] lg:left-[5%] md:top-[15%] lg:top-[15%] top-[12%] z-5 hidden md:block">
        <div className="w-[60px] h-[60px] bg-white rounded-full shadow-[0px_14px_44px_0px_rgba(216,216,216,0.45)] flex items-center justify-center">
          <img src={IdeaIcon} alt="ideal icon" className="w-[30px] h-[30px]" />
        </div>
      </div>

      <div className="animate-icon absolute right-[5%] lg:right-[8%] md:top-[15%] lg:top-[17%] top-[15%] z-5 hidden md:block">
        <div className="w-[60px] h-[60px] bg-white rounded-full shadow-[0px_14px_44px_0px_rgba(216,216,216,0.45)] flex items-center justify-center">
          <img src={BullEyeIcon} alt="bull eye icon" className="w-[30px] h-[30px]" />
        </div>
      </div>

      <div className="animate-icon absolute right-[5%] lg:right-[15%] bottom-[5%] lg:bottom-[20%] z-5 hidden md:block">
        <div className="w-[64px] h-[64px] bg-white rounded-full shadow-[0px_14px_44px_0px_rgba(216,216,216,0.45)] flex items-center justify-center">
          <img src={MagicSpIcon} alt="sparkles icon" className="w-[29px] h-[29px]"/>
        </div>
      </div>

      {/* Main Hero Section (text and cta's) */}
      <div className="w-[90vw] md:w-[80vw] lg:w-[80vw] mx-auto text-center flex flex-col items-center gap-6 mt-15">

        {/* 🔥 Heading */}
        <h1 className="main-hero-text font-bold text-gray-800 leading-tight
                       text-3xl sm:text-5xl md:text-4xl xl:text-6xl">

          Building{" "}
          <span className="bg-gradient-to-r from-[#1C2483] to-[#704CFA] bg-clip-text text-transparent">
            Intelligent
          </span>
          , <br className="block md:hidden" />

          scalable AI <br className="hidden md:block"/> solutions <br className="md:hidden"/>

          for the{" "}
          <span className="bg-gradient-to-r from-[#1C2483] to-[#704CFA] bg-clip-text text-transparent">
            Next
          </span>{" "}
          <br />
          Generation
        </h1>

        {/* 📄 Subtext */}
        <p className="normal-hero-animate text-gray-600 max-w-[680px] text-base md:text-[19px] leading-[1.8em]">
          Your premier AI & Software engineering partner - transforming ideas
          into reliable, high- <br className="md:hidden"/>performance products.
        </p>

        {/* 🚀 Buttons */}
        <div className="normal-hero-animate flex flex-col sm:flex-row gap-4 mt-4">
          <SecondaryBtn text="Explore our services" />

          <PrimaryBtn text="Book a Strategy Call" />
        </div>

      </div>
    </section>
  );
};

export default Hero;