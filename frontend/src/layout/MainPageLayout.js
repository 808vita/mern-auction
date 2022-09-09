import React, { useContext, useEffect } from "react";

const MainPageLayout = ({ children }) => {
	return (
		<div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-center mx-3 border-bottom ">
			<div className="justify-content-center justify-content-md-center my-3 center-page">
				{children}
			</div>
		</div>
	);
};

export default MainPageLayout;
