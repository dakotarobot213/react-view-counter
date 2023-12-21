import { useEffect } from "react";

const ViewCounter = () => {
	if (!sessionStorage.getItem("viewCount")) sessionStorage.setItem("viewCount", "1");

	useEffect(() => {
		return () => {
			sessionStorage.setItem("viewCount", parseInt(sessionStorage.getItem("viewCount")) + 1);
		};
	});

	return (
		<div className='counter'>
			<h1>You've viewed this page {sessionStorage.getItem("viewCount")} times</h1>
		</div>
	);
};

export default ViewCounter;
