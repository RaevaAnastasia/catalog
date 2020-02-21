import React from 'react';
import './App.css';
import Header from './components/Header/Header';


const products = [
  {id: 1, name: 'Голубика', price: 150, url: './images/product-1.jpg'},
  {id: 2, name: 'Специи', price: 100, url: './images/product-2.jpg'},
  {id: 3, name: 'Грейпфрут', price: 50, url: './images/product-3.jpg'},
  {id: 4, name: 'Фундук', price: 70, url: './images/product-4.jpg'},
  {id: 5, name: 'Красный перец', price: 110, url: './images/product-5.jpg'},
  {id: 6, name: 'Желтая свекла', price: 70, url: './images/product-6.jpg'},
  {id: 7, name: 'Кукуруза', price: 50, url: './images/product-7.jpg'},
  {id: 8, name: 'Ананас', price: 100, url: './images/product-8.jpg'},
  {id: 9, name: 'Гранат', price: 140, url: './images/product-9.jpg'},
  {id: 10, name: 'Манго', price: 200, url: './images/product-10.jpg'},
  {id: 11, name: 'Дыня', price: 160, url: './images/product-11.jpg'},
  {id: 12, name: 'Смесь орехов и сухофруктов', price: 110, url: './images/product-12.jpg'},
  {id: 13, name: 'Персики', price: 145, url: './images/product-13.jpg'},
  {id: 14, name: 'Облепиха', price: 300, url: './images/product-14.jpg'},
  {id: 15, name: 'Фасоль (соя)', price: 150, url: './images/product-15.jpg'},
  {id: 16, name: 'Физалис', price: 200, url: './images/product-16.jpg'},
  {id: 17, name: 'Шампиньоны', price: 100, url: './images/product-17.jpg'},
  {id: 18, name: 'Огурцы', price: 132, url: './images/product-18.jpg'},
  {id: 19, name: 'Брокколи', price: 90, url: './images/product-19.jpg'},
  {id: 20, name: 'Слива', price: 140, url: './images/product-20.jpg'},
  {id: 21, name: 'Корень имбиря', price: 500, url: './images/product-21.jpg'},
  {id: 22, name: 'Манго', price: 234, url: './images/product-22.jpg'},
  {id: 23, name: 'Фисташки', price: 400, url: './images/product-23.jpg'},
  {id: 24, name: 'Помидоры', price: 86, url: './images/product-24.jpg'},
  {id: 25, name: 'Клюква', price: 189, url: './images/product-25.jpg'},
];

function App() {
  return (<Header />);
}

export default App;
