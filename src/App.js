import React, { useState } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as yup from "yup";
import schema from './Validation/formSchema.js';
import Header from "./Components/Header.js"
import Home from "./Components/Home.js";
import Pizza from "./Components/Pizza.js";
import Confirmation  from "./Components/Confirmation.js";
import Help from "./Components/Help.js";
import "./App.css";

const App = () => {
  const [pizza, setPizza] = useState([]);
  const [form, setForm] = useState({
    "name-input": '',
    "email-input": '',
    size: '',
    sauce: '',
    Pepperoni: false,
    Sausage: false,
    Canadian_Bacon: false,
    Spicy_Italian_Sausage: false,
    Grilled_Chicken: false,
    Onions: false,
    Green_Peppers: false,
    Diced_Tomato: false,
    Black_Olives: false,
    Roasted_Garlic: false,
    Artichoke_Hearts: false,
    Three_Cheese_Blend: false,
    Pineapple: false,
    Extra_Cheese:false,
    gluten: false,
    "special-text": '',
    number: 1
  });
  const [formErrors, setFormErrors] = useState({
    "name-input": '',
    "email-input": '',
    size: '',
    sauce: '',
    Pepperoni: '',
    Sausage: '',
    Canadian_Bacon: '',
    Spicy_Italian_Sausage: '',
    Grilled_Chicken: '',
    Onions: '',
    Green_Peppers: '',
    Diced_Tomato: '',
    Black_Olives: '',
    Roasted_Garlic: '',
    Artichoke_Hearts: '',
    Three_Cheese_Blend: '',
    Pineapple: '',
    Extra_Cheese:'',
    gluten: '',
    "special-text": '',
    number: ''
  });

  const navigate = useNavigate();
  const onSubmit = () => {
    axios.post('https://reqres.in/api/orders', form)
      .then((response) => {
        console.log(response.data);
        setPizza([response.data, ...pizza]);
        navigate("confirmation");
      })
      .catch(err => console.error(err))
      .finally(() => {
        setFormErrors({
          "name-input": '',
          "email-input": '',
          size: '',
          sauce: '',
          Pepperoni: '',
          Sausage: '',
          Canadian_Bacon: '',
          Spicy_Italian_Sausage: '',
          Grilled_Chicken: '',
          Onions: '',
          Green_Peppers: '',
          Diced_Tomato: '',
          Black_Olives: '',
          Roasted_Garlic: '',
          Artichoke_Hearts: '',
          Three_Cheese_Blend: '',
          Pineapple: '',
          Extra_Cheese:'',
          gluten: '',
          "special-text": '',
          number: ''});
        setForm({
          "name-input": '',
          "email-input": '',
          size: '',
          sauce: '',
          Pepperoni: false,
          Sausage: false,
          Canadian_Bacon: false,
          Spicy_Italian_Sausage: false,
          Grilled_Chicken: false,
          Onions: false,
          Green_Peppers: false,
          Diced_Tomato: false,
          Black_Olives: false,
          Roasted_Garlic: false,
          Artichoke_Hearts: false,
          Three_Cheese_Blend: false,
          Pineapple: false,
          Extra_Cheese:false,
          gluten: false,
          "special-text": '',
          number: 1});
      });
  }

  const onChange = (name, value) => {
    validate(name, value);
    setForm({...form, [name]: value});
  }

  const validate = (name, value) => {
    yup.reach(schema, name).validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ""}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}));
  }

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pizza" element={<Pizza form={form} change={onChange} submit={onSubmit} errors={formErrors} />} />
        <Route path="confirmation" element={<Confirmation form={form} change={onChange} submit={onSubmit} errors={formErrors} />} />
        <Route path="help" element={<Help />} />
      </Routes>
    </div>
  );
};
export default App;
