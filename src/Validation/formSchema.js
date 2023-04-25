import * as yup from "yup";

const formSchema = yup.object().shape({
    "name-input": yup.string().trim().required("name must be at least 2 characters").min(2, "name must be at least 2 characters"),
    "email-input": yup.string().email("Must be a valid email address").required("Email is required"),
    size: yup.string().required("Size is Required"),
    sauce: yup.string().required("Sauce is Required"),
    Pepperoni: yup.boolean(),
    Sausage: yup.boolean(),
    Canadian_Bacon: yup.boolean(),
    Spicy_Italian_Sausage: yup.boolean(),
    Grilled_Chicken: yup.boolean(),
    Onions: yup.boolean(),
    Green_Peppers: yup.boolean(),
    Diced_Tomato: yup.boolean(),
    Black_Olives: yup.boolean(),
    Roasted_Garlic: yup.boolean(),
    Artichoke_Hearts: yup.boolean(),
    Three_Cheese_Blend: yup.boolean(),
    Pineapple: yup.boolean(),
    Extra_Cheese:yup.boolean(),
    gluten: yup.boolean(),
    "special-text": yup.string(),
    number: yup.number().min(1, "Need to order at least 1 Pizza")
})

export default formSchema;