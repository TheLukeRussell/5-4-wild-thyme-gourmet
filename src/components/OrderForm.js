import React, {Component} from 'react';

class OrderList extends Component {
    render() { 
        return(
                <li id='order-row'>
                    <div className='row no-gutters'>
                    <div className='col'>
                    <p>{this.props.food.name} - {this.props.food.price}</p>
                    </div>
                </div>
            </li>
        )
    }
}

class OrderForm extends Component {
    render() {
        const foods = this.props.foods.map(food => <OrderList key={food.id} name={food.name} food={food} />);
        return(
            <form>
                <ul className='list-group'>{foods}</ul>
                <h4 className='subtotal'>Subtotal = </h4>
                <div className='row no-gutters'>
                <input className='col m-3 order-name' type='text' placeholder='Name for the Order...'></input>
                </div>
                <div className='row no-gutters'>
                <input className='col m-3' type='text' placeholder='Phone Number...'></input>
                </div>
                <div className='row no-gutters'>
                <button className='btn col-4 offset-4' id='place-order'>Place Order</button>
                </div>
                
            </form>
        )
    }
}

export default OrderForm;