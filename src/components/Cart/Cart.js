import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // console.log(props);
    const { cart } = props;
    // console.log(props.writer.name);
    let totalAdded = 0;
    let totalSalary = 0;
    const addedOne = [];
    for (const writer of cart) {
        if (!writer.quantity) {
            writer.quantity = 1;
        }
        totalSalary = totalSalary + writer.salary;
        totalAdded = totalAdded + writer.quantity;
        // addedOne = addedOne + writer.name;
        addedOne.push(writer.name);
    }

    return (
        <div className="cart">
            <h2>Total Added: {totalAdded}</h2>
            <p>Total Salary: {totalSalary}</p>
            <div>
                <h3>{addedOne}<br /></h3>
            </div>
        </div>
    );
};

export default Cart;