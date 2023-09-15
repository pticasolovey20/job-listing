import React, { FC } from "react";
import { AppProps } from "next/app";
import { AppContextProvider } from "../context/AppContext";
import "../styles/globals.scss";

const App: FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
	return (
		<AppContextProvider>
			<Component {...pageProps} />
		</AppContextProvider>
	);
};

export default App;
