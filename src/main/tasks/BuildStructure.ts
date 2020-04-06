import Task from './Task'

class BuildStructure extends Task {

	static readonly TAG: string = 'buildStructure';

	constructor(){ super() };

	/**
	 * Assign a construction job to a creep
	 * @param creep
	 * @param structureType
	 * @param position			Position to build the structure at.
	 * @throws 						If construction site can't be created.
	 */
	assignNewSite(creep: Creep, structureType: StructureConstant, position: RoomPosition): void {
		if ( creep.room.createConstructionSite(position, structureType) != OK){
			throw new Error(`Can't create construction site. Name: ${creep.name}.`);
		};
		let constructionSites: ConstructionSite[] = creep.room.lookForAt(LOOK_CONSTRUCTION_SITES, position);
		if ( constructionSites.length < 1 || !constructionSites[0]){
			throw new Error(`Can't locate construction site. Name: ${creep.name}.`);
		}
		this.assign(creep, constructionSites[0]);
	}

	assign(creep: Creep, constructionSite: ConstructionSite): void {
		creep.memory.task = BuildStructure.TAG;
		creep.memory.constructionSite = constructionSite.id;
	}

	execute(creep: Creep): void{
		let constructionSite: ConstructionSite = Game.getObjectById(creep.memory.constructionPosition);

		if ( !constructionSite ){
			// maybe check if it can't be found because it is complete? Just call checkFinished?
			throw new Error(`BuildStructure task execute missing constructionSite. Creep name: ${creep.name}.`);
		};

		if (!creep.pos.isEqualTo(constructionSite)) {
			creep.moveTo(constructionSite, {
				visualizePathStyle: {
					stroke: '#ffffff',
				},
			});
			creep.build(constructionSite);
		}
	}

	checkFinished(creep: Creep){
		let constructionSite: ConstructionSite | null = Game.getObjectById(creep.memory.constructionPosition);

		if ( constructionSite === null ){
			creep.memory.task = 'none';
			// notify the room that the structure is finished?
			return true;
		}
		if ( creep.carry.energy === 0 ){
			creep.memory.task = 'none';
			return true;
		}
		return false;
	}

}

export default BuildStructure;
