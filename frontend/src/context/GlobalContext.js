import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
	const [notification, setNotification] = useState({ msg: "Welcome" });

	return (
		<GlobalContext.Provider
			value={{
				notification,
				setNotification,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalContextProvider;
