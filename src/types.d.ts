// memory extension samples
interface CreepMemory {
	originRoomName: string;
	task: string;
	working: boolean;
}

interface Memory {
	uuid: number;
	log: any;
}

// `global` extension samples
declare namespace NodeJS {
	interface Global {
		log: any;
	}
}
