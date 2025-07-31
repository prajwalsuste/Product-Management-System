import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { HeadComp } from './Components/HeadComp';
import { FooterComp } from './Components/FooterComp';
import ListProductComp from './Components/ListProductComp';
import CreateProductComp from './Components/CreateProductComp';
import UpdateProductComp from './Components/UpdateProductComp';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <HeadComp></HeadComp>
      <Routes>
        <Route path='/' element={<ListProductComp></ListProductComp>}></Route>
        <Route path='/products' element={<ListProductComp></ListProductComp>}></Route>
        <Route path='/add-product' element={<CreateProductComp></CreateProductComp>}></Route>
        <Route path='/edit-product/:id' element={<UpdateProductComp></UpdateProductComp>}></Route>
      </Routes>
      <FooterComp></FooterComp>
      </BrowserRouter>
    </div>
  );
}

export default App;
