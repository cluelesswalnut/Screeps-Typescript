const generateBodyParts = (type: string) => {
	switch (type) {
		case `Harvester`:
			return [WORK, WORK, CARRY, MOVE];
		case `Upgrader`:
			return [WORK, CARRY, CARRY, MOVE, MOVE];
		default:
			console.log(`There was an Error generating body parts for a creep.`);
			throw Error;
	}
};

export default generateBodyParts;
