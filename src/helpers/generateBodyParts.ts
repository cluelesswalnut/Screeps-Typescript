const generateBodyParts = (type: string) => {
	switch (type) {
		case `zerg`:
			return [WORK, WORK, CARRY, MOVE];
		default:
			console.log(`There was an Error generating body parts for a creep.`);
			throw Error;
	}
};

export default generateBodyParts;
