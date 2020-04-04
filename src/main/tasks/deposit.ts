import upgrade from './upgrade'

const deposite = (creep: Creep) => {
	let unfilledStructure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
		filter: s =>
			(s.structureType == STRUCTURE_EXTENSION ||
				s.structureType == STRUCTURE_SPAWN ||
				s.structureType == STRUCTURE_TOWER) &&
			s.energy < s.energyCapacity,
	});

	if ( unfilledStructure ){
		if (!creep.pos.isNearTo(unfilledStructure)) {
			creep.moveTo(unfilledStructure, {
				visualizePathStyle: {
					stroke: '#ffffff',
				},
			});
		}
		creep.transfer(unfilledStructure, RESOURCE_ENERGY);
	} else{
		upgrade(creep);
	}

	// finish condition
	if ( creep.carry.energy === 0)
		creep.memory.task = 'none';

}

export default deposite;