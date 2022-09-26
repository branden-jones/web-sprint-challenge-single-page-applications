import React from "react";

export default function OrderForm(props) {

    const {
        change,
        values,
        error,
        submit,
        disabled,
    } = props

    const onSubmit = event => {
        event.preventDefault();
        submit();
    }

    const onChange = event => {
        const { name, value, checked, type } = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return (
        <form id="pizza-form" onSubmit={onSubmit}>
            <div className="orderCardContainer">
                <h2>Build Your Own Pizza!</h2>

                <div className='errors'>
                    <div>{error.name}</div>
                </div>

                <label>Name
                    <input 
                        value={values.name}
                        onChange={onChange}
                        name='name'
                        type='text'
                    />
                </label>

                <label>Crust
                    <select
                        onChange={onChange}
                        value={values.crust}
                        name='crust'
                    >
                        <option value='hand-tossed'> Hand Tossed </option>
                        <option value='thin-crust'> Thin Crust </option>
                        <option value='gluten-freen'> Gluten Free </option>
                    </select>
                </label>
                
                <label>Sauce
                    <select
                        onChange={onChange}
                        value={values.sauce}
                        name='sauce'
                    >
                        <option value='tomato'> Tomato </option>
                        <option value='alfredo'> Alfredo </option>
                        <option value='pesto'> Pesto </option>
                        <option value='none'> None </option>
                    </select>
                 </label>
                    
                 <label>Cheese
                    <select
                        onChange={onChange}
                        value={values.cheese}
                        name='cheese'
                    >
                        <option value='regular'> Shredded Mozarella </option>
                        <option value='double'> Double Moz </option>
                        <option value='none'> None </option>
                    </select>
                 </label>
                
                 <label>Size
                    <select
                        onChange={onChange}
                        value={values.size}
                        name='size'
                    >
                        <option value='16in'> 16 Inch </option>
                        <option value='medium'> 12 Inch </option>
                        <option value='small'> 8 Inch </option>
                        <option value='extra large'> 64 Inch Party Pizza </option>
                    </select>
                 </label>
                <h4>Toppings</h4>
                <div className="toppings">
                    <label>No Toppings
                        <input 
                            type='checkbox'
                            name='noTop'
                            checked={values.noTop}
                            onChange={onChange}
                        />
                    </label>

                    <label>Pepperoni
                        <input 
                            type='checkbox'
                            name='pepperoni'
                            checked={values.pepperoni}
                            onChange={onChange}
                        />
                    </label>
                    <label>Onion
                        <input 
                            type='checkbox'
                            name='onion'
                            checked={values.onion}
                            onChange={onChange}
                        />
                    </label>
                    <label>Spinach
                        <input 
                            type='checkbox'
                            name='spinach'
                            checked={values.spinach}
                            onChange={onChange}
                        />
                    </label>
                    <label>Mushroom
                        <input 
                            type='checkbox'
                            name='mushroom'
                            checked={values.mushroom}
                            onChange={onChange}
                        />
                    </label>
                    <label>Pineapple
                        <input 
                            type='checkbox'
                            name='pineapple'
                            checked={values.pineapple}
                            onChange={onChange}
                        />
                    </label>
                    <label>Sausage
                        <input 
                            type='checkbox'
                            name='sausage'
                            checked={values.sausage}
                            onChange={onChange}
                        />
                    </label>
                    <label>Everything
                        <input 
                            type='checkbox'
                            name='everything'
                            checked={values.everything}
                            onChange={onChange}
                        />
                    </label>
                </div>
                 <label id='special-text'>Special instructions
                    <input 
                        type='text'
                        name='special'
                        onChange={onChange}
                        value={values.special}
                    />
                 </label>

                <button disabled={disabled}>Submit your Order</button>

            </div>
        </form>
    )
}