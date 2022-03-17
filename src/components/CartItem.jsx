import React, { useState } from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { numberWithCommas } from "../utils";
import { Button } from ".";
import { useDispatch } from "react-redux";
import { removeItem, updateItem } from "../redux/cart/cartItemsSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(0);
  const [size, setSize] = useState("");

  useEffect(() => {
    setProduct(item.product);
    setQuantity(item.quantity);
    setSize(item.size);
  }, [item]);

  const removeCartItem = () => {
    dispatch(removeItem(item));
  };

  return (
    <div className="cart__item">
      <div className="cart__item__image">
        <img src={product.img} alt="" />
      </div>
      <div className="cart__item__info">
        <div className="cart__item__info__name">
          <Link to={`/product/${product.slug}`}>
            {`${product.title} - ${size}`}
          </Link>
        </div>
        <div className="cart__item__info__price">
          {numberWithCommas(Number(product.price))}
        </div>
        <div className="cart__item__info__quantity">
          <div className="product__content__quantity">
            <div className="product__content__quantity__btn">
              <Button
                onClick={() =>
                  dispatch(
                    updateItem({
                      ...item,
                      quantity: quantity - 1 === 0 ? 1 : quantity - 1,
                    })
                  )
                }
              >
                <i className="bx bx-minus"></i>
              </Button>
            </div>
            <div className="product__content__quantity__input">
              <input type="number" value={quantity} />
            </div>
            <div className="product__content__quantity__btn">
              <Button
                onClick={() =>
                  dispatch(
                    updateItem({
                      ...item,
                      quantity: quantity + 1,
                    })
                  )
                }
              >
                <i className="bx bx-plus"></i>
              </Button>
            </div>
          </div>
        </div>
        <div className="cart__item__info__del">
          <i className="bx bx-trash" onClick={() => removeCartItem()}></i>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object,
};

export default CartItem;
