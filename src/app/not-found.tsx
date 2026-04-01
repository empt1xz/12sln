import Link from "next/link";

export default function notFound() {
  return (
    <>
      <main className="notfound">
        <h1>Ops, essa página não existe.</h1>

        <button>
          <Link href="/">Voltar para home</Link>
        </button>
      </main>
    </>
  );
}
