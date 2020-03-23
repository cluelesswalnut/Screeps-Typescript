import generateBodyParts from './generateBodyParts';
import generateName from './generateName';
import generateOptions from './generateOptions';

const spawnCreeps = (originRoomName: string, tasksNeeded: TasksNeeded) => {
	const { harvest, upgrade } = tasksNeeded; // 4 4
	const roomCreeps: Creep[] = _.filter(Game.creeps, x => x.memory.originRoomName === originRoomName);

	const harvestTasks: number = _.filter(roomCreeps, x => x.memory.task === `harvest`).length;
	const upgradeTasks: number = _.filter(roomCreeps, x => x.memory.task === `upgrade`).length;

	const roomSpawners: StructureSpawn[] = _.filter(Game.spawns, x => x.room.name === originRoomName);
	for (let spawner of roomSpawners) {
		if (harvest && harvestTasks < harvest) {
			Game.spawns[spawner.name].spawnCreep(
				generateBodyParts(`Harvester`),
				generateName(`Harvester`),
				generateOptions(originRoomName, `harvest`),
			);
		} else if (upgrade && upgradeTasks < upgrade) {
			Game.spawns[spawner.name].spawnCreep(
				generateBodyParts(`Upgrader`),
				generateName(`Upgrader`),
				generateOptions(originRoomName, `upgrade`),
			);
		}
	}
};

export default spawnCreeps;
