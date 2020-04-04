const assignRolesLvl1 = (originRoomName: string) => {
	const roomCreeps: Creep[] = _.filter(Game.creeps, x => x.memory.originRoomName === originRoomName);
	for( let creep of roomCreeps){
		// if creep already has task skip
		if (!(creep.memory.task === undefined || creep.memory.task === 'none')){
			continue;
		}

		// if energy is 0, task is mine
		if ( creep.memory.role === 'harvester' || creep.memory.role === 'upgrader' ){
			if ( creep.carry.energy === 0 ){
				creep.memory.task = 'mine';
			}
		}

		// if energy is full, task is use energy
		if ( creep.carry.energy === creep.carryCapacity){
			if ( creep.memory.role === 'harvester')
				creep.memory.task = 'deposit';
			if (creep.memory.role === 'upgrader')
				creep.memory.task = 'upgrade';
		}
	}
}

const assignRoles = (originRoomName: string, RCL: number) => {
	switch (RCL) {
		case 1:
			assignRolesLvl1(originRoomName);
			break;
		case 2:
			assignRolesLvl1(originRoomName);
			break;
		default:
			assignRolesLvl1(originRoomName);
	}

}


export default assignRoles;
