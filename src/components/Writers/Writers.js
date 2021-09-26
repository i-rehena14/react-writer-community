import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Writer from '../Writer/Writer';
import './Writers.css';

const Writers = () => {
    const [writers, setWriters] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./writers.JSON')
            .then(res => res.json())
            .then(data => setWriters(data))
    }, [])
    const handleAddToCart = (writer) => {
        const newCart = [...cart, writer];
        setCart(newCart);
    }

    return (
        <div className="writers-cart">
            <div className="writer-container">
                {
                    writers.map(writer => <Writer
                        key={writer.name}
                        writer={writer}
                        handleAddToCart={handleAddToCart}
                    ></Writer>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Writers;