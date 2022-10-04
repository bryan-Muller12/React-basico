import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useInsertionEffect, useState } from "react";

const Home: NextPage = () => {
  return (
    <main className="flex items-center justify-center w-screen h-screen bg-gradient-to-br from-purple-400 to-purple-600">
      <section className="flex flex-col items-center justify-evenly max-w-xs gap-4 p-8 rounded shadow bg-white">
        
        <div className="w-full flex flex-col gap-4">
          <h1>Aqui, temos uma imagem</h1>

          <picture>
              <img src="/img/pato.jpg" alt="imagem de um Pato" />
          </picture>
        </div>

        <div className="w-full flex flex-col gap-4">
          <h1>Aqui, temos uma imagem</h1>

          <image>
              <img src="/img/ganso.jpg" alt="imagem de um Pato" />
          </image>
        </div>
          
       
      </section>
    </main>
  );
};

export default Home;
