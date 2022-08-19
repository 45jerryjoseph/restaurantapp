
import React from "react";
import { Header, CreateContainer,MainContainer } from "./components";
import { AnimatePresence } from "framer-motion";
import {Routes , Route} from "react-router-dom";


function App() {
  return (
    <AnimatePresence>
        <div className=" w-screen h-auto flex flex-col bg-gray-100">
            <Header />
            <main className=" mt-24 p-8 w-full">
                <Routes>
                    <Route path="/*" element={<MainContainer />}/>
                    <Route path="/createItem" element={<CreateContainer />}/>
                </Routes>
            </main>
        </div>
    </AnimatePresence>
  );
}

export default App;
