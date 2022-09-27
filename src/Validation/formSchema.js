import * as yup from 'yup';

const formSchema = yup.object().shape({
    size: yup
        .string()
        .oneOf(['16in','medium','small', 'extra large'], `Must choose a SIZE option`),
    name: yup
        .string()
        .trim()
        .required('name must be at least 2 characters')
        .min(2, 'name must be at least 2 characters'),
    crust: yup
        .string()
        .oneOf(['hand-tossed', 'thin-crust','gluten-freen'], `Must choose a CRUST option`),
    sauce: yup
        .string()
        .oneOf(['tomato', 'alfredo', 'pesto', 'none'],`Must choose a SAUCE option`),
    cheese: yup
        .string()
        .oneOf(['regular','double','none'], `Must choose a CHEESE option`),
    noTop: yup.boolean(),
    pepperoni: yup.boolean(),
    onion: yup.boolean(),
    spinach: yup.boolean(),
    mushroom: yup.boolean(),
    pineapple: yup.boolean(),
    sausage: yup.boolean(),
    everything: yup.boolean(),
    special: yup
        .max(300, `too many characters`),
})

export default formSchema;