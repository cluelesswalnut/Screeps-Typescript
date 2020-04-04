const upgrade = (creep: Creep) => {
	let controller = creep.room.controller;
	if ( controller ){
		if (!creep.pos.isNearTo(controller)) {
			creep.moveTo(controller, {
				visualizePathStyle: {
					stroke: '#ffffff',
				},
			});
		}
		creep.upgradeController(controller);
	}

	// finish condition
	if ( creep.carry.energy === 0)
		creep.memory.task = 'none';

}

export default upgrade;