import React, { FC, PropsWithChildren } from "react";
import { MDBSpinner } from "mdb-react-ui-kit";

const LoadingScreen: FC<PropsWithChildren> = () => {
	return (
		<div className="row h-100 align-middle justify-content-center mx-auto">
			<MDBSpinner className="align-self-center" color="light">
				<span className="visually-hidden">Loading...</span>
			</MDBSpinner>
		</div>
	);
};

export default LoadingScreen;
