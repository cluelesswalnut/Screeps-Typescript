const generateBodyParts = (type: string, RCL: number) => {
	switch (RCL) {
		case 1:
			return [WORK, WORK, CARRY, MOVE];
		case 2:
			return [WORK, WORK, WORK, MOVE, MOVE, MOVE, CARRY, CARRY]
		case 3:
			switch (type){
				case 'Miner':
					return [WORK, WORK, WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE, MOVE]
				default:
					return [WORK, WORK, WORK, MOVE, MOVE, MOVE, CARRY, CARRY];
			}
		default:
			throw new Error(`There was an Error generating body parts for a creep.`);
	}
};

export default generateBodyParts;
