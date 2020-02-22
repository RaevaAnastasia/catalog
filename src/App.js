import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Catalog from './components/Catalog/Catalog';


const products = [
  {id: 1, name: 'Голубика', price: 150, img: './images/product-1.jpg'},
  {id: 2, name: 'Специи', price: 100, img: './images/product-2.jpg'},
  {id: 3, name: 'Грейпфрут', price: 50, img: './images/product-3.jpg'},
  {id: 4, name: 'Фундук', price: 70, img: './images/product-4.jpg'},
  {id: 5, name: 'Красный перец', price: 110, img: './images/product-5.jpg'},
  {id: 6, name: 'Желтая свекла', price: 70, img: './images/product-6.jpg'},
  {id: 7, name: 'Кукуруза', price: 50, img: './images/product-7.jpg'},
  {id: 8, name: 'Ананас', price: 100, img: './images/product-8.jpg'},
  {id: 9, name: 'Гранат', price: 140, img: './images/product-9.jpg'},
  {id: 10, name: 'Манго', price: 200, img: './images/product-10.jpg'},
  {id: 11, name: 'Дыня', price: 160, img: './images/product-11.jpg'},
  {id: 12, name: 'Смесь орехов и сухофруктов', price: 110, img: './images/product-12.jpg'},
  {id: 13, name: 'Персики', price: 145, img: './images/product-13.jpg'},
  {id: 14, name: 'Облепиха', price: 300, img: './images/product-14.jpg'},
  {id: 15, name: 'Фасоль (соя)', price: 150, img: './images/product-15.jpg'},
  {id: 16, name: 'Физалис', price: 200, img: './images/product-16.jpg'},
  {id: 17, name: 'Шампиньоны', price: 100, img: './images/product-17.jpg'},
  {id: 18, name: 'Огурцы', price: 132, img: './images/product-18.jpg'},
  {id: 19, name: 'Брокколи', price: 90, img: './images/product-19.jpg'},
  {id: 20, name: 'Слива', price: 140, img: './images/product-20.jpg'},
  {id: 21, name: 'Корень имбиря', price: 500, img: './images/product-21.jpg'},
  {id: 22, name: 'Манго', price: 234, img: './images/product-22.jpg'},
  {id: 23, name: 'Фисташки', price: 400, img: './images/product-23.jpg'},
  {id: 24, name: 'Помидоры', price: 86, img: './images/product-24.jpg'},
  {id: 25, name: 'Клюква', price: 189, img: './images/product-25.jpg'},
];

function App() {
  return (
    <>
      <Header />
      <Catalog catalog={products} />
  </>
  );
}

export default App;
