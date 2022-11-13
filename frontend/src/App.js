
import './App.css';


import AllRoutes from './AllRoutes/AllRoutes';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Fotter/Fotter';


function App() {
  return (
    <div className="App">
      <Navbar/>
        <AllRoutes/>
        <Footer/>
    </div>
  );
}

export default App;
