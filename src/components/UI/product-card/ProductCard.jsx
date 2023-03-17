import React from "react";

import "../../../styles/product-card.css";

import { Link } from "react-router-dom";



const ProductCard = (props) => {
  const { id, title,slug, image01, price } = props.item;
//   const dispatch = useDispatch();

//   const addToCart = () => {
//     dispatch(
//       cartActions.addItem({
//         id,
//         title,
//         image01,
//         price,
//       })
//     );
//   };

  return (
    <div className="product__item">
      <div className="product__img">
      <Link to={`/foods/${slug}`}><img src={image01} alt="product-img" className="w-50" /></Link>
      </div>

      <div className="product__content">
        <h5>
          <Link to={`/foods/${title.toLowerCase().replace(/ /g, "-")}`}>{title}</Link>
        </h5>
        <div className=" d-flex align-items-center justify-content-between ">
          <span className="product__price">${price}</span>
          <button className="addTOCart__btn" >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;