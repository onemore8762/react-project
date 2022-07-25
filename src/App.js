import './App.css';
import Content from './components/Profile';
import Header from './components/Header';
import Navbar from './components/Navbar';


const App = () => {
  return (  
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Content />
    </div>
  );
}



export default App;
