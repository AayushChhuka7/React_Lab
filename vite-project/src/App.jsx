// export default function App() {
//   const user_name = "Aayush";
//   const age = 21;
//   return (
//     <>
//       <button onClick={() => console.log("hell")}>hell</button>
//       <label htmlFor="email">Email:</label>
//       <input id="email" type="email" />
//       <div>
//         <h1>Hello, {user_name}!</h1>
//         <h2>You are {age} years old.</h2>
//         <h2>{age > 18 ? "You are an adult." : "You are a minor."}</h2>
//         <Button />
//         <Button />
//         <Button />
//         <Button />
//       </div>
//     </>
//   );
// }

// import React from 'react'

// export default function App() {
//   return (
//     <div>App</div>
//   )
// }

// import React from "react";

// export const App = () => {
//   return <div>App</div>;
// };
// export default App;

// import Product from "./components/ProductCard";
// export const App = () => {
//   const laptop = [
//     {
//       brand: "Dell",
//       price: 800,
//       image: "./images/lenovo.webp",
//     },
//     {
//       brand: "Apple",
//       price: 1200,
//       image: "./images/mac.jpg",
//     },
//     {
//       brand: "HP",
//       price: 700,
//       image: "./images/hp.avif",
//     },
//   ];

//   return (
//     <>
//       {/* <Product name={laptop[0].brand} price={laptop[0].price} />
//       <Product name={laptop[1].brand} price={laptop[1].price} />
//       <Product name={laptop[2].brand} price={laptop[2].price} /> */}

//       {laptop.map((lap, i) => (
//         <Product key={i} {...lap} />
//       ))}
//     </>
//   );
// };

import Blog from "./components/Blog";
function App() {
  return (
    <div>
      <h2>Blog Details</h2>
      <Blog>
        <h3>Blog Title 1</h3>
        <p>Blog Description</p>
      </Blog>

      <Blog>
        <h3>Blog Title 2</h3>
        <p>Blog Description</p>
      </Blog>
    </div>
  );
}

export default App;
