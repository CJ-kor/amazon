export const initialState = {
	basket: [],
	user: null,
};

//Selector
export const getBasketTotal = (basket) =>
	basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
	console.log(action);
	// Action -> type, [payload]

	switch (action.type) {
		case "ADD_TO_BASKET":
			return {
				...state,
				basket: [...state.basket, action.item],
			};

		case "REMOVE_FROM_BASKET":
			const index = state.basket.findIndex(
				(basketItem) => basketItem.id === action.id
			);

			let newBasket = [...state.basket];
			newBasket.splice(index, 1);

			return {
				...state,
				basket: newBasket,
				// basket: state.basket.filter((item) => item.id !== action.id),
				// -> 같은 아이디 여러개 장바구니에 있으면 전부 지워짐
			};

		case "SET_USER":
			return {
				...state,
				user: action.user,
			};

		default:
			return state;
	}
};

export default reducer;
