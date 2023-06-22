import './App.css';
import Navbar from './components/Navbar';
import WishList from './components/WishList' ;
import { WishProvider } from './context/WishProvider';

function App() {
  return (
    <div className="App">
      <WishProvider>
        
      <Navbar />
    <WishList />
      </WishProvider>
    </div>
  );
}

export default App;
