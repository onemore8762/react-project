import './App.css';
import Content from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';


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
