
import React from "react";
import { Header, CreateContainer,MainContainer } from "./components";
import { AnimatePresence } from "framer-motion";
import {Routes , Route} from "react-router-dom";


function App() {
  return (
    <AnimatePresence exitBeforeEnter>
        <div className=" w-screen h-auto flex flex-col bg-primary">
            <Header />
            <main className=" mt-16 md:mt-24 p-8 w-full">
                <Routes>
                    <Route path="/*" element={<MainContainer />}/>
                    <Route path="/createItem" element={<CreateContainer />}/>
                </Routes>
                <p>send pdf to jose</p>
            </main>
        </div>
    </AnimatePresence>
  );
}

export default App;
