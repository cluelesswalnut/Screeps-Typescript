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

interface RoomNeeds {
	energySources: number;
	energySpots: number;
	energySourceDistance: number;
	controllerSpots: number;
	controllerDistance: number;
	availableEnergy: number;
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
