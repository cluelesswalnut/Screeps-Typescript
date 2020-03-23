const generateOptions = (originRoomName: string, initialTask: string) => {
	return {
		memory: { originRoomName: originRoomName, task: initialTask, working: false },
	};
};

export default generateOptions;
