import React, { useContext } from 'react';
import { AuthContext } from '../Authprovider';

const CartEquip = () => {
    const { cartItems, removeFromCart } = useContext(AuthContext);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">My Equipments</h1>
            {cartItems.length === 0 ? (
                <p>No items in the cart.</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item._id} className="border p-4 mb-2">
                            <h2 className="font-bold">{item.item_name}</h2>
                            <p>Category: {item.cat_name}</p>
                            <p>Price: {item.price} BDT</p>
                            <button
                                onClick={() => removeFromCart(item._id)}
                                className="btn btn-outline btn-error">
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CartEquip;
