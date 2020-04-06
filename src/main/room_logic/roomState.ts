//WIP
const calculateRoomState = (room: Room) => {
	console.log('calcRoomState');
	room.memory.sources = [];
	let sources: Source[] = room.find(FIND_SOURCES);
	let sourcesMemories: SourcesMemory[] = room.memory.sources;
	for ( let source of sources ){
		const container: Structure = _.filter(source.pos.findInRange(FIND_STRUCTURES, 1), x => x.structureType === STRUCTURE_CONTAINER)[0];
		const miner: Creep = _.filter(Game.creeps, x => x.memory.originRoomName === room.name && x.memory.role === 'miner' && x.memory.source === source.id)[0];
		let sourcesMemory: SourcesMemory =  _.filter(sourcesMemories, x => x.sourceId === source.id)[0];
		// if ( !sourcesMemory ){
			room.memory.sources.push({sourceId: (source) ? source.id : 'none', containerId: (container) ? container.id : 'none', minerId: (miner) ? miner.id : 'none'})
		// }
	}
	// room.memory.sources =
}

export default calculateRoomState;