// memory extension samples

interface SourcesMemory{
	sourceId: string;
	minerId: string | undefined;
	containerId: string | undefined;
}

interface RoomMemory{
	sources: SourcesMemory[];
}
interface CreepMemory {
	originRoomName: string;
	role: string;
	working: boolean;
	task: string;
	source?: string;
	container?: string;
	constructionSite?: string;
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
