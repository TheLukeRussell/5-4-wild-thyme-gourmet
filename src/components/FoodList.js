import React, {Component} from 'react';

class FoodItem extends Component {
    render() {
        return(
            <li>
                <div className='row no-gutters'>
                    <div className='col'>
        <h3>{this.props.food.name} - {this.props.food.price}</h3>
                </div>
                </div>
                <div className='row no-gutters'>
                <aside className='col-2 m-3'><img src='{this.props.food.image}' /></aside>
                <p className='col m-3'>{this.props.food.description}</p>
                <button id='add-item' className='btn col-2 m-3'>Add To Cart</button>
                </div>
            </li>

        )
        }
}

class FoodList extends Component {
    render() {
    const foods = this.props.foods.map(food => <FoodItem key={food.id} name={food.name} description={food.description} image={food.image} index={food.id} food={food} />);

    return (<ul className='list-group'>{foods}</ul>);
};
}

export default FoodList;