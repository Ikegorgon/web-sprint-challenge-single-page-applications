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
                    <h3>Choice of Size</h3>
                    <p>Required</p>
                </div>
                <div>
                    <select name="size">
                        <option value="" selected disabled>Select Size</option>
                        <option value="1">Small</option>
                        <option value="2">Medium</option>
                        <option value="3">Large</option>
                    </select>
                </div>
                <div className="option">
                    <h3>Choice of Sauce</h3>
                    <p>Required</p>
                </div>
                <div>
                    <input type="radio" name="tomato" /><label htmlFor="tomato">Original Tomato</label><br />
                    <input type="radio" name="bbq" /><label htmlFor="bbq">BBQ Sauce</label><br />
                    <input type="radio" name="ranch" /><label htmlFor="ranch">Garlic Ranch</label><br />
                    <input type="radio" name="alfredo" /><label htmlFor="alfredo">Spinach Alfredo</label>
                </div>
                <div className="option">
                    <h3>Add Toppings</h3>
                    <p>Choose up to 10</p>
                </div>
                <div className="choice">
                    <input type="checkbox" name="" /><label htmlFor="">Pepperoni</label>
                    <input type="checkbox" name="" /><label htmlFor="">Sausage</label>
                    <input type="checkbox" name="" /><label htmlFor="">Canadian Bacon</label>
                    <input type="checkbox" name="" /><label htmlFor="">Spicy Italian Sausage</label>
                    <input type="checkbox" name="" /><label htmlFor="">Grilled Chicken</label>
                    <input type="checkbox" name="" /><label htmlFor="">Onions</label>
                    <input type="checkbox" name="" /><label htmlFor="">Green Peppers</label>
                    <input type="checkbox" name="" /><label htmlFor="">Diced Tomato</label>
                    <input type="checkbox" name="" /><label htmlFor="">Black Olives</label>
                    <input type="checkbox" name="" /><label htmlFor="">Roasted Garlic</label>
                    <input type="checkbox" name="" /><label htmlFor="">Artichoke Hearts</label>
                    <input type="checkbox" name="" /><label htmlFor="">Three Cheese Blend</label>
                    <input type="checkbox" name="" /><label htmlFor="">Pineapple</label>
                    <input type="checkbox" name="" /><label htmlFor="">Extra Cheese</label>
                </div>
                <div className="option">
                    <h3>Choice of Substitute</h3>
                    <p>Choose up to 1</p>
                </div>
                <div className="choice">
                <label className="switch"><input type="checkbox" /><span class="slider"></span></label><p>Gluten Free Crust (+$1.00)</p>
                </div>
                <div className="option">
                    <h3>Special Instructions</h3>
                </div>
                <div className="special">
                    <input type="text" name="specialInstructions" placeholder="Anything else you'd like to specify?" />
                </div>
                <div className="submit">
                    <input type="number" id="number" name="number" value="1" />
                    <input type="submit" id="submit" value={`Add to Order ${"(Insert Price)"}`} />
                </div>
            </form>
                {/* <label htmlFor="fname">First Name</label>
                <input type="text" name="fname" placeholder="Enter First Name Here" value={props.form.fname} onChange={handleChange} />
                <p>{props.errors.fname}</p>
                <label htmlFor="fname">Last Name</label>
                <input type="text" name="lname" placeholder="Enter Last Name Here" value={props.form.lname} onChange={handleChange} />
                <p>{props.errors.lname}</p>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Enter Email Here" value={props.form.email} onChange={handleChange} />
                <p>{props.errors.email}</p>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Enter Password Here" value={props.form.password} onChange={handleChange} />
                <p>{props.errors.password}</p>
                <label htmlFor="terms">Terms of Service</label>
                <input type="checkbox" name="terms" checked={props.form.terms} onChange={handleChange} />
                <p>{props.errors.terms}</p>
                <input id="submit" type="submit" /> */}
        </div>
    )
}

export default Pizza;