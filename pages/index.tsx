import React, { FC, useCallback } from "react";
import { useApp } from "../context/AppContext";
import { classNames } from "../utils";
import { IData } from "../types";
import axios from "axios";

import Layout from "./components/layout";
import Filter from "./components/filter";
import JobItem from "./components/job-item";

export const getServerSideProps = async () => {
	const BASE_URL = `http://${process.env.NEXT_PUBLIC_APP_URL}/api/data`;

	try {
		const response = await axios.get(BASE_URL);

		return {
			props: {
				data: response.data,
			},
		};
	} catch (error) {
		console.error("An error occured", error);

		return {
			props: {
				data: [],
			},
		};
	}
};

interface IHomeProps {
	data: IData[];
}

const Home: FC<IHomeProps> = ({ data }: IHomeProps): JSX.Element => {
	const { filters, filterValues } = useApp();
	const { role, level, tools } = filters;

	const applyFilters = useCallback(
		(item: IData) => {
			const roleMatches = (roleFilter: string | { name: string } | null) => {
				if (!roleFilter) {
					return true;
				} else if (typeof roleFilter === "object" && roleFilter.name) {
					return item.role === roleFilter.name;
				}

				return false;
			};

			const levelMatches = (levelFilter: string | { name: string } | null) => {
				if (!levelFilter) {
					return true;
				} else if (typeof levelFilter === "object" && levelFilter.name) {
					return item.level === levelFilter.name;
				}

				return false;
			};

			const toolsMatches = (toolFilters: { name: string }[] | string[]) => {
				if (!toolFilters || !toolFilters.length) return true;

				return toolFilters.every((toolFilter) => {
					if (typeof toolFilter === "object" && toolFilter.name) {
						return item.languages.includes(toolFilter.name) || item.tools.includes(toolFilter.name);
					}

					return false;
				});
			};

			return roleMatches(role) && levelMatches(level) && toolsMatches(tools);
		},
		[role, level, tools]
	);

	const filteredData = data.filter(applyFilters);

	return (
		<Layout>
			{filterValues.length > 0 && <Filter tools={filterValues} />}
			<div
				className={classNames(
					"py-6 pb-24 w-full",
					filterValues.length > 0 && "pt-16",
					"flex flex-1 flex-col items-center gap-16 lg:gap-8",
					"shadow-md shadow-neutral-light-light-grayish-cyan-filter"
				)}
			>
				{data && filteredData.map((job) => <JobItem key={job.id} {...job} />)}
			</div>
		</Layout>
	);
};

export default Home;
