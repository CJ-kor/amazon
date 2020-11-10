import React, { createContext, useContext, useReducer } from "react";

// prepares the dataLayer
export const StateContext = createContext();

//wrap our app and provide the Date Layer
export const StateProvider = ({ initialState, reducer, children }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>
);

// pull info from the data layer
export const useStateValue = () => useContext(StateContext);
