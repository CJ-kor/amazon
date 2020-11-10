import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ title, image, price, rating, id }) {
	const [{ basket }, dispatch] = useStateValue();
	// console.log("this is the basket >>", basket);

	const addToBasket = () => {
		dispatch({
			type: "ADD_TO_BASKET",
			item: { id, image, price, rating, title },
		});
	};

	return (
		<div className="product">
			<div className="product_info">
				<p>{title}</p>
				<p className="product_price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product_rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p>⭐</p>
						))}
					{/* {Array(rating).fill(<p>🌟</p>)} */}
				</div>
			</div>
			<img src={image} alt="" />
			<button onClick={addToBasket}>Add to Basket</button>
		</div>
	);
}

export default Product;
