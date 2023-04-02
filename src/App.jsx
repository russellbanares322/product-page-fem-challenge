import Navbar from "./components/navbar/Navbar";
import Product from "./components/product/Product";

function App() {
  return (
    <div className="flex flex-col justify-center items-center bg-white w-full px-0 md:px-24 font-kumbh overflow-hidden">
      <div className="h-full w-full flex-grow-1">
        <Navbar />
        <Product />
      </div>
    </div>
  );
}

export default App;
