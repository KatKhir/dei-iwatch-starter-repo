"use client";
import { useState } from "react";
import WatchImage from "./components/WatchImage";
import Heading from "./components/Heading";
import Text from "./components/Text";
import { FaApple } from "react-icons/fa";
import Header from "./components/Header";
import { CiSearch } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import "./globals.css";
import Button from "./components/Button";
import IwatchVariants from "./components/IwatchVariants";
import ColorPick from "./components/ColorPick";

export default function Home() {
  // State til at holde styr på det aktive billede
  // Vi starter med mint som default billede
  // det der sker er at når man klikker på en variant, så opdateres state med det nye billede, og det nye billede vises i WatchImage komponenten
  const [activeWatchImg, setActiveWatchImg] = useState("/mint.png");
  return (
    <>
      <header className="col-[full-start/full-end] flex items-center justify-between">
        <div>
          <FaApple size={50} />
        </div>
        <div>
          <Header />
        </div>
        <div className="flex list-none gap-10 text-xl">
          <div>
            <CiSearch size={30} />
          </div>
          <div>
            <FiShoppingBag size={30} />
          </div>
        </div>
      </header>
      <div className="col-[full-start/content-mid] row-[hero-start/hero-end] mt-15 flex gap-5">
        <div>
          <Heading />
          <Text />
        </div>
      </div>
      <div className="col-[content-mid/content-end] row-[hero-start/hero-end] flex justify-center">
        <div>
          <WatchImage img={activeWatchImg} />{" "}
          {/* Vi sender det aktive billede som prop til WatchImage komponenten */}
        </div>
      </div>
      <div className="col-[full-start/content-mid]">
        <Button />
      </div>
      <IwatchVariants setActiveWatchImg={setActiveWatchImg} />{" "}
      {/* Vi sender setActiveWatchImg funktionen som prop til IwatchVariants komponenten, så den kan opdatere det aktive billede*/}
      <ColorPick setActiveWatchImg={setActiveWatchImg} />
    </>
  );
}
