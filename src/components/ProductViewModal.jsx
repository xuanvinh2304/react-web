import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, ProductView } from ".";
import { getProductBySlug } from "../assets/data/products";
import { remove } from "../redux/product-modal/productModalSlice";

const ProductViewModal = () => {
  const productSlug = useSelector((state) => state.productModal.value);

  const dispatch = useDispatch();

  const [product, setProduct] = useState(undefined);

  useEffect(() => {
    if (productSlug) {
      setProduct(getProductBySlug(productSlug));
    } else {
      setProduct(undefined);
    }
  }, [productSlug]);

  return (
    <div className={`product__modal ${product === undefined ? "" : "active"}`}>
      <div className="product__modal__content">
        <ProductView product={product} />
        <div className="product__modal__content__close">
          <Button size="sm" onClick={() => dispatch(remove())}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductViewModal;
