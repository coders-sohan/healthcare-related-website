import React from "react";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
	return (
		<div>
			<div
				id="carouselExampleIndicators"
				className="carousel slide"
				data-bs-ride="carousel"
			>
				<div className="carousel-indicators">
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="0"
						className="active"
						aria-current="true"
						aria-label="Slide 1"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="1"
						aria-label="Slide 2"
					></button>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item carousel-item-1 active">
						<div className="container">
							<div>
								<h5 className="text-general py-2">
									Welcome to our{" "}
									<span className="text-black">Medical Care</span> center
								</h5>
								<h1 className="display-4 fw-bold py-2">
									We care for your health
								</h1>
								<p className="fs-6 py-2">
									Qualified Staff With Expertise in Services <br /> We Offer for
									more Reasonable cost with love, Just explore about More!
								</p>
								<NavLink to="/services" className="btn btn-general py-2">
									Our service
								</NavLink>
							</div>
						</div>
					</div>
					<div className="carousel-item carousel-item-2">
						<div className="container">
							<div className="d-flex">
								<div>
									<h5 className="text-general py-2">
										Welcome to our{" "}
										<span className="text-black">Medical Care</span> center
									</h5>
									<h1 className="display-4 fw-bold py-2">
										We care for your health
									</h1>
									<p className="fs-6 py-2">
										Qualified Staff With Expertise in Services <br /> We Offer
										for more Reasonable cost with love, Just explore about More!
									</p>
									<NavLink to="/services" className="btn btn-general py-2">
										Our service
									</NavLink>
								</div>
							</div>
						</div>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide="prev"
				>
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide="next"
				>
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		</div>
	);
};

export default HeroSection;
