import './App.css';
import Content from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';


const App = () => {
  return (  
    <div className="app-wrapper">
      <Header />
      <Navbar />
      {/* <Content /> */}
      <div className='app-wrapper-content'>
          <Dialogs />
      </div>
      
    </div>
  );
}



export default App;
