import React, { FC, createContext, useContext, useState } from "react";
import { IAppContext, IFilters, WithChild } from "../types";

const AppContext = createContext<IAppContext | undefined>(undefined);

export const AppContextProvider: FC<WithChild> = ({ children }: WithChild): JSX.Element => {
	const [filters, setFilters] = useState<IFilters>({
		role: { name: "", id: "", type: "" },
		level: { name: "", id: "", type: "" },
		tools: [],
	});

	const { role, level, tools } = filters;
	const filterValues = [role, level, ...tools].filter((value) => value !== null);

	return <AppContext.Provider value={{ filters, setFilters, filterValues }}>{children}</AppContext.Provider>;
};

export const useApp = (): IAppContext => {
	const context = useContext(AppContext);
	if (!context) throw new Error("useApp must be used within an AppContextProvider");
	return context;
};
