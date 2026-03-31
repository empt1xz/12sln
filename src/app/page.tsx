import Header from "./componentes/Header/Header";
import Hero from "./componentes/HeroComponent/Hero";

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
        <Hero />
      </div>
       <Header />
    </>
  );
}
