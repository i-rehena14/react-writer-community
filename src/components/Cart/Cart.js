import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // console.log(props);
    const { cart } = props;

    let totalAdded = 0;
    let totalSalary = 0;
    // let addedOne = '';
    for (const writer of cart) {
        if (!writer.quantity) {
            writer.quantity = 1;
        }
        totalSalary = totalSalary + writer.salary;
        totalAdded = totalAdded + writer.quantity;
        // const addedOne = writer.name;
    }

    return (
        <div>
            <h5>Total Added: {totalAdded}</h5>
            <p>Total Salary: {totalSalary}</p>
            {/* <p>nnn:{addedOne}</p> */}
        </div>
    );
};

export default Cart;