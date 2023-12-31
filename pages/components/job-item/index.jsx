import { useApp } from "../../../context/AppContext";
import { classNames } from "../../../utils";
import { v4 as uuidv4 } from "uuid";

import Image from "next/image";

const JobItem = ({
	company,
	logo,
	isNew,
	featured,
	position,
	role,
	level,
	postedAt,
	contract,
	location,
	languages,
	tools,
}) => {
	const { filters, setFilters } = useApp();

	const handleRoleFilter = (role) => setFilters({ ...filters, role });

	const handleLevelFilter = (level) => setFilters({ ...filters, level });

	const handleAddToolToFilters = (tool) => {
		if (!filters.tools.some((existingTool) => existingTool.name === tool.name)) {
			const newTools = [...filters.tools, tool];
			setFilters({ ...filters, tools: newTools });
		}
	};

	return (
		<div
			className={classNames(
				"w-[95%] lg:w-[90%] xl:w-[80%]",
				"flex flex-col lg:flex-row lg:gap-4",
				"lg:items-center justify-between p-6 pt-20 lg:p-10",
				"rounded-lg border-l-[6px] border-transparent",
				featured && "!border-primary-desaturated-dark-cyan",
				"bg-white shadow-md shadow-neutral-light-light-grayish-cyan-filter"
			)}
		>
			<div className="relative flex gap-8 pb-4 lg:pb-0 border-b border-neutral-dark-grayish-cyan lg:border-none">
				<div className="absolute -top-[110px] lg:static">
					<Image src={logo} alt={company} className="rounded-full aspect-square" height={90} width={90} />
				</div>

				<div className="flex flex-col gap-4  lg:gap-1">
					<div className="flex items-center gap-4">
						<h1 className="text-xl font-bold text-primary-desaturated-dark-cyan">{company}</h1>

						<div className="flex leading-none gap-2 text-white">
							{isNew && (
								<span className="pt-2 py-1 px-3 rounded-full bg-primary-desaturated-dark-cyan">
									NEW!
								</span>
							)}

							{featured && (
								<span className="pt-2 py-1 px-3 rounded-full bg-neutral-very-dark-grayish-cyan">
									FEATURED
								</span>
							)}
						</div>
					</div>

					<h2 className="text-[24px] font-bold text-neutral-very-dark-grayish-cyan">{position}</h2>

					<div className="flex gap-4 text-lg text-neutral-dark-grayish-cyan">
						<span>{postedAt}</span>|<span>{contract}</span>|<span>{location}</span>
					</div>
				</div>
			</div>
			<div className="flex flex-wrap gap-4 pt-4 lg:pt-0 lg:justify-end">
				<button
					className={classNames(
						"flex items-center p-2 rounded-md duration-200",
						"leading-none font-bold text-primary-desaturated-dark-cyan",
						"shadow-sm shadow-neutral-dark-grayish-cyan",
						"bg-neutral-light-grayish-cyan-bg",
						"hover:text-white hover:bg-primary-desaturated-dark-cyan"
					)}
					onClick={() => handleRoleFilter({ name: role, id: uuidv4(), type: "role" })}
				>
					{role}
				</button>

				<button
					className={classNames(
						"flex items-center p-2 rounded-md duration-200",
						"leading-none font-bold text-primary-desaturated-dark-cyan",
						"shadow-sm shadow-neutral-dark-grayish-cyan",
						"bg-neutral-light-grayish-cyan-bg",
						"hover:text-white hover:bg-primary-desaturated-dark-cyan"
					)}
					onClick={() => handleLevelFilter({ name: level, id: uuidv4(), type: "level" })}
				>
					{level}
				</button>

				{[...(Array.isArray(languages) ? languages : []), ...(Array.isArray(tools) ? tools : [])].map(
					(tool, index) => (
						<button
							key={index}
							className={classNames(
								"flex items-center p-2 rounded-md duration-200",
								"leading-none font-bold text-primary-desaturated-dark-cyan",
								"shadow-sm shadow-neutral-dark-grayish-cyan",
								"bg-neutral-light-grayish-cyan-bg",
								"hover:text-white hover:bg-primary-desaturated-dark-cyan"
							)}
							onClick={() => handleAddToolToFilters({ name: tool, id: uuidv4(), type: "tools" })}
						>
							{tool}
						</button>
					)
				)}
			</div>
		</div>
	);
};

export default JobItem;
