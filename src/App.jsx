import Navbar from "./components/navbar/Navbar";
import Product from "./components/product/Product";

function App() {
  return (
    <div className="min-h-[600px] flex flex-col justify-center items-center bg-white w-full px-0 md:px-56">
      <div className="h-full w-full flex-grow-1">
        <Navbar />
        <Product />
      </div>
    </div>
  );
}

export default App;
