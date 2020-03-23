import generateBodyParts from './generateBodyParts';
import generateName from './generateName';
import generateOptions from './generateOptions';
import harvest from 'tasks/harvest';
import upgrade from 'tasks/harvest';

interface TasksNeeded {
	harvest?: number;
	upgrade?: number;
	build?: number;
	mine?: number;
	repair?: number;
}

const runCreeps = (roomCreeps: Creep[]) => {
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
