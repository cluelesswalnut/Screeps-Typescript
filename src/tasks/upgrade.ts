const upgrade = (creep: Creep) => {
	// Variables
	const working = creep.memory.working;
	let filledStructure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
		filter: s => (s.structureType == STRUCTURE_SPAWN || s.structureType == STRUCTURE_EXTENSION) && s.energy > 10,
	});
	let controller = creep.room.controller;
	// State Switching & Say Action
	if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
		creep.memory.working = true;
		creep.say('\u{1F4DA}'); // books emojii unicode
	}
	if (creep.memory.working == true && creep.carry.energy == 0) {
		creep.memory.working = false;
		creep.say('\u{267B}'); // recycle emojii unicode
	}
	// State 1: Creep does not working, is not at filled structure -> Move to it
	if (!working && filledStructure != null && !creep.pos.isNearTo(filledStructure)) {
		creep.moveTo(filledStructure, {
			visualizePathStyle: {
				stroke: '#ffffff',
			},
		});
		return OK;
	}
	// State 2: Creep does not working, is at filled structure -> Withdraw energy
	if (!working && filledStructure != null && creep.pos.isNearTo(filledStructure)) {
		creep.withdraw(filledStructure, RESOURCE_ENERGY);
		return OK;
	}
	// State 3: Creep does working, is not at controller -> Move to it
	if (working && controller != null && !creep.pos.inRangeTo(controller, 3)) {
		creep.moveTo(creep.room.controller, {
			visualizePathStyle: {
				stroke: '#ffaa00',
			},
		});
		return OK;
	}
	// State 4: Creep does working, is at controller -> Upgrade it
	if (working && controller != null && creep.pos.inRangeTo(controller, 3)) {
		creep.upgradeController(creep.room.controller);
		return OK;
	}
};

export default upgrade;
