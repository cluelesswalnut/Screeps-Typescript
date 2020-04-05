import generateBodyParts from './generateBodyParts';
import generateName from './generateName';
import generateOptions from './generateOptions';

const spawnCreeps = (originRoomName: string, rolesNeeded: RolesNeeded, RCL: number) => {
	const { harvesters, upgraders, miners, builders} = countCreeps(originRoomName);

	const roomSpawners: StructureSpawn[] = _.filter(Game.spawns, x => x.room.name === originRoomName);

	if ( rescueProtocol(originRoomName, roomSpawners, harvesters ) ){
		return;
	}

	for (let spawner of roomSpawners) {
		// if ( rolesNeeded.mine && miners < rolesNeeded.mine) {
		// 	Game.spawns[spawner.name].spawnCreep(
		// 		generateBodyParts(`Miner`),
		// 		generateName(`Miner`),
		// 		generateOptions(originRoomName, `miner`),
		// 	);
		// }else
		if (rolesNeeded.harvest && harvesters < rolesNeeded.harvest) {
			Game.spawns[spawner.name].spawnCreep(
				generateBodyParts(`Harvester`, RCL),
				generateName(`Harvester`),
				generateOptions(originRoomName, `harvester`),
			);
		} else if (rolesNeeded.build && builders < rolesNeeded.build) {
			Game.spawns[spawner.name].spawnCreep(
				generateBodyParts(`Builder`, RCL),
				generateName(`Builder`),
				generateOptions(originRoomName, `builder`),
			);
		} else if (rolesNeeded.upgrade && upgraders < rolesNeeded.upgrade) {
			Game.spawns[spawner.name].spawnCreep(
				generateBodyParts(`Upgrader`, RCL),
				generateName(`Upgrader`),
				generateOptions(originRoomName, `upgrader`),
			);
		}
	}
};

const countCreeps = (originRoomName: string) =>{
	const roomCreeps: Creep[] = _.filter(Game.creeps, x => x.memory.originRoomName === originRoomName);

	const harvesters: number = _.filter(roomCreeps, x => x.memory.role === `harvester`).length;
	const upgraders: number = _.filter(roomCreeps, x => x.memory.role === `upgrader`).length;
	const miners: number = _.filter(roomCreeps, x => x.memory.role === 'miner').length;
	const builders: number = _.filter(roomCreeps, x => x.memory.role === 'builder').length;

	// can make the return a RolesNeeded type?
	return {harvesters, upgraders, miners, builders};
}

/**
 * Check if a room needs rescuing and rescues it. Currently just makes sure at least 1 harvester exists
 * @param originRoomName	Name of the room that is being evaluated
 * @param roomSpawners		Spawners for the room
 * @param harvesterCount	Number of harvesters for the room
 * @returns bool				true if the room needed rescuing, false otherwise
 */
const rescueProtocol = (originRoomName: string, roomSpawners: StructureSpawn[], harvesterCount: number) => {
	const spawner: StructureSpawn = roomSpawners[0];
	if ( harvesterCount < 1){
		spawner.spawnCreep(
			generateBodyParts(`Harvester`, 1),
			generateName(`Harvester`),
			generateOptions(originRoomName, `harvester`))
			return true;
	}
	return false;
}

export default spawnCreeps;
