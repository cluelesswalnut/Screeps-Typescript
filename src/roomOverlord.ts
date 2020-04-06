import spawnCreeps from 'main/creep_generation/spawnCreeps';
import {runCreeps, runCreeps_tasks} from 'main/runCreeps';

import calcRolesNeeded from './main/calcRolesNeeded';

import assignTasks from './main/tasks/assignTasks'
import calculateRoomState from './main/room_logic/roomState'

const roomOverlord = (originRoomName: string, RCL?: number) => {
	if (!RCL)
		RCL = 1;
	const room: Room = Game.rooms[originRoomName];
	calculateRoomState(room);

	const rolesNeeded: RolesNeeded = calcRolesNeeded(RCL);

	spawnCreeps(originRoomName, rolesNeeded, RCL);
	assignTasks(originRoomName, RCL);
	runCreeps_tasks(originRoomName);
};

export default roomOverlord;
