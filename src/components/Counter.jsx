import { useState } from "react";
import React from "react";


export default function Counter() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1>{count}</h1>
			<button onClick={() => setCount(count + 1)}>increment</button>
			<button onClick={() => setCount(count - 1)}>dicrement</button>
		</>
	)
}

