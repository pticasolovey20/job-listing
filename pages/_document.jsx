import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
	return (
		<Html lang="en">
			<Head />
			<title>Job Listing Master</title>
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
			<link
				href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@500;700&display=swap"
				rel="stylesheet"
			/>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;
