import generateBodyParts from '../helpers/generateBodyParts';
import generateName from '../helpers/generateName';
import generateMemory from '../helpers/generateMemory';
const overlordOne = (originRoomName: string, RCL?: number) => {
	const roomSpawns = _.filter(Game.spawns, x => x.room.name === originRoomName);

	for (let spawner in roomSpawns) {
		Game.spawns[spawner].spawnCreep(generateBodyParts(), generateName(), generateMemory());
	}

	// for (let name in Game.creeps) {
	// 	let creep = Game.creeps[name];
	// 	if (creep.memory.role == 'harvester') {
	// 		roleHarvester.run(creep);
	// 	} else if (creep.memory.role == 'upgrader') {
	// 		roleUpgrader.run(creep);
	// 	} else if (creep.memory.role == 'builder') {
	// 		roleBuilder.run(creep);
	// 	}
	// }
};

export default overlordOne;
