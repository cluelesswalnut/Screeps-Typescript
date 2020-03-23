const calcHarvestTasksNeeded = (energySpots: number, energySourceDistance: number) => {
	return Math.round((energySpots * energySourceDistance) / 70);
};

const calcUpgradeTasksNeeded = (controllerSpots: number, controllerDistance: number) => {
	return Math.round((controllerSpots * controllerDistance) / 20);
};

const calcTasksNeeded = (roomNeeds: RoomNeeds) => {
	const { energySpots, energySourceDistance, controllerSpots, controllerDistance } = roomNeeds;

	return {
		harvest: calcHarvestTasksNeeded(energySpots, energySourceDistance),
		upgrade: calcUpgradeTasksNeeded(controllerSpots, controllerDistance),
	};
};

export default calcTasksNeeded;
