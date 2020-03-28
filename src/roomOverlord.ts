import spawnCreeps from 'helpers/spawnCreeps';
import runCreeps from 'helpers/runCreeps';

import calcRoomNeeds from './helpers/calcRoomNeeds';
import calcRolesNeeded from './helpers/calcRolesNeeded';

const roomOverlord = (originRoomName: string) => {
	const roomNeeds: RoomNeeds = calcRoomNeeds(originRoomName);
	const rolesNeeded: RolesNeeded = calcRolesNeeded(roomNeeds);

	spawnCreeps(originRoomName, rolesNeeded);
	runCreeps(originRoomName);
};

export default roomOverlord;
