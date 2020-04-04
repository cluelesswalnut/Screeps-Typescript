import generateBodyParts from './generateBodyParts';
import generateName from './generateName';
import generateOptions from './generateOptions';

const spawnCreeps = (originRoomName: string, rolesNeeded: RolesNeeded, RCL: number) => {
	const { harvesters, upgraders, miners, builders} = countCreeps(originRoomName);

	const roomSpawners: StructureSpawn[] = _.filter(Game.spawns, x => x.room.name === originRoomName);
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

export default spawnCreeps;
