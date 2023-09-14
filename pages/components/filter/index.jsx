import { classNames } from "@/utils";

import RemoveIcon from "../icons/RemoveIcon";

const Filter = () => {
	const tools = ["HTML", "CSS", "JavaScript", "Python", "Ruby", "React", "Sass", "Django", "Vue", "RoR"];

	return (
		<div className="relative -top-[60px] sm:-top-10 flex justify-center">
			<div
				className={classNames(
					"w-[95%] lg:w-[90%] xl:w-[80%]",
					"flex items-center justify-between gap-3 p-6 rounded-md bg-white",
					"shadow-md shadow-neutral-light-light-grayish-cyan-filter"
				)}
			>
				<div className="flex flex-wrap gap-4">
					{tools.slice(0, 6).map((tool, index) => (
						<div key={index} className="flex rounded-md overflow-hidden cursor-pointer">
							<span
								className={classNames(
									"flex items-center px-2",
									"bg-neutral-light-grayish-cyan-filter",
									"font-bold text-primary-desaturated-dark-cyan"
								)}
							>
								{tool}
							</span>
							<button
								onClick={() => {}}
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
