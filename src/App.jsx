// import { BrowserRouter, Route,Routes } from "react-router-dom";
// import Header from "./components/Header";
// import ProductListing from "./components/ProductListing";
// import ProductDetails from "./components/ProductDetails";
// function App() {
//   return (
//     <>
//     <div className="App">
//       <BrowserRouter>
//       <Header/>
//       <Routes>
//         <Route path="/" exact element={<ProductListing/>}/>
//         <Route path="/:productId" element={<ProductDetails/>}/>
//         <Route path="*" />404 Not Found<Route/>
//       </Routes>
//       </BrowserRouter>
//     </div>
//     </>
//   );
// }

// export default App;


import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<ProductListing />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

