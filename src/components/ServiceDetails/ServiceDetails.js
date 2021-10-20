import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const ServiceDetails = () => {
	const { serviceId } = useParams();
	const [services, setServices] = useState([]);

	const singleService = [];

	for (const service of services) {
		// console.log(service.id)
		if (service.id === serviceId) {
			singleService.push(service);
		}
	}

	useEffect(() => {
		fetch("https://coders-sohan.github.io/medilifedata-json/medilifedata.json")
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, [services]);
	console.log(services);

	return (
		<div className="container">
			<div className="">
				<img src={singleService[0]?.img} alt="" />

				<h2>{singleService[0]?.name}</h2>
				<p>{singleService[0]?.longDescription}</p>
			</div>
		</div>
	);
};

export default ServiceDetails;
