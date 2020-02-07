import React, {Component} from 'react';

class OrderForm extends Component {
    render() {
        return(
            <form>
                <h4>Subtotal</h4>
                <div className='row no-gutters'>
                <input className='col m-4' type='text'></input>
                </div>
                <div className='row no-gutters'>
                <input className='col m-4' type='text'></input>
                </div>
            </form>
        )
    }
}

export default OrderForm;