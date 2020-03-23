const calcRoomNeeds = (roomName: string) => {
	// TODO: actually calculate below values dynamically
	return {
		energySources: 2,
		energySpots: 7,
		energySourceDistance: 30,
		controllerSpots: 8,
		controllerDistance: 10,
		availableEnergy: 300,
	};
};

export default calcRoomNeeds;
