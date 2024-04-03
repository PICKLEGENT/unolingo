import { auth } from '@clerk/nextjs';

const adminIds = ['USER_ID'];

export const isAdmin = () => {
	const { userId } = auth();

	if (!userId) return false;

	return adminIds.indexOf(userId) !== -1;
};
