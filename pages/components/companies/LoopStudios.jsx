import React from "react";

const LoopStudios = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="88" height="88">
			<defs>
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
				<use fill="#8D1558" xlinkHref="#a" />
				<use fill="#000" filter="url(#b)" xlinkHref="#a" />
				<path
					fill="#FFF"
					fillRule="nonzero"
					d="M14.411 43.854c.78 0 1.411-.635 1.411-1.42V31.42c0-.784-.631-1.419-1.41-1.419-.78 0-1.412.635-1.412 1.419v11.016c0 .784.631 1.419 1.411 1.419zm8.12.112c3.102 0 5.404-2.334 5.404-5.21v-.037c0-2.875-2.284-5.172-5.366-5.172-3.1 0-5.403 2.334-5.403 5.21v.037c0 2.875 2.284 5.172 5.366 5.172zm.038-2.446c-1.56 0-2.618-1.288-2.618-2.763v-.038c0-1.475.965-2.726 2.58-2.726 1.56 0 2.619 1.289 2.619 2.764v.037c0 1.475-.966 2.726-2.581 2.726zm11.463 2.446c3.1 0 5.403-2.334 5.403-5.21v-.037c0-2.875-2.284-5.172-5.366-5.172-3.1 0-5.403 2.334-5.403 5.21v.037c0 2.875 2.284 5.172 5.366 5.172zm.037-2.446c-1.56 0-2.618-1.288-2.618-2.763v-.038c0-1.475.965-2.726 2.58-2.726 1.56 0 2.619 1.289 2.619 2.764v.037c0 1.475-.966 2.726-2.581 2.726zm7.99 5.321c.78 0 1.412-.635 1.412-1.419v-2.987c.668.803 1.597 1.493 3.1 1.493 2.359 0 4.531-1.83 4.531-5.171v-.038c0-3.342-2.21-5.172-4.53-5.172-1.467 0-2.414.691-3.101 1.625v-.13c0-.785-.631-1.42-1.411-1.42s-1.411.635-1.411 1.42v10.38c0 .784.63 1.42 1.41 1.42zm3.788-5.321c-1.318 0-2.413-1.102-2.413-2.763v-.038c0-1.661 1.095-2.763 2.413-2.763 1.319 0 2.433 1.102 2.433 2.763v.038c0 1.68-1.114 2.763-2.433 2.763zM17.29 57.963c2.154 0 3.806-1.009 3.806-3.23v-.038c0-1.83-1.615-2.502-3.007-2.968-1.077-.374-2.024-.635-2.024-1.195v-.038c0-.392.352-.69 1.04-.69.594 0 1.355.242 2.153.634.186.094.316.131.52.131.631 0 1.133-.485 1.133-1.12 0-.486-.26-.86-.669-1.064-.965-.486-2.042-.766-3.082-.766-2.005 0-3.64 1.139-3.64 3.174v.037c0 1.942 1.58 2.596 2.972 3.006 1.095.336 2.06.542 2.06 1.158v.037c0 .448-.37.747-1.188.747-.798 0-1.745-.299-2.692-.896a1.078 1.078 0 00-.557-.15c-.631 0-1.114.486-1.114 1.12 0 .449.241.785.538.972a6.908 6.908 0 003.751 1.139zm8.177-.019c.612 0 1.095-.075 1.615-.28.39-.15.724-.56.724-1.064a1.18 1.18 0 00-1.17-1.177c-.055 0-.241.02-.334.02-.631 0-.91-.318-.91-.972v-4.275h1.244c.669 0 1.207-.542 1.207-1.214 0-.672-.538-1.214-1.207-1.214h-1.244v-1.25c0-.785-.631-1.42-1.41-1.42-.78 0-1.412.635-1.412 1.42v1.25h-.093c-.668 0-1.207.542-1.207 1.214 0 .672.539 1.214 1.207 1.214h.093v4.742c0 2.315 1.17 3.006 2.897 3.006zm6.82.019c1.43 0 2.266-.766 2.916-1.606v.112c0 .784.63 1.419 1.41 1.419.78 0 1.412-.635 1.412-1.419v-7.394c0-.784-.631-1.419-1.411-1.419s-1.411.635-1.411 1.42v4.275c0 1.344-.687 2.035-1.764 2.035s-1.709-.69-1.709-2.035v-4.276c0-.784-.63-1.419-1.41-1.419-.78 0-1.412.635-1.412 1.42v5.171c0 2.297 1.244 3.716 3.38 3.716zm11.519 0c1.467 0 2.414-.691 3.1-1.625v.131c0 .784.632 1.419 1.412 1.419.78 0 1.411-.635 1.411-1.419V45.453c0-.784-.631-1.419-1.411-1.419s-1.411.635-1.411 1.42v3.621c-.669-.802-1.597-1.493-3.101-1.493-2.358 0-4.53 1.83-4.53 5.172v.037c0 3.342 2.21 5.172 4.53 5.172zm.724-2.409c-1.318 0-2.432-1.101-2.432-2.763v-.037c0-1.68 1.114-2.764 2.432-2.764 1.318 0 2.414 1.102 2.414 2.764v.037c0 1.662-1.096 2.763-2.414 2.763zm8.437-8.794c.89 0 1.578-.523 1.578-1.344v-.037c0-.822-.687-1.326-1.578-1.326-.892 0-1.579.504-1.579 1.326v.037c0 .821.687 1.344 1.579 1.344zm0 11.128c.78 0 1.41-.635 1.41-1.419v-7.394c0-.784-.63-1.419-1.41-1.419-.78 0-1.412.635-1.412 1.42v7.393c0 .784.632 1.419 1.412 1.419zm8.12.112c3.101 0 5.403-2.334 5.403-5.21v-.036c0-2.876-2.283-5.172-5.366-5.172-3.1 0-5.403 2.334-5.403 5.209v.037c0 2.875 2.284 5.172 5.366 5.172zm.037-2.446c-1.56 0-2.618-1.288-2.618-2.763v-.037c0-1.475.966-2.726 2.581-2.726 1.56 0 2.618 1.288 2.618 2.763v.037c0 1.475-.965 2.726-2.58 2.726zm10.07 2.409c2.154 0 3.807-1.009 3.807-3.23v-.038c0-1.83-1.615-2.502-3.008-2.968-1.077-.374-2.024-.635-2.024-1.195v-.038c0-.392.353-.69 1.04-.69.594 0 1.355.242 2.154.634.185.094.315.131.52.131.631 0 1.132-.485 1.132-1.12 0-.486-.26-.86-.668-1.064-.966-.486-2.043-.766-3.082-.766-2.006 0-3.64 1.139-3.64 3.174v.037c0 1.942 1.579 2.596 2.971 3.006 1.096.336 2.061.542 2.061 1.158v.037c0 .448-.371.747-1.188.747-.799 0-1.745-.299-2.692-.896a1.078 1.078 0 00-.557-.15c-.632 0-1.114.486-1.114 1.12 0 .449.24.785.538.972a6.908 6.908 0 003.75 1.139z"
				/>
			</g>
		</svg>
	);
};

export default LoopStudios;