import React from "react";



export default function OrderForm(props) {

    const {
        change,
        onCheckboxChange,
        values,
        error,
        submit,
        disabled,
    } = props


    // const onChange = event => {
    //     const { name, value, checked, type } = event.target
    //     const valueToUse = type === 'checkbox' ? checked : value
    //     change(name, valueToUse)
    // }

    
    return (
        <div>

            <div className="constant-header">
                <h2>Build Your Own Pizza</h2>
                <img className='page-image' src='https://www.rayspizza.com/wp-content/uploads/2019/10/sausage-pizza.jpg' alt='mouth-watering pizza' />
            </div>
                <form onSubmit={submit} id='pizza-form'>
                    <div className="orderCardContainer">
                        <h2>Build Your Own Pizza!</h2>

                        <div className='errors'>
                            <div>{error.name}</div>
                        </div>

                        <label className="section-title">Size
                            <select
                                onChange={change}
                                value={values.size}
                                name='size'
                                id='size-dropdown'
                            >
                                <option value=''>**** Select Size ****</option>
                                <option value='12 Inch'> 12 Inch </option>
                                <option value='16 Inch'> 16 Inch </option>
                                <option value='64 Inch'> 64 Inch Party Pizza </option>
                            </select>
                        </label>

                        <label className="section-title">Name
                            <input 
                                value={values.name}
                                onChange={change}
                                name='name'
                                type='text'
                                id='name-input'
                            />
                        </label>

                        <label className="section-title">Crust
                            <select
                                onChange={change}
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
                                onChange={change}
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
                                onChange={change}
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
                                    onChange={onCheckboxChange}
                                    checked={values.noTop}
                                    
                                />
                            </label>

                            <label>Pepperoni
                                <input 
                                    type='checkbox'
                                    name='pepperoni'
                                    onChange={onCheckboxChange}
                                    checked={values.pepperoni}
                                    
                                />
                            </label>
                            <label>Onion
                                <input 
                                    type='checkbox'
                                    name='onion'
                                    checked={values.onion}
                                    onChange={onCheckboxChange}
                                />
                            </label>
                            <label>Spinach
                                <input 
                                    type='checkbox'
                                    name='spinach'
                                    checked={values.spinach}
                                    onChange={onCheckboxChange}
                                />
                            </label>
                            <label>Mushroom
                                <input 
                                    type='checkbox'
                                    name='mushroom'
                                    checked={values.mushroom}
                                    onChange={onCheckboxChange}
                                />
                            </label>
                            <label>Pineapple
                                <input 
                                    type='checkbox'
                                    name='pineapple'
                                    checked={values.pineapple}
                                    onChange={onCheckboxChange}
                                />
                            </label>
                            <label>Sausage
                                <input 
                                    type='checkbox'
                                    name='sausage'
                                    checked={values.sausage}
                                    onChange={onCheckboxChange}
                                />
                            </label>
                            <label>Everything
                                <input 
                                    type='checkbox'
                                    name='everything'
                                    checked={values.everything}
                                    onChange={onCheckboxChange}
                                />
                            </label>
                        </div>
                        <label id='special-text' className="section-title">Special instructions
                            <input 
                                type='text'
                                name='special'
                                onChange={change}
                                value={values.special}
                            />
                        </label>

                        <button id='order-button' disabled={disabled}>Submit your Order</button>

                    </div>
                </form>
        </div>
    )
}
