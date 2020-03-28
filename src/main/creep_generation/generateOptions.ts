const generateOptions = (originRoomName: string, role: string) => {
	return {
		memory: { originRoomName: originRoomName, role, working: false },
	};
};

export default generateOptions;
