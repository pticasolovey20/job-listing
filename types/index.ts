import { ReactNode } from "react";

export interface IFilters {
	role: { name: string; id: string; type: string };
	level: { name: string; id: string; type: string };
	tools: { name: string; id: string; type: string }[];
}

export interface IAppContext {
	filters: IFilters;
	setFilters: React.Dispatch<React.SetStateAction<IFilters>>;
	filterValues: { name: string; id: string; type: string }[];
}

export interface WithChild {
	children: ReactNode;
}

export interface IData {
	id: number;
	company: string;
	logo: string;
	isNew: boolean;
	featured: boolean;
	position: string;
	role: string;
	level: string;
	postedAt: string;
	contract: string;
	location: string;
	languages: string[];
	tools: string[];
}
