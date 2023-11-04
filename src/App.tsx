import {useState} from "react";
import './App.css';
import Menu from "./components/Menu/Menu"
import OrderDetails from "./components/OrderDetails/OrderDetails"
import hamburgerImage from '../src/assets/images/hamburger.png';
import cheeseBurgerImage from '../src/assets/images/cheeseburger.png';
import teaImage from '../src/assets/images/tea.png';
import coffeeImage from '../src/assets/images/coffee.png';
import friesImage from '../src/assets/images/fries.png';
import colaImage from '../src/assets/images/cola.png';


function App() {
  const [menuArray, setMenuArray] = useState([
    {name: 'Hamburger', price: 80, mount: 0, image: hamburgerImage},
    {name: 'Cheeseburger', price: 90, mount: 0, image: cheeseBurgerImage},
    {name: 'Fries', price: 45, mount: 0, image: friesImage},
    {name: 'Coffee', price: 70, mount: 0, image: coffeeImage},
    {name: 'Tea', price: 50, mount: 0, image: teaImage},
    {name: 'Cola', price: 40, mount: 0, image: colaImage},
  ])

  const getMount = (name: string) => {
    setMenuArray(prev => prev.map((item) => {
      return item.name === name ? {
        ...item,
        mount: item.mount + 1,
      } : item;
    }))
  }

  const btnDelete = (name: string) => {
    setMenuArray(prev => prev.map((item) => {
      return item.name === name ? {
        ...item,
        mount: 0,
      } : item;
    }))
  }


  return (
    <div className="App">
      <OrderDetails menuArray={menuArray} btnDelete={btnDelete}/>
      <Menu menuArray={menuArray} btnDelete={getMount}/>
    </div>
  );


}

export default App;