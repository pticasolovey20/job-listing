import { classNames } from "@/utils";

const Filter = () => {
	const tools = ["HTML", "CSS", "JavaScript", "Python", "Ruby", "React", "Sass", "Django", "Vue", "RoR"];

	return (
		<div className="relative -top-12 flex justify-center">
			<div
				className={classNames(
					"w-[95%] lg:w-[90%] xl:w-[80%]",
					"flex justify-between gap-6 p-6 rounded-md bg-white",
					"shadow-md shadow-neutral-light-light-grayish-cyan-filter"
				)}
			>
				<div className="flex flex-wrap gap-6">
					{tools.slice(0, 3).map((tool, index) => (
						<span
							key={index}
							className={classNames(
								"p-2 px-3 rounded-sm bg-neutral-light-grayish-cyan-bg cursor-pointer",
								"text-lg font-bold text-primary-desaturated-dark-cyan"
							)}
						>
							{tool}
						</span>
					))}
				</div>

				<button
					className={classNames(
						"p-2 px-3 rounded-sm hover:underline",
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
