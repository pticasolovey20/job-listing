import { FC } from "react";
import { WithChild } from "../../../types";

import Header from "../header";

const Layout: FC<WithChild> = ({ children }: WithChild): JSX.Element => {
	return (
		<div className="relative min-h-screen flex flex-col">
			<Header />
			<main className="flex flex-1 flex-col bg-neutral-light-grayish-cyan-bg">{children}</main>
		</div>
	);
};

export default Layout;
