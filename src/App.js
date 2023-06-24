import ReactDom from "react-dom/client";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./components/Homepage";
import Districts from "./components/Districts";
import States from "./components/States";
import Taluk from "./components/Taluk";
import Palce from "./components/Place";
import Razorpaycountry from "./components/Razorpaycountry";
import Downloadcounrty from "./components/Downloadcountry"

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />}/>
        <Route path="/districts" element={<Districts />}/>
        <Route path="/states" element={<States/>}/>
        <Route path="/taluk" element={<Taluk />}/>
        <Route path="/place" element={<Palce />}/>
        <Route path="/razorpaycountry" element={<Razorpaycountry />}/>
        <Route path="/downloadcountry" element={<Downloadcounrty />}/>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App/>);