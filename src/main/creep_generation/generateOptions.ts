const generateOptions = (originRoomName: string, role: string) => {
	return {
		memory: { originRoomName: originRoomName, role, working: false, task: 'none' },
	};
};

export default generateOptions;
