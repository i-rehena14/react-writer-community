import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Writer.css';

const Writer = (props) => {
    const { name, age, salary, img, writingType, country, email } = props.writer;
    // console.log(age);
    return (
        <div className="writer">
            <img src={img} alt="" />
            <h4>Name: {name}</h4>
            <h5>Age: {age}</h5>
            <h5>Writing Type: {writingType}</h5>
            <p><small>Email: {email}</small></p>
            <h3>Salary: {salary}</h3>
            <h5>Country: {country}</h5>
            <button onClick={() => props.handleAddToCart(props.writer)} className="addToCart-button"><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
        </div>
    );
};

export default Writer;