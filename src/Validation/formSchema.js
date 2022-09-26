import * as yup from 'yup';

const formSchema = yup.object().shape({
    size: yup
        .string()
        .oneOf(['16in','medium','small', 'extra large']),
    name: yup
        .string()
        .trim()
        .required('name must be at least 2 characters')
        .min(2, 'name must be at least 2 characters'),
    crust: yup
        .string()
        .oneOf(['hand-tossed', 'thin-crust','gluten-freen']),
    sauce: yup
        .string()
        .oneOf(['tomato', 'alfredo', 'pesto', 'none']),
    cheese: yup
        .string()
        .oneOf(['regular','double','none']),
    noTop: yup.boolean(),
    pepperoni: yup.boolean(),
    onion: yup.boolean(),
    spinach: yup.boolean(),
    mushroom: yup.boolean(),
    pineapple: yup.boolean(),
    sausage: yup.boolean(),
    everything: yup.boolean(),
    special: yup
        .string(),
})

export default formSchema;