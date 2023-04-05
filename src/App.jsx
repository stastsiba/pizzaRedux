import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPizzas } from './components/redux/reducers/products';
import { Body } from './components/body/Body';
import { Header } from './components/header/Header';
import { Route, Routes, Link } from 'react-router-dom';
import { Basket } from './components/basket/Basket';
import './App';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios(`https://63fe7945571200b7b7cb662e.mockapi.io/pizza`).then((res) =>
      dispatch(getPizzas(res.data)),
    );
  }, []);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
      </Routes>
      <Routes>
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </div>
  );
}

export default App;
