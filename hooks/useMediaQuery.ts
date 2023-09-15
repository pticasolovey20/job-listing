import { useState, useEffect } from "react";
import { Interface } from "readline";

// param is the type of query, it can be 'min-width' or 'max-width', [type: string]\

interface MediaQueryResult {
	matches: boolean;
	width: number;
}

export const useMediaQuery = (param: string, value: number): MediaQueryResult => {
	const [matches, setMatches] = useState(false);
	const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);

	useEffect(() => {
		const handleResize = () => setWidth(typeof window !== "undefined" ? window.innerWidth : 0);

		if (typeof window !== "undefined") {
			const mediaQuery = window.matchMedia(`(${param}: ${value}px)`);
			const handleChange = (event: MediaQueryListEvent) => setMatches(event.matches);

			handleResize();
			setMatches(mediaQuery.matches);

			window.addEventListener("resize", handleResize);
			mediaQuery.addEventListener("change", handleChange);

			return () => {
				window.removeEventListener("resize", handleResize);
				mediaQuery.removeEventListener("change", handleChange);
			};
		}
	}, [param, value]);

	return { matches, width };
};
