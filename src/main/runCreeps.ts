import harvest from 'roles/harvest';
import upgrade from 'roles/upgrade';

const runCreeps = (originRoomName: string) => {
	const roomCreeps: Creep[] = _.filter(Game.creeps, x => x.memory.originRoomName === originRoomName);

	for (let creep of roomCreeps) {
		switch (creep.memory.role) {
			case `harvester`:
				harvest(creep);
				break;
			case `upgrader`:
				upgrade(creep);
				break;
			default:
				throw new Error(`There was an Error running the creep: ${creep.name}.`);
		}
	}
};


import mine from './tasks/mine'
import deposit from './tasks/deposit'
import upgrade2 from './tasks/upgrade'
import build from './tasks/build'

const runCreeps_tasks = (originRoomName: string) => {
	const roomCreeps: Creep[] = _.filter(Game.creeps, x => x.memory.originRoomName === originRoomName);

	for (let creep of roomCreeps) {
		switch (creep.memory.task) {
			case 'mine':
				mine(creep);
				break;
			case 'deposit':
				deposit(creep);
				break;
			case 'upgrade':
				upgrade2(creep);
				break;
			case 'build':
				build(creep);
				break;
			default:
				throw new Error(`There was an Error running the creep: ${creep.name}.`);
		}
	}
};

export {runCreeps, runCreeps_tasks};
