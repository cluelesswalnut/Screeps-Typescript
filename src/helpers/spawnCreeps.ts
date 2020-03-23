import generateBodyParts from './generateBodyParts';
import generateName from './generateName';
import generateOptions from './generateOptions';

interface TasksNeeded {
	harvest?: number;
	upgrade?: number;
	build?: number;
	mine?: number;
	repair?: number;
}

const spawnCreeps = (originRoomName: string, roomSpawners: StructureSpawn[], totalEnergy: number, tasksNeeded: TasksNeeded) => {
	for (let spawner of roomSpawners) {
		Game.spawns[spawner.name].spawnCreep(generateBodyParts(), generateName(), generateOptions(originRoomName));
	}
};

export default spawnCreeps;
