import generateBodyParts from './generateBodyParts';
import generateName from './generateName';
import generateOptions from './generateOptions';

const spawnCreeps = (originRoomName: string, rolesNeeded: RolesNeeded) => {
	const { harvesters, upgraders, miners} = countCreeps(originRoomName);

	const roomSpawners: StructureSpawn[] = _.filter(Game.spawns, x => x.room.name === originRoomName);
	for (let spawner of roomSpawners) {
		if ( rolesNeeded.mine && miners < rolesNeeded.mine) {
			Game.spawns[spawner.name].spawnCreep(
				generateBodyParts(`Miner`),
				generateName(`Miner`),
				generateOptions(originRoomName, `miner`),
			);
		}else if (rolesNeeded.harvest && harvesters < rolesNeeded.harvest) {
			Game.spawns[spawner.name].spawnCreep(
				generateBodyParts(`Harvester`),
				generateName(`Harvester`),
				generateOptions(originRoomName, `harvester`),
			);
		} else if (rolesNeeded.upgrade && upgraders < rolesNeeded.upgrade) {
			Game.spawns[spawner.name].spawnCreep(
				generateBodyParts(`Upgrader`),
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

	return {harvesters, upgraders, miners};
}

export default spawnCreeps;
