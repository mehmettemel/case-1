import Head from "next/head";
import { useState } from "react";
import Apple from "../components/Apple";
import AppleBasket from "../components/AppleBasket";
import Tree from "../components/Tree";

export default function Home() {
  const [shake, setShake] = useState(false);
  const [drop, setDrop] = useState(false);
  const [basketApple, setBasketApple] = useState(0);

  const animate = async () => {
    setShake(true);
    setTimeout(() => setShake(false), 3000);
    setTimeout(() => setDrop(true), 3000);
  };
  const appleData = [
    {
      count: 1,
      position: "left-14 top-10",
    },
    {
      count: 2,
      position: "right-14 top-10",
    },
    {
      count: 3,
      position: "left-24",
    },
  ];

  const renderApples = (appleData) => {
    return appleData.map((apple, index) => (
      <Apple
        drop={drop}
        key={index}
        count={apple.count}
        position={apple.position}
      ></Apple>
    ));
  };

  return (
    <>
      <Head>
        <title>Protein Front Case</title>
        <meta name="description" content="Protein Front Case" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full min-h-screen flex justify-center align-middle">
        <div className="relative">
          {appleData.length && renderApples(appleData)}
          <div onClick={animate} className={shake ? `shake` : null}>
            <Tree />
          </div>
          <div className="mt-12">
            <AppleBasket basketApple={basketApple} />
          </div>
        </div>
      </main>
    </>
  );
}
