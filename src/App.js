import React, {Component} from 'react';
import './App.css';
import FoodList from './components/FoodList';
import OrderForm from './components/OrderForm';


class MenuApp extends Component {

state = {
  foods: [
    {id: 0, name: 'Chicken Tenders', description: 'Grilled or Fried Chicken! For those who cannot decide what to get.', image:'./chicken-tenders', price: '$8.99'},
    {id: 1, name: 'Chicken Tenders', description: 'Grilled or Fried Chicken! For those who cannot decide what to get.', image:'./chicken-tenders', price: '$8.99'}
  ]
}

  render() {
  return (
    <div className='MenuApp'>
    <div className='row no-gutters'>
      <div className='col'>
        <h1>Wild Thyme Gourmet</h1>
      </div>
    </div>
    <div className='row no-gutters menu-form'>
      
        <div className='col-7 food-list'>
          <h2>Entreés</h2>
          <FoodList foods={this.state.foods} />
        </div>
        <div className='col offset-1 order-form'>
          <h2>Food Order</h2>
          <OrderForm />
        </div>
      
    </div>
    </div>
  );
}
}

export default MenuApp;
