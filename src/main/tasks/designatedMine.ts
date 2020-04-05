import Task from './Task'

class DesignatedMine extends Task {

	static readonly TAG: string = 'designatedMine';

	constructor(){ super() };

	assign(creep: Creep, source: Source, container: StructureContainer): void {
		creep.memory.task = DesignatedMine.TAG;
		creep.memory.source = source.id;
		creep.memory.container = container.id;
	}

	execute(creep: Creep): void{
		let source: Source | null = Game.getObjectById(creep.memory?.source);
		let container: StructureContainer | null = Game.getObjectById(creep.memory?.container);

		if ( !source ){
			throw new Error(`DesignatedMine task creep missing source. Name: ${creep.name}.`);
		};
		if ( !container ){
			throw new Error(`DesignatedMine task creep missing container. Name: ${creep.name}.`);
		};

		if (!creep.pos.isEqualTo(container)) {
			creep.moveTo(container, {
				visualizePathStyle: {
					stroke: '#ffffff',
				},
			});
			creep.harvest(source);
			creep.transfer(container, RESOURCE_ENERGY);
		}
	}

	checkFinished(creep: Creep){
		// DesignatedMiner never finishes
		return false;
	}

}