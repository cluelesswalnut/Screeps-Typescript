const calcHarvestRolesNeeded = (energySpots: number, energySourceDistance: number) => {
	return Math.round((energySpots * energySourceDistance) / 50);
};

const calcUpgradeRolesNeeded = (controllerSpots: number, controllerDistance: number) => {
	return Math.round((controllerSpots * controllerDistance) / 20);
};

const calcRolesNeeded = (roomNeeds: RoomNeeds) => {
	const { energySpots, energySourceDistance, controllerSpots, controllerDistance } = roomNeeds;

	return {
		harvest: calcHarvestRolesNeeded(energySpots, energySourceDistance),
		upgrade: calcUpgradeRolesNeeded(controllerSpots, controllerDistance),
	};
};

export default calcRolesNeeded;
