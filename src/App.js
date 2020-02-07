import React, {Component} from 'react';
import './App.css';
import FoodList from './components/FoodList';
import OrderForm from './components/OrderForm';


class MenuApp extends Component {

state = {
  foods: [
    {id: 0, name: 'Chicken Tenders', description: 'For the individual who is still a child at heart and no, we will not make fun of you if you order these.', image:'./chicken-tenders', price: '$8.99'},
    {id: 1, name: 'Beyond Meat™ Burger', description: 'What?! A burger patty made with plants?! Definitely sounds too good to be true!!', image:'./chicken-tenders', price: '$12.99'},
    {id: 2, name: 'A Normal Hamburger', description: 'Come on.. it\'s like half the price and do you really want a burger patty made with plants?', image:'./chicken-tenders', price: '$7.99'},
    {id: 3, name: 'Chipotlé Chicken Bowl', description: 'Our chef used to work at Chipotlé so we decided to copy the recipe and charge more for it.', image:'./chicken-tenders', price: '$9.99'},
    {id: 4, name: 'Lake Hartwell Bass', description: 'Caught fresh every weekend our owner wants a lake day, definitely not the best fish but it\'s our cheapest item so don\'t complain. ', image:'./chicken-tenders', price: '$3.99'},
    {id: 5, name: 'Gourmet Hotdog', description: 'Isn\'t is crazy when you see restaurants actually list this as a menu item? Like how gourmet can a hotdog really get?', image:'./chicken-tenders', price: '$10.99'},
    {id: 6, name: 'Broccoli Pad Thai', description: 'It\'s Pad Thai made at a place that sells hotdogs and hamburgers so how good could it really be...?', image:'./chicken-tenders', price: '$9.99'},
    {id: 7, name: 'Bring Your Own Item', description: 'We\'re a cool restaraunt that lets you bring your own food. Hey, we\'ll even cook it for ya!', image:'./chicken-tenders', price: '$99.99'}
  ]
}

  render() {
  return (
    <div className='MenuApp'>
    <div id='header' className='row no-gutters'>
      <div className='col'>
        <h1>Wild Thyme Gourmet</h1>
        <i id='logo' className='fa fa-ellipsis-h'></i>
      </div>
    </div>
    {/* <div className='row no-gutters'>
      <div className='col'>
      <i id='logo' className='fa fa-ellipsis-h'></i>
      </div>
    </div> */}
    <div className='row no-gutters menu-form'>
      
        <div className='col-7 food-list'>
          <h2>Entreés</h2>
          <h5>Each entreé is served with a choice of a Baked Potato, Sweet Potato, or Frech Fries (the obvious choice)</h5>
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
