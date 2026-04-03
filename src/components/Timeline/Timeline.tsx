import Style from "./timeline.module.css";

export default function Timeline() {
  return (
    <>
      <main className={Style.main}>
        <section className={`${Style.Titulo}`}>
          <h1>Vossa Timeline</h1>
          <p>santificado seja vossa linha</p>
        </section>

        <section className={`${Style.Timeline}`}>
          <section className={`${Style.CardsLeft}`}>
            <section className={`${Style.card}`}>
              <h1>Card1</h1>
            </section>
          </section>

          <div className={Style.Line}></div>

          <section className={`${Style.CardsRight}`}>
            <section className={`${Style.card}`}>
              <h1>card1</h1>
            </section>

            <section className={`${Style.card}`}>
              <h1>card2</h1>
            </section>
          </section>
        </section>
      </main>
    </>
  );
}
