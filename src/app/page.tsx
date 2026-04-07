"use client";
import Team from "@/components/Team/Team";
import Footer from "@/components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/HeroComponent/Hero";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import Faq from "@/components/Faq/Faq";
import ProblemSolutions from "@/components/ProblemSection/Problem";
import ProcessTimeline from '@/components/Timeline/Timeline'

gsap.registerPlugin(ScrollTrigger);


export default function Home() {
  const progressRef = useRef(null);
  const headerRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(headerRef.current, {
      opacity: 0,
      y: -120,
      duration: 1,
    }).from(heroRef.current, {
      x: -120,
      opacity: 0,
      duration: 1,
    });
  }, []);

  useEffect(() => {
    gsap.to(progressRef.current, {
      width: "100%",
      scrollTrigger: {
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      <div ref={progressRef} className="progressBar"></div>

      <Header headerRef={headerRef} />
      <Hero heroRef={heroRef} />
      <ProblemSolutions />
      <ProcessTimeline />
      <Team />
      <Faq />
      <Footer/>
      
    </>
  );
}
