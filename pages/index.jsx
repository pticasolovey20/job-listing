import axios from "axios";
import { classNames } from "@/utils";

import Layout from "./components/layout";
import Filter from "./components/filter";
import JobItem from "./components/job-item";

export const getServerSideProps = async () => {
	const BASE_URL = `${process.env.NEXT_PUBLIC_APP_URL}/api/data`;

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

const Home = ({ data }) => {
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
				{data && data.map((job) => <JobItem key={job.id} {...job} />)}
			</div>
		</Layout>
	);
};

export default Home;
