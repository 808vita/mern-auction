import React from "react";
import { useNavigate } from "react-router-dom";

const OptionCard = ({ data }) => {
	const navigate = useNavigate();

	return (
		<div className="col-sm-6 " onClick={() => navigate(data.link)}>
			<div className="row d-flex justify-content-center">
				<div
					className="card outline-button"
					role="button"
					style={{ width: "18rem" }}
				>
					<span
						className={`${data.icon} card-img-top text-center h1 pt-5`}
					></span>
					<div className="card-body text-center">
						<h4>{data.title}</h4>
						<p className="card-text">{data.info}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OptionCard;
