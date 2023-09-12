import Header from "../header";

const Layout = ({ children }) => {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main className="flex flex-1 bg-neutral-light-grayish-cyan-bg">{children}</main>
		</div>
	);
};

export default Layout;
