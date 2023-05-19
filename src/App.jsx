import { createContext, useState } from "react";
import Home from "./Home";
import Modal from "./Modal";
import Sidebar from "./Sidebar";

const App = () => {
  const GlobalContext = createContext();

  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isModalOPen, setIsModalOpen] = useState(false);

  const handleIsSideBarOpen = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <GlobalContext.Provider>
      <main>
        <Home />
        <Modal />
        <Sidebar />
      </main>
    </GlobalContext.Provider>
  );
};
export default App;
