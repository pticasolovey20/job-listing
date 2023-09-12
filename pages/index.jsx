import { data } from "@/constants";
import { classNames } from "@/utils";

import Layout from "./components/layout";
import Filter from "./components/filter";
import JobItem from "./components/job-item";

const Home = () => {
	return (
		<Layout>
			<Filter />
			<div
				className={classNames(
					"py-6 pb-24 w-full",
					"flex flex-col items-center",
					"gap-16 lg:gap-8 shadow-md shadow-neutral-light-light-grayish-cyan-filter"
				)}
			>
				{data.map((job) => (
					<JobItem key={job.id} {...job} />
				))}
			</div>
		</Layout>
	);
};

export default Home;
