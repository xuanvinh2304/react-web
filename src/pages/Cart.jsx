import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartItemsDetail } from "../assets/data/products";
import { Button, Head } from "../components";
import CartItem from "../components/CartItem";
import { numberWithCommas } from "../utils";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems.value);

  const [cartProducts, setCartProducts] = useState([]);

  const [totalProducts, setTotalProducts] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCartProducts(getCartItemsDetail(cartItems));
    setTotalProducts(
      cartItems.reduce((total, item) => total + Number(item.quantity), 0)
    );
    setTotalPrice(
      cartItems.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
      )
    );
  }, [cartItems]);

  return (
    <Head title="Cart">
      <div className="cart">
        <div className="cart__info">
          <div className="cart__info__txt">
            <p>Bạn đang có {totalProducts} sản phẩm trong giỏ hàng</p>
            <div className="cart__info__txt__price">
              <span>Thành tiền</span>
              <span>{numberWithCommas(totalPrice)}$</span>
            </div>
          </div>
          <div className="cart__info__btn">
            <Button size="block">Đặt hàng</Button>
            <Link to="/products">
              <Button size="block">Tiếp tục mua hàng</Button>
            </Link>
          </div>
        </div>
        <div className="cart__list">
          {cartProducts.map((item, index) => (
            <CartItem item={item} key={index} />
          ))}
        </div>
      </div>
    </Head>
  );
};

export default Cart;
