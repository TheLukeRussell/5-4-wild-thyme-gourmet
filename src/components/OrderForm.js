import React, {Component} from 'react';

class OrderList extends Component {


    render() { 
        // const inCart = this.props.food.inCart ? "inCart" : "notCart";
        return(

                <li id='order-row'>
                    <div className='row no-gutters'>
                        <div className='col-2'><button className='btn btn-outline'><i className='fa fa-ban'></i></button></div>
                    <div className='col'>
                    <p id='list-group'>{this.props.food.name}</p>
                    </div>
                </div>
            </li>
        )
    }
}

class OrderForm extends Component {
    

    handleDelete = (e) => {
        e.preventDefault();
        let index = parseInt(this.props.index);
        this.props.removeItem(index)
    }


    // handleSubmit = e => {
    //     e.preventDefault();
    //     this.props.orderPlace(this.state)
    // }

    render() {
        const foods = this.props.foods.map(food => <OrderList key={food.id} name={food.name} food={food} />);
        // console.log(foods)
        return(
            <form>
                <ul className='list-group'>{foods}</ul>
                <h4 className='subtotal'>Subtotal = </h4>
                <div className='row no-gutters'>
                {/* <input className='col m-3 order-name' type='text' name='text' id='order-name' onChange={this.handleInput} value={this.state.text} placeholder='Name for the Order...'></input> */}
                </div>
                <div className='row no-gutters'>
                <button className='btn col-4 offset-4' onClick={this.handleDelete} id='place-order'>Place Order</button>
                </div>
                
            </form>
        )
    }
}

export default OrderForm;