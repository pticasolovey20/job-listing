import React, { FC } from "react";
import { useMediaQuery } from "../../../hooks/useMediaQuery";

import HeaderDesctop from "../background/HeaderDesctop";
import HeaderMobile from "../background/HeaderMobile";

const Header: FC = (): JSX.Element => {
	const { matches: minWidth } = useMediaQuery("min-width", 576);

	return (
		<header className="w-full flex bg-primary-desaturated-dark-cyan">
			{minWidth ? <HeaderDesctop /> : <HeaderMobile />}
		</header>
	);
};

export default Header;
