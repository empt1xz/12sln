import Link from "next/link";

export default function notFound() {
  return (
    <>
      <main className="notfound">
       <img src="https://i.pinimg.com/originals/67/5d/aa/675daa5c96e23bb7e2b5b06ef804cb81.gif" alt="" />

          <Link href="/">Não tem nada aqui..</Link>
          <button>
            <Link href='/'>
              Voltar para Home
            </Link>
          </button>
      </main>
    </>
  );
}
