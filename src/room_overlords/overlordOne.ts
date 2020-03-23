import calcTasksNeeded from 'helpers/calcTasksNeeded';
import calcRoomNeeds from 'helpers/calcRoomNeeds';
import spawnCreeps from 'helpers/spawnCreeps';
import runCreeps from 'helpers/runCreeps';

const overlordOne = (originRoomName: string, RCL?: number) => {
	const roomSpawners: StructureSpawn[] = _.filter(Game.spawns, x => x.room.name === originRoomName);
	const roomCreeps: Creep[] = _.filter(Game.creeps, x => x.memory.originRoomName === originRoomName);
	const roomNeeds = calcRoomNeeds(originRoomName);
	const tasksNeeded = calcTasksNeeded(roomNeeds); // Object with Tasks Here
	spawnCreeps(originRoomName, roomSpawners, 300, tasksNeeded);
	runCreeps(roomCreeps);
};

export default overlordOne;
