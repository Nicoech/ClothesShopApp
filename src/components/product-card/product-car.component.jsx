import Button from "../button/button.component";
import './product-card.styles.scss';
import { CartContext } from "../../context/cart-context";
import { useContext } from "react";

const ProductCard = ({ product }) =>
{
  const { name, imageUrl, price } = product;

  const { addItemToCart } = useContext(CartContext);

  const AddProductToCart = () => addItemToCart(product);

  return (
    <>
      <div className="card-container">
        <img src={imageUrl} alt={`${name}`} />
        <div className="footer">

          <span className="name">{name}</span>
          <span className="price">${price}</span>
        </div>
        <Button onClick={AddProductToCart} buttonType="inverted">Add to cart</Button>
      </div>

    </>

  );
};

export default ProductCard;
