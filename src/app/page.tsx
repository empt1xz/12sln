import Header from "./componentes/Header/Header";
import Hero from "./componentes/HeroComponent/Hero";
import LightPillar from "../components/LightPillar.jsx";

export default function Home() {
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "relative",
          background: 'black'
        }}
      >
        <LightPillar
          topColor="#5227FF"
          bottomColor="#ff9fac"
          intensity={0.6}
          rotationSpeed={0.3}
          glowAmount={0.002}
          pillarWidth={3}
          pillarHeight={0.5}
          noiseIntensity={1.0}
          pillarRotation={60}
          interactive={false}
          mixBlendMode="screen"
          quality="high"
        />

        <Hero />
      </div>
       <Header />
    </>
  );
}
