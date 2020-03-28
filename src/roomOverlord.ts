import spawnCreeps from 'main/creep_generation/spawnCreeps';
import runCreeps from 'main/runCreeps';

import calcRoomNeeds from './main/calcRoomNeeds';
import calcRolesNeeded from './main/calcRolesNeeded';

const roomOverlord = (originRoomName: string, RCL?: number) => {
	const roomNeeds: RoomNeeds = calcRoomNeeds(originRoomName);
	const rolesNeeded: RolesNeeded = calcRolesNeeded(roomNeeds);

	spawnCreeps(originRoomName, rolesNeeded);
	runCreeps(originRoomName);
};

export default roomOverlord;
