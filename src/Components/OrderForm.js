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
        // console.log(`Submit`, event);
    }

    const onChange = event => {
        const { name, value, checked, type } = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
        // console.log(`onChange`, event)
    }

    return (
        <div>
            <div className="constant-header">
                <h2>Build Your Own Pizza</h2>
                <img className='page-image' src='https://www.rayspizza.com/wp-content/uploads/2019/10/sausage-pizza.jpg' alt='mouth-watering pizza' />
            </div>
                <form id="pizza-form" onSubmit={onSubmit}>
                    <div className="orderCardContainer">
                        <h2>Build Your Own Pizza!</h2>

                        <div className='errors'>
                            <div>{error.name}</div>
                        </div>

                        <label className="section-title">Size
                            <select
                                onChange={onChange}
                                value={values.size}
                                name='size'
                            >
                                <option value=''>**** Select Size ****</option>
                                <option value='medium'> 12 Inch </option>
                                <option value='16in'> 16 Inch </option>
                                <option value='extra large'> 64 Inch Party Pizza </option>
                            </select>
                        </label>

                        <label className="section-title">Name
                            <input 
                                value={values.name}
                                onChange={onChange}
                                name='name'
                                type='text'
                            />
                        </label>

                        <label className="section-title">Crust
                            <select
                                onChange={onChange}
                                value={values.crust}
                                name='crust'
                            >
                                <option value=''>**** Select Dough ****</option>
                                <option value='hand-tossed'> Hand Tossed </option>
                                <option value='thin-crust'> Thin Crust </option>
                                <option value='gluten-freen'> Gluten Free </option>
                            </select>
                        </label>
                        
                        <label className="section-title">Sauce
                            <select
                                onChange={onChange}
                                value={values.sauce}
                                name='sauce'
                            >
                                <option value=''>**** Select Sauce ****</option>
                                <option value='tomato'> Tomato </option>
                                <option value='alfredo'> Alfredo </option>
                                <option value='pesto'> Pesto </option>
                                <option value='none'> None </option>
                            </select>
                        </label>
                            
                        <label className="section-title">Cheese
                            <select
                                onChange={onChange}
                                value={values.cheese}
                                name='cheese'
                            >
                                <option value=''>**** Select Cheese ****</option>
                                <option value='regular'> Shredded Mozarella </option>
                                <option value='double'> Double Moz </option>
                                <option value='none'> None </option>
                            </select>
                        </label>
                        
                        <h4 className="section-title">Add Toppings</h4>
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
                        <label id='special-text' className="section-title">Special instructions
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
        </div>
    )
}