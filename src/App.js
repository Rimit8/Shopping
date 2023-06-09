import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Banner1 from './components/Banner1/Banner1';
import YellowBanner from './components/YellowBanner/YellowBanner';
import NewArrivals from './components/NewArrivals/NewArrivals';
import Banner2 from './components/Banner2/Banner2';
import Young from './components/Young/Young';
import Mobile from './components/Mobile/Mobile';
import Email from './components/Email/Email';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner1/>
       <YellowBanner/>
 <NewArrivals/>
<Banner2/>
            <Young/>
    <Mobile/>
   <Email/>
               <Footer/>
    </div>
  );
}

export default App;
