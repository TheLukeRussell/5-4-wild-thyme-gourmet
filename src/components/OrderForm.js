import React, {Component} from 'react';

// class OrderList extends Component {

//     render() { 
//         return(
            
//                 <li id='order-row'>
//                     <div className='row no-gutters'>
//                         <div className='col-2'><button className='btn btn-outline'><i className='fa fa-ban'></i></button></div>
//                     <div className='col'>
//                     <p id='list-group'>{this.props.name}</p>
//                     </div>
//                 </div>
//             </li>
//         )
//     }
// }


class OrderForm extends Component {
   

    render() {
        // const foods = this.props.foods.map(food => <OrderList key={food.id} inCart={food.inCart} name={food.name} food={food} />);
        const order = this.props.order        
        return(
    <form>
        <ul className='list-group'>  
        <li id='order-row'>
        <div className='row no-gutters'>
            <div className='col-2'><button className='btn btn-outline'><i className='fa fa-ban'></i></button></div>
        <div className='col'>
        <p id='list-group'>{order}</p>
        </div>
    </div>
</li>
</ul>
<h4 className='subtotal'>Subtotal = </h4>
                <div className='row no-gutters'>
                {/* <input className='col m-3 order-name' type='text' name='text' id='order-name' onChange={this.handleInput} value={this.state.text} placeholder='Name for the Order...'></input> */}
                </div>
                <div className='row no-gutters'>
                <button className='btn col-4 offset-4' onClick={this.handleDelete} id='place-order'>Place Order</button>
                </div>
</form>


            //  <form>
            //     <ul className='list-group'>{foods}</ul>
            //     <h4 className='subtotal'>Subtotal = </h4>
            //     <div className='row no-gutters'>
            //     <input className='col m-3 order-name' type='text' name='text' id='order-name' onChange={this.handleInput} value={this.state.text} placeholder='Name for the Order...'></input>
            //     </div>
            //     <div className='row no-gutters'>
            //     <button className='btn col-4 offset-4' onClick={this.handleDelete} id='place-order'>Place Order</button>
            //     </div>
                
            // </form>

            )
        }
    }
    
    export default OrderForm;



















            // <form>
            //     <ul className='list-group'>{foods}</ul>
            //     <h4 className='subtotal'>Subtotal = </h4>
            //     <div className='row no-gutters'>
            //     {/* <input className='col m-3 order-name' type='text' name='text' id='order-name' onChange={this.handleInput} value={this.state.text} placeholder='Name for the Order...'></input> */}
            //     </div>
            //     <div className='row no-gutters'>
            //     <button className='btn col-4 offset-4' id='place-order'>Place Order</button>
            //     </div>
                
            // </form>
//         )
//     }
// }

// export default OrderForm;