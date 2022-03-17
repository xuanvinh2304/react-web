import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { set } from "../redux/product-modal/productModalSlice";
import Button from "./Button";

const ProductCard = ({ product }) => {
  const { img, title, price, slug } = product;
  const dispatch = useDispatch();
  return (
    <div className="product-card">
      <Link to={`/product/${slug}`}>
        <div className="product-card__image">
          <img src={img} alt="" />
        </div>
      </Link>
      <div className="product-card__content">
        <h3 className="product-card__title">
          <Link to={`/product/${slug}`}>{title}</Link>
        </h3>
        <span className="product-card__price">{price}k</span>
        <div className="product-card__btn">
          <Button
            size="sm"
            icon="bx bx-cart"
            animate
            onClick={() => dispatch(set(slug))}
          >
            Thêm vào giỏ hàng
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
