import './cart-checkout.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../context/cart-context';
import Button from '../button/button.component';
import { FaTrashAlt } from 'react-icons/fa'

const CartCheckout = () =>
{


    const { cartItems } = useContext(CartContext);

    return (

        <div className='checkout-container'>
            <table className='checkout-table'>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item, index) =>
                    {
                        const { id, name, price, quantity, imageUrl } = item;
                        return (

                            <tr key={id} index={index}>
                                <td><img src={imageUrl} /></td>
                                <td>{name}</td>
                                <td>X{quantity}</td>
                                <td>${price}</td>
                                <td><Button buttonType='inverted'><FaTrashAlt /></Button></td>
                            </tr>

                        );
                    })}
                </tbody>
            </table>
        </div>


    )
}

export default CartCheckout;
