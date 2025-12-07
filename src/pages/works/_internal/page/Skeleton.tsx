import type { FunctionComponent } from 'preact';

import { skeleton } from './Skeleton.css';

export const Skeleton: FunctionComponent = () => {
	// TODO: Replace with the actual skeleton
	return <p className={skeleton}>Loading...</p>;
};
