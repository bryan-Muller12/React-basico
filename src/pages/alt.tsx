import type { NextPage } from "next";
import Router, { useRouter } from "next/router";

const Alt = () => {
    const router = useRouter ();

    const handleClick = () => {
        router.push("/");
    }

  return (
    <main className="flex items-center justify-center w-screen h-screen bg-gradient-to-br from-purple-400 to-purple-600">
      <section className="flex flex-col items-center justify-evenly  gap-4 max-w-xs p-8 rounded shadow bg-white">

            <button onClick={handleClick} className="text-xl font-bold bg-purple-600 text-white p-4 rounded shadow hover:bg-purple-700 focus:outline-none focus:bg-purple-700 active:bg-purple-900">
              Redirecionar
            </button>
      </section>
    </main>
  );

  };
export default Alt;
