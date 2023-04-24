import React from 'react';
import PizzaImage from '../Assets/Pizza.jpg';

const Pizza = (props) => {

    const handleChange = (event) => {
        const {name, value, checked, type} = event.target;
        const newVal = type === "checkbox" ? checked : value;
        props.change(name, newVal);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.submit();
    }

    return(
        <div>
            <form id="pizza-form" className="pizza-form" onSubmit={handleSubmit}>
                <h2>Build Your Own Pizza</h2>
                <img src={PizzaImage} alt="Pizza" width="100%" />
                <h3>Build Your Own Pizza</h3>
                <div className="option">
                    <h3>Personal Info</h3>
                    <p>Required</p>
                </div>
                <div>
                    <input type="text" id="name-input" name="name-input" placeholder="Enter Your Name Here" value={props.form.name} onChange={handleChange} />
                    <input type="email" id="email-input" name="email-input" placeholder="Enter Your Email Here" value={props.form.email} onChange={handleChange} />
                </div>
                <div className="option">
                    <h3>Choice of Size</h3>
                    <p>Required</p>
                </div>
                <div>
                    <select id="size-dropdown" name="size" value={props.form.size} onChange={handleChange}>
                        <option value="" disabled>Select Size</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </div>
                <div className="option">
                    <h3>Choice of Sauce</h3>
                    <p>Required</p>
                </div>
                <div>
                    <input type="radio" name="sauce" value="tomato" selected={props.form.sauce} onChange={handleChange} /><label htmlFor="tomato">Original Tomato</label><br />
                    <input type="radio" name="sauce" value="bbq" selected={props.form.sauce} onChange={handleChange} /><label htmlFor="bbq">BBQ Sauce</label><br />
                    <input type="radio" name="sauce" value="ranch" selected={props.form.sauce} onChange={handleChange} /><label htmlFor="ranch">Garlic Ranch</label><br />
                    <input type="radio" name="sauce" value="alfredo" selected={props.form.sauce} onChange={handleChange} /><label htmlFor="alfredo">Spinach Alfredo</label>
                </div>
                <div className="option">
                    <h3>Add Toppings</h3>
                    <p>Choose up to 10</p>
                </div>
                <div className="choice">
                    <input type="checkbox" name="Pepperoni" checked={props.form.Pepperoni} onChange={handleChange} /><label htmlFor="Pepperoni">Pepperoni</label>
                    <input type="checkbox" name="Sausage" checked={props.form.Sausage} onChange={handleChange} /><label htmlFor="Sausage">Sausage</label>
                    <input type="checkbox" name="Canadian_Bacon" checked={props.form.Canadian_Bacon} onChange={handleChange} /><label htmlFor="Canadian_Bacon">Canadian Bacon</label>
                    <input type="checkbox" name="Spicy_Italian_Sausage" checked={props.form.Spicy_Italian_Sausage} onChange={handleChange} /><label htmlFor="Spicy_Italian_Sausage">Spicy Italian Sausage</label>
                    <input type="checkbox" name="Grilled_Chicken" checked={props.form.Grilled_Chicken} onChange={handleChange} /><label htmlFor="Grilled_Chicken">Grilled Chicken</label>
                    <input type="checkbox" name="Onions" checked={props.form.Onions} onChange={handleChange} /><label htmlFor="Onions">Onions</label>
                    <input type="checkbox" name="Green_Peppers" checked={props.form.Green_Peppers} onChange={handleChange} /><label htmlFor="Green_Peppers">Green Peppers</label>
                    <input type="checkbox" name="Diced_Tomato" checked={props.form.Diced_Tomato} onChange={handleChange} /><label htmlFor="Diced_Tomato">Diced Tomato</label>
                    <input type="checkbox" name="Black_Olives" checked={props.form.Black_Olives} onChange={handleChange} /><label htmlFor="Black_Olives">Black Olives</label>
                    <input type="checkbox" name="Roasted_Garlic" checked={props.form.Roasted_Garlic} onChange={handleChange} /><label htmlFor="Roasted_Garlic">Roasted Garlic</label>
                    <input type="checkbox" name="Artichoke_Hearts" checked={props.form.Artichoke_Hearts} onChange={handleChange} /><label htmlFor="Artichoke_Hearts">Artichoke Hearts</label>
                    <input type="checkbox" name="Three_Cheese_Blend" checked={props.form.Three_Cheese_Blend} onChange={handleChange} /><label htmlFor="Three_Cheese_Blend">Three Cheese Blend</label>
                    <input type="checkbox" name="Pineapple" checked={props.form.Pineapple} onChange={handleChange} /><label htmlFor="Pineapple">Pineapple</label>
                    <input type="checkbox" name="Extra_Cheese" checked={props.form.Extra_Cheese} onChange={handleChange} /><label htmlFor="Extra_Cheese">Extra Cheese</label>
                </div>
                <div className="option">
                    <h3>Choice of Substitute</h3>
                    <p>Choose up to 1</p>
                </div>
                <div className="choice">
                <label className="switch"><input type="checkbox" name="gluten" checked={props.form.gluten} onChange={handleChange} /><span className="slider"></span></label><p>Gluten Free Crust (+$1.00)</p>
                </div>
                <div className="option">
                    <h3>Special Instructions</h3>
                </div>
                <div className="special">
                    <input type="text" id="special-text" name="special-text" placeholder="Anything else you'd like to specify?" value={props.form.special_text} onChange={handleChange} />
                </div>
                <div className="submit">
                    <input type="number" id="number" name="number" value={props.form.number} onChange={handleChange} />
                    <input type="submit" id="order-button" value={`Add to Order ${"(Insert Price)"}`} />
                </div>
            </form>
        </div>
    )
}

export default Pizza;