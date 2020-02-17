import React, {Component} from 'react';
import './App.css';
import FoodList from './components/FoodList';
import OrderForm from './components/OrderForm';


class MenuApp extends Component {

state = {
  foods: [
    {id: 0, name: 'Chicken Tenders', description: 'For the individual who is still a child at heart and no, we will not make fun of you if you order these.', image:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/7/28/2/YW0808H_baked-chicken-tenders-with-honey-mustard_s4x3.jpg.rend.hgtvcom.616.462.suffix/1476820959088.jpeg', inCart: false, price: 8},
    {id: 1, name: 'Beyond Meat™ Burger', description: 'What?! A burger patty made with plants?! Definitely sounds too good to be true!!', image:'https://cdn.vox-cdn.com/thumbor/eI8Wp0q4OaTuSjIxGayJfakY2wM=/0x0:1310x983/1200x800/filters:focal(0x0:1310x983)/cdn.vox-cdn.com/uploads/chorus_image/image/49794975/beyondburger.0.0.png', inCart: false, price: 13},
    {id: 2, name: 'A Normal Hamburger', description: 'Come on.. it\'s like half the price and do you really want a burger patty made with plants?', image:'https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/bachelor-emotional-support-cow0120.jpg?itok=fjgKCYwj', inCart: false, price: 8},
    {id: 3, name: 'Chipotlé Chicken Bowl', description: 'Our chef used to work at Chipotlé so we decided to copy the recipe and charge more for it.', image:'https://blog.fablunch.com/wp-content/uploads/Burrito-2.jpg', inCart: false, price: 10},
    {id: 4, name: 'Lake Hartwell Bass', description: 'Caught fresh every weekend our owner wants a lake day, definitely not the best fish but it\'s our cheapest item so don\'t complain. ', image:'https://www.cookingmaniac.com/wp-content/uploads/2016/05/pan-seared-seabass01.jpg', inCart: false, price: 4},
    {id: 5, name: 'Gourmet Hotdog', description: 'Isn\'t it crazy that restaurants actually list this on the menu? Like how gourmet can a hotdog really get?', image:'https://previews.123rf.com/images/photomts/photomts1608/photomts160800073/61502922-big-tasty-hot-dog-with-sauce-and-vegetables-in-parchment-on-the-wooden-background-hotdog-gourmet-.jpg', inCart: false, price: 11},
    {id: 6, name: 'Broccoli Pad Thai', description: 'It\'s Pad Thai made at a place that sells hotdogs and hamburgers so how good could it really be...?', image:'https://img.taste.com.au/ZtHBNTCz/w720-h480-cfill-q80/taste/2016/11/broccolini-pad-thai-89594-1.jpeg', inCart: false, price: 10},
    {id: 7, name: 'Bring Your Own Item', description: 'We\'re a cool restaraunt that lets you bring your own food. Hey, we\'ll even cook it for ya!', image:'https://media.sciencephoto.com/image/h1103295/800wm', inCart: false, price: 88}
  ],
  order: [],
  total: [],
  counter: 8
}

addFood = (id) => {
  const foods = this.state.foods;
  const food = foods[id];
  // food.inCart = true;
    this.setState(
      {
        
      order: this.state.order.concat([food.name],' ',[food.price], <br />),
      total: food.price
    }
      )
    }

  render() {
  return (
    <div className='MenuApp'>
    <div id='header' className='row no-gutters'>
      <div className='col'>
        <h1>~ Wild Thyme Gourmet ~</h1>
      </div>
    </div>
    <div className='row no-gutters menu-form'>
      
        <div className='col-7 food-list'>
          <h2>Entreés</h2>
          <h5>Each entreé is served with a choice of a Baked Potato, Sweet Potato, or French Fries (the obvious choice)</h5>
          <FoodList foods={this.state.foods} order={this.state.order} total={this.state.order} addFood={this.addFood} />
        </div>
        <div className='col offset-1 order-form'>
          <h2 id='food-order'>Food Order</h2>
          <OrderForm foods={this.state.foods} addOrder={this.addOrder} total={this.state.order} order={this.state.order}  addFood={this.addFood} />
        </div>
      
    </div>
    </div>
  );
}
}

export default MenuApp;
