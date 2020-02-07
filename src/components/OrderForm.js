import React, {Component} from 'react';

class OrderForm extends Component {
    render() {
        return(
            <form>
                <h4>Subtotal</h4>
                <div className='row no-gutters'>
                <input className='col m-3' type='text' placeholder='Name for the Order...'></input>
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