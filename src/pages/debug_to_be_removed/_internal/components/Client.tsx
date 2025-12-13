import type { FunctionComponent } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import { skeleton } from './Client.css';

export const ClientComponent: FunctionComponent = () => {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		setLoaded(true);
	}, []);

	return loaded ? <Actual /> : <Skeleton />;
};

const Actual: FunctionComponent = () => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCounter((counter) => counter + 1);
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div>
			<p>✅ This is client script behavior in work: {counter}</p>
		</div>
	);
};

const Skeleton: FunctionComponent = () => {
	return (
		<div>
			<p className={skeleton}>Skeleton...... the client component is in load</p>
		</div>
	);
};
