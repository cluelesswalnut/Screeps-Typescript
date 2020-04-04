import spawnCreeps from 'main/creep_generation/spawnCreeps';
import {runCreeps, runCreeps_tasks} from 'main/runCreeps';

import calcRoomNeeds from './main/calcRoomNeeds';
import calcRolesNeeded from './main/calcRolesNeeded';

import assignTasks from './main/tasks/assignTasks'

const roomOverlord = (originRoomName: string, RCL?: number) => {
	if (!RCL)
		RCL = 1;

	const roomNeeds: RoomNeeds = calcRoomNeeds(originRoomName);
	const rolesNeeded: RolesNeeded = calcRolesNeeded(roomNeeds);

	spawnCreeps(originRoomName, rolesNeeded);
	assignTasks(originRoomName, RCL);
	runCreeps_tasks(originRoomName);
};

export default roomOverlord;
