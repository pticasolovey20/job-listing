import { data } from "@/constants";
import Layout from "./components/layout";
import JobItem from "./components/job-item";

const Home = () => {
	return (
		<Layout>
			<div className="py-16 pb-24 w-full flex flex-col items-center gap-16 lg:gap-8">
				{data.map((job) => (
					<JobItem key={job.id} {...job} />
				))}
			</div>
		</Layout>
	);
};

export default Home;
