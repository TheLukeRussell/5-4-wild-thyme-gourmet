import React, {Component} from 'react';

class OrderForm extends Component {
    render() {
        const order = this.props.order.map(order => <span>{order}</span>)
        const total = this.props.total
        // const every_nth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);
        // console.log(console.log(every_nth([order], 3)))
        return(
    <form>
        <ul className='list-group'>  
        <li id='order-row'>
        <div className='row no-gutters'>
            {/* <div className='col-2'><button className='btn btn-outline'><i className='fa fa-ban'></i></button></div> */}
        <div className='col'>
        <p id='list-group'>{order}</p>
        </div>
    </div>
</li>
</ul>
<h4 className='subtotal'>Subtotal = ${total[2]}</h4>
                <div className='row no-gutters'>
                {/* <input className='col m-3 order-name' type='text' name='text' id='order-name' onChange={this.handleInput} value={this.state.text} placeholder='Name for the Order...'></input> */}
                </div>
                <div className='row no-gutters'>
                <button className='btn col-4 offset-4 mb-3' onClick={this.handleDelete} id='place-order'>Place Order</button>
                <button id='btn-outline' className='btn col-4 offset-4 btn'>Start Over</button>
                </div>
</form>

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