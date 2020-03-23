import calcTasksNeeded from 'helpers/calcTasksNeeded';
import calcRoomNeeds from 'helpers/calcRoomNeeds';
import spawnCreeps from 'helpers/spawnCreeps';

const overlordOne = (originRoomName: string, RCL?: number) => {
	const roomSpawners: StructureSpawn[] = _.filter(Game.spawns, x => x.room.name === originRoomName);
	const roomCreeps: Creep[] = _.filter(Game.creeps, x => x.memory.originRoomName === originRoomName);
	const roomNeeds = calcRoomNeeds(originRoomName);
	const tasksNeeded = calcTasksNeeded(roomNeeds); // Object with Tasks Here
	spawnCreeps(originRoomName, roomSpawners, 300, tasksNeeded);
	const runCreeps = () => {
		for (let creep in roomCreeps) {
			if (creep.memory.tasks === 'harvest') {
				performTask(`harvest`);
			}
		}
	};
	runCreeps(roomCreeps);

	// const spawnCreeps = () => {
	// 	for (let spawner of roomSpawns) {
	// 		Game.spawns[spawner.name].spawnCreep(generateBodyParts(), generateName(), generateOptions(originRoomName));
	// 	}
	// };

	for (let creep in Game.creeps) {
		let creep = Game.creeps[creep];
		if (creep.memory.role == 'harvester') {
			roleHarvester.run(creep);
		} else if (creep.memory.role == 'upgrader') {
			roleUpgrader.run(creep);
		} else if (creep.memory.role == 'builder') {
			roleBuilder.run(creep);
		}
	}
};

export default overlordOne;
