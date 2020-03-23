import harvest from 'tasks/harvest';
import upgrade from 'tasks/harvest';

const runCreeps = (originRoomName: string) => {
	const roomCreeps: Creep[] = _.filter(Game.creeps, x => x.memory.originRoomName === originRoomName);

	for (let creep of roomCreeps) {
		switch (creep.memory.task) {
			case `harvest`:
				harvest(creep);
				break;
			case `upgrade`:
				upgrade(creep);
				break;
			default:
				console.log(`There was an error running a room's creeps' tasks.`);
				throw Error;
		}
	}
};

export default runCreeps;
