const calcHarvestTasksNeeded = (energySpots: number, energySourceDistance: number) => {
	return Math.round((energySpots * energySourceDistance) / 70);
};

const calcUpgradeTasksNeeded = (controllerSpots: number, controllerDistance: number) => {
	return Math.round((controllerSpots * controllerDistance) / 20);
};

interface RoomNeeds {
	energySources: number;
	energySpots: number;
	energySourceDistance: number;
	controllerSpots: number;
	controllerDistance: number;
	availableEnergy: number;
}

const calcTasksNeeded = (roomNeeds: RoomNeeds) => {
	const { energySpots, energySourceDistance, controllerSpots, controllerDistance } = roomNeeds;

	return {
		harvest: calcHarvestTasksNeeded(energySpots, energySourceDistance),
		upgrade: calcUpgradeTasksNeeded(controllerSpots, controllerDistance),
	};
};

export default calcTasksNeeded;
