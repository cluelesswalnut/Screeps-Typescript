const generateBodyParts = (type: string) => {
	switch (type) {
		case `Harvester`:
			return [WORK, WORK, CARRY, MOVE];
		case `Upgrader`:
			return [WORK, CARRY, CARRY, MOVE, MOVE];
		case 'Miner':
			return [WORK, WORK, WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE, MOVE]
		default:
			throw new Error(`There was an Error generating body parts for a creep.`);
	}
};

export default generateBodyParts;
