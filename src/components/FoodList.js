import React, {Component} from 'react';

class FoodItem extends Component {

    handleAddFood = (event) => {
        event.preventDefault();
        let index = parseInt(this.props.index);
        this.props.addFood(index)
    }
    
    render() {
        // console.log(order)
        return(
            <form>
            <li id='food-row'>
                <div className='row no-gutters'>
                    <div className='col'>
        <h3>{this.props.food.name} - ${this.props.food.price}</h3>
                </div>
                </div>
                <div className='row no-gutters'>
                <aside className='col-2 m-3'><img id='image' src={this.props.food.image} alt='hello' /></aside>
                <p className='col m-3'>{this.props.food.description}</p>
                <button onClick={this.handleAddFood} id='add-item' className='btn col-2 m-3'>Add To Order</button>
                </div>
            </li>
            </form>
        )
        }
}

class FoodList extends Component {
    render() {
    const foods = this.props.foods.map(food => <FoodItem key={food.id} price={food.price} name={food.name} description={food.description} addFood={this.props.addFood} image={food.image} index={food.id} food={food} />);
    
    return (<ul className='list-group'>{foods}</ul>);
};
}

export default FoodList;