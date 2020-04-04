// memory extension samples
interface CreepMemory {
	originRoomName: string;
	role: string;
	working: boolean;
	task: string;
}

interface Memory {
	uuid: number;
	log: any;
}

interface RolesNeeded {
	harvest?: number;
	upgrade?: number;
	build?: number;
	mine?: number;
	repair?: number;
}

// `global` extension samples
declare namespace NodeJS {
	interface Global {
		log: any;
	}
}
