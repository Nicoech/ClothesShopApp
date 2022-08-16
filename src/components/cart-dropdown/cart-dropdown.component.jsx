import './cart-dropdown.styles.scss';
import Button from '../button/button.component';

const CartDropDown = () =>
{
    return (
        <div className='cart-dropdown-container'>
            <div className='card-items' />
            <Button buttonType='inverted'> GO TO CHECKOUT </Button>
        </div>
    )

}

export default CartDropDown;