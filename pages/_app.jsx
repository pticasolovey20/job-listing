import { AppContextProvider } from "@/context/AppContext";
import "@/styles/globals.scss";

const App = ({ Component, pageProps }) => {
	return (
		<AppContextProvider>
			<Component {...pageProps} />
		</AppContextProvider>
	);
};

export default App;
