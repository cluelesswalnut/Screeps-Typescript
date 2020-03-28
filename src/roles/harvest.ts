const harvest = (creep: Creep) => {
	// Variables
	const working = creep.memory.working;
	let source = creep.pos.findClosestByPath(FIND_SOURCES);
	let unfilledStructure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
		filter: s =>
			(s.structureType == STRUCTURE_EXTENSION ||
				s.structureType == STRUCTURE_SPAWN ||
				s.structureType == STRUCTURE_TOWER) &&
			s.energy < s.energyCapacity,
	});
	// State Switching & Say Action
	if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
		creep.memory.working = true;
		creep.say('\u{1f69A}'); // truck emojii unicode
	}
	if (creep.memory.working == true && creep.carry.energy == 0) {
		creep.memory.working = false;
		creep.say('\u{26CF}'); // pick emojii unicode
	}
	// State 1: Creep does not working, not at source -> Move to closest one
	if (!working && source && !creep.pos.isNearTo(source)) {
		creep.moveTo(source, {
			visualizePathStyle: {
				stroke: '#ffffff',
			},
		});
		return;
	}
	// State 2: Creep does not working, is at source -> Harvest it
	if (!working && source && creep.pos.isNearTo(source)) {
		creep.harvest(source);
		return;
	}
	// State 3: Creep does working, is not at unfilled structure -> Move to unfilled structure
	if (working && unfilledStructure && !creep.pos.isNearTo(unfilledStructure)) {
		creep.moveTo(unfilledStructure, {
			visualizePathStyle: {
				stroke: '#ffaa00',
			},
		});
		return;
	}
	// State 4: Creep does working, is at unfilled structure -> Transfer energy to unfilled structure
	if (working && unfilledStructure && creep.pos.isNearTo(unfilledStructure)) {
		creep.transfer(unfilledStructure, RESOURCE_ENERGY);
		return;
	}
};

export default harvest;
