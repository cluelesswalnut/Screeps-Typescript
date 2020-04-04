const mine = (creep: Creep) => {
	let source = creep.pos.findClosestByPath(FIND_SOURCES);
	if ( source ){
		if (!creep.pos.isNearTo(source)) {
			creep.moveTo(source, {
				visualizePathStyle: {
					stroke: '#ffffff',
				},
			});
		}
		creep.harvest(source);
	}

	// finish condition
	if ( creep.carry.energy === creep.carryCapacity)
		creep.memory.task = 'none';

}

export default mine;