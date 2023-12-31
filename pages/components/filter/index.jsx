import { useCallback } from "react";
import { useApp } from "../../../context/AppContext";
import { classNames } from "../../../utils";

import RemoveIcon from "../icons/RemoveIcon";

const Filter = ({ tools }) => {
	const { setFilters } = useApp();

	const handleRemoveFilter = useCallback(
		(filter) => {
			setFilters((prevFilters) => {
				if (filter.type === "role") {
					return { ...prevFilters, role: null };
				} else if (filter.type === "level") {
					return { ...prevFilters, level: null };
				} else {
					const newTools = prevFilters.tools.filter((tool) => tool.id !== filter.id);
					return { ...prevFilters, tools: newTools };
				}
			});
		},
		[setFilters]
	);

	const handleClearFilters = () => {
		setFilters({
			role: null,
			level: null,
			tools: [],
		});
	};

	return (
		<div className="relative -top-[40px] sm:-top-10 flex justify-center">
			<div
				className={classNames(
					"w-[95%] lg:w-[90%] xl:w-[80%]",
					"flex items-center justify-between gap-3 p-4 rounded-xl bg-white",
					"shadow-md shadow-neutral-light-light-grayish-cyan-filter"
				)}
			>
				<div className="flex flex-wrap gap-4">
					{tools &&
						tools.map(({ name, id, type }, index) => (
							<div
								key={index}
								className="flex rounded-md overflow-hidden cursor-pointer shadow-sm shadow-neutral-dark-grayish-cyan"
							>
								<span
									className={classNames(
										"flex items-center px-2",
										"bg-neutral-light-grayish-cyan-filter",
										"font-bold text-primary-desaturated-dark-cyan"
									)}
								>
									{name}
								</span>
								<button
									onClick={() => handleRemoveFilter({ id, type })}
									className={classNames(
										"p-2 duration-200",
										"bg-primary-desaturated-dark-cyan hover:bg-neutral-very-dark-grayish-cyan"
									)}
								>
									<RemoveIcon />
								</button>
							</div>
						))}
				</div>

				<button
					onClick={handleClearFilters}
					className={classNames(
						"p-1 px-3 rounded-sm hover:underline",
						"text-lg font-bold text-primary-desaturated-dark-cyan"
					)}
				>
					Clear
				</button>
			</div>
		</div>
	);
};

export default Filter;
