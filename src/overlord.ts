import spawnCreeps from 'helpers/spawnCreeps';
import runCreeps from 'helpers/runCreeps';

import calcRoomNeeds from './helpers/calcRoomNeeds';
import calcTasksNeeded from './helpers/calcTasksNeeded';

const overlord = (originRoomName: string) => {
	const roomNeeds: RoomNeeds = calcRoomNeeds(originRoomName);
	const tasksNeeded: TasksNeeded = calcTasksNeeded(roomNeeds);

	spawnCreeps(originRoomName, tasksNeeded);
	runCreeps(originRoomName);
};

export default overlord;
