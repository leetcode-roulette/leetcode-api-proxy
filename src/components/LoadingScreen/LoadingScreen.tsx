import React, { FC, PropsWithChildren } from "react";
import { MDBSpinner } from "mdb-react-ui-kit";

const LoadingScreen: FC<PropsWithChildren> = () => {
  return (
    <div className="row h-100 py-5">
      <MDBSpinner className="align-self-center mx-auto my-5" color="light">
        <span className='visually-hidden'>Loading...</span>
      </MDBSpinner>
    </div>
  )
}

export default LoadingScreen;
