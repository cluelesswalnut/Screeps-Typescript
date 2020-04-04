import spawnCreeps from 'main/creep_generation/spawnCreeps';
import {runCreeps, runCreeps_tasks} from 'main/runCreeps';

import calcRolesNeeded from './main/calcRolesNeeded';

import assignTasks from './main/tasks/assignTasks'

const roomOverlord = (originRoomName: string, RCL?: number) => {
	if (!RCL)
		RCL = 1;

	const rolesNeeded: RolesNeeded = calcRolesNeeded(RCL);

	spawnCreeps(originRoomName, rolesNeeded, RCL);
	assignTasks(originRoomName, RCL);
	runCreeps_tasks(originRoomName);
};

export default roomOverlord;
