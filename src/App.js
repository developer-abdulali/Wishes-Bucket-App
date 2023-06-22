import "./App.css";
import AddWish from "./components/AddWish";
import Navbar from "./components/Navbar";
import WishList from "./components/WishList";
import { WishProvider } from "./context/WishProvider";

function App() {
  return (
    <div className="App">
      <WishProvider>
        <Navbar />
        <AddWish />
        <WishList />
      </WishProvider>
    </div>
  );
}

export default App;
