
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbare from './navbar/navbar';
import Bootomnav from './bottomnav.js/bottomnav';
import '../src/navbar/file.css/file.css'
import Header from './header/header';
import Carousel from './imagebottom/Caousel';
import Circle from './circle/circle';
import Bottimage from './bottomimage/bottimage';
import Autoimage from './autoimage/autoimage';
import Test from './navbar/test';
import Fixphone from './fixphone';

const App = () => {
  return (
    <div>
      <Header />
      <Navbare />
      <Bootomnav />
      <Circle />
      <Carousel />
      <Bottimage />
      <Autoimage />
      <Fixphone/>
      <Test/>
    </div>
  );
};

export default App;
