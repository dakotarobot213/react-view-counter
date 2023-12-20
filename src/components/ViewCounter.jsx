import { useEffect } from "react";

const ViewCounter = () => {
	if (!sessionStorage.getItem("viewCount")) sessionStorage.setItem("viewCount", "1");

	useEffect(() => {
		return () => {
			sessionStorage.setItem("viewCount", parseInt(sessionStorage.getItem("viewCount")) + 1);
		};
	});

	return (
		<>
			<h1>Render Count: {sessionStorage.getItem("viewCount")}</h1>
		</>
	);
};

export default ViewCounter;
