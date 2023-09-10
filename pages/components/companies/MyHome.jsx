import React from "react";

const MyHome = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="88" height="88">
			<defs>
				<linearGradient id="c" x1="100%" x2="0%" y1="0%" y2="100%">
					<stop offset="0%" stopColor="#FFF" />
					<stop offset="100%" stopColor="#FFF" stopOpacity="0" />
				</linearGradient>
				<filter id="b" width="139.8%" height="139.8%" x="-19.9%" y="-19.9%" filterUnits="objectBoundingBox">
					<feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation="17.5" />
					<feOffset in="shadowBlurInner1" result="shadowOffsetInner1" />
					<feComposite
						in="shadowOffsetInner1"
						in2="SourceAlpha"
						k2="-1"
						k3="1"
						operator="arithmetic"
						result="shadowInnerInner1"
					/>
					<feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0452633304 0" />
				</filter>
				<circle id="a" cx="44" cy="44" r="44" />
			</defs>
			<g fill="none" fillRule="evenodd">
				<use fill="#68A4A4" xlinkHref="#a" />
				<use fill="#000" filter="url(#b)" xlinkHref="#a" />
				<circle cx="45" cy="44" r="24" fill="url(#c)" opacity=".25" transform="matrix(-1 0 0 1 90 0)" />
				<path
					fill="#FFF"
					fillRule="nonzero"
					d="M9.383 46.89v-3.35l1.682 2.62h.206l1.682-2.62v3.35h1.382V41.1h-1.382l-1.785 2.72-1.785-2.72H8v5.79h1.383zm15.683 0v-1.95l2.147-3.84h-1.476l-1.362 2.51-1.352-2.51h-1.475l2.146 3.84v1.95h1.372zm10.742 0v-2.01h2.198v2.01h1.382V41.1h-1.382v2.56h-2.198V41.1h-1.383v5.79h1.383zm14.311.11c1.775 0 3.189-1.35 3.189-3 0-1.66-1.414-3-3.189-3-1.775 0-3.188 1.34-3.188 3 0 1.65 1.413 3 3.188 3zm0-1.23c-.98 0-1.754-.81-1.754-1.77a1.753 1.753 0 113.508 0c0 .96-.774 1.77-1.754 1.77zm12.114 1.12v-3.35l1.682 2.62h.206l1.682-2.62v3.35h1.383V41.1h-1.383l-1.785 2.72-1.785-2.72H60.85v5.79h1.383zm16.767 0v-1.23h-2.786v-1h2.57v-1.23h-2.57v-1.1H79V41.1h-4.169v5.79H79z"
				/>
			</g>
		</svg>
	);
};

export default MyHome;
