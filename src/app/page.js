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
  const [activeWatchImg, setActiveWatchImg] = useState("/mint.png");
  return (
    <>
      <header className="header-nav">
        <div>
          <FaApple size={50} />
        </div>
        <div className="nav">
          <Header />
        </div>
        <div className="nav-icons">
          <div>
            <CiSearch size={30} />
          </div>
          <div>
            <FiShoppingBag size={30} />
          </div>
        </div>
      </header>
      <div className="heading-text-content">
        <div>
          <Heading className="heading" />
          <Text className="text" />
        </div>
      </div>
      <div className="iWatch-img">
        <div>
          <WatchImage img={activeWatchImg} />
        </div>
      </div>
      <div className="btn">
        <Button className="buy-btn" />
      </div>
      <IwatchVariants setActiveWatchImg={setActiveWatchImg} />
      <ColorPick />
    </>
  );
}
