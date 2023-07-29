import "./styles/App.css";
import Home from "./components/Home";
import Maps from "./components/Maps";
import Index from "./components/Index";
import NAN from "./components/404";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Controller from './Controller';

function App() {

  const controller = Controller.getInstance();
  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route index element={<Home />} />
          <Route path="maps" element={<Maps />} />
          <Route path="*" element={<NAN />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// need to move snackbar into one in this file and have it be callable through a singleton
