import { useState, useEffect, useRef } from "react";

const ViewCounter = () => {
	const [inputValue, setInputValue] = useState("");
	const count = useRef(-1);

	useEffect(() => {
		count.current = count.current + 1;
	});

	return (
		<>
			<input
				type='text'
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<h1>Render Count: {count.current}</h1>
		</>
	);
};

export default ViewCounter;
