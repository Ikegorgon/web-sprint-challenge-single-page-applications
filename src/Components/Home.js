import React from 'react';
import holderImage from '../Assets/Pizza.jpg'
import { useNavigate } from 'react-router-dom';

function Home (props) {
    const navigate = useNavigate();
    const click = id => () => {
        navigate(`/${id}`);
      }
    return (
        <div>
            <section className="homeImg">
                <h2>Your Favorite Food, Delivered While Coding</h2>
                <button id="order-pizza" onClick={click('pizza')}>Pizza?</button>
            </section>
            <section>
                <h3>Food Delivery in Gotham City</h3>
                <div className="homeList">
                    <div>
                        <img src={holderImage} alt="Restraunt Image" />
                        <h4>Restraunt Name</h4>
                        <p>Info - Price - Cuisine - Food Type</p>
                        <div>Delivery Time</div>
                        <div>Delivery Fee</div>
                    </div>
                    <div>
                        <img src={holderImage} alt="Restraunt Image" />
                        <h4>Restraunt Name</h4>
                        <p>Info - Price - Cuisine - Food Type</p>
                        <div>Delivery Time</div>
                        <div>Delivery Fee</div>
                    </div>
                    <div>
                        <img src={holderImage} alt="Restraunt Image" />
                        <h4>Restraunt Name</h4>
                        <p>Info - Price - Cuisine - Food Type</p>
                        <div>Delivery Time</div>
                        <div>Delivery Fee</div>
                    </div>
                    <div>
                        <img src={holderImage} alt="Restraunt Image" />
                        <h4>Restraunt Name</h4>
                        <p>Info - Price - Cuisine - Food Type</p>
                        <div>Delivery Time</div>
                        <div>Delivery Fee</div>
                    </div>
                    <div>
                        <img src={holderImage} alt="Restraunt Image" />
                        <h4>Restraunt Name</h4>
                        <p>Info - Price - Cuisine - Food Type</p>
                        <div>Delivery Time</div>
                        <div>Delivery Fee</div>
                    </div>
                    <div>
                        <img src={holderImage} alt="Restraunt Image" />
                        <h4>Restraunt Name</h4>
                        <p>Info - Price - Cuisine - Food Type</p>
                        <div>Delivery Time</div>
                        <div>Delivery Fee</div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;