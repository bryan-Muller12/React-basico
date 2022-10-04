import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useInsertionEffect, useState } from "react";
import Button from "../componentes/Button";

const Home: NextPage = () => {
  return (
    <main className="flex items-center justify-center w-screen h-screen bg-gradient-to-br from-purple-400 to-purple-600">
      <section className="flex flex-col items-center justify-evenly  gap-4 p-8 rounded shadow bg-white">
        <p className="">Olha uma pagina</p>
        <Link href="alt"  >
            <a className="text-xl font-bold bg-purple-600 text-white p-4 rounded shadow hover:bg-purple-700 focus:outline-none focus:bg-purple-700 active:bg-purple-900">
              Manda pra outra
            </a>
        </Link>
      </section>
    </main>
  );
};

export default Home;
