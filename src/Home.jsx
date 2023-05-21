import React from "react";
import { AppProvider, useGlobalContext } from "./context";
import { FaBars } from "react-icons/fa";

const Home = () => {
  const { openSideBar, openModal } = useGlobalContext();

  return (
    <main>
      <button className="sidebar-toggle" onClick={openSideBar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>
        open modal
      </button>
    </main>
  );
};

export default Home;
