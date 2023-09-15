import { createContext, useContext, useState } from "react";

const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
	const [filters, setFilters] = useState({
		role: null,
		level: null,
		tools: [],
	});

	const { role, level, tools } = filters;
	const filterValues = [role, level, ...tools].filter((value) => value !== null);

	return <AppContext.Provider value={{ filters, setFilters, filterValues }}>{children}</AppContext.Provider>;
};

export const useApp = () => useContext(AppContext);
