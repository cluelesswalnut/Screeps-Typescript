const generateOptions = (originRoomName: string) => {
	return {
		memory: { originRoomName: originRoomName, task: `none`, working: false },
		dryRun: true,
		directions: [BOTTOM_LEFT],
	};
};

export default generateOptions;
