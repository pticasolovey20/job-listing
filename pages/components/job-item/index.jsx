import Image from "next/image";
import { classNames } from "@/utils";

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
						<span>{postedAt}</span>
						<span>{contract}</span>
						<span>{location}</span>
					</div>
				</div>
			</div>
			<div className="flex flex-wrap gap-4 pt-4 lg:pt-0 lg:justify-end">
				{[role, level, ...languages, ...tools].map((tool, index) => (
					<span
						key={index}
						className="p-2 px-3 rounded-sm text-lg font-bold text-primary-desaturated-dark-cyan bg-neutral-light-grayish-cyan-bg cursor-pointer"
					>
						{tool}
					</span>
				))}
			</div>
		</div>
	);
};

export default JobItem;
