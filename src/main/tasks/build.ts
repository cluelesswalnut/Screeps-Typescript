import upgrade from './upgrade'

const build = (creep: Creep) => {
	var constructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);

	if ( constructionSite ){
		if (!creep.pos.isNearTo(constructionSite)) {
			creep.moveTo(constructionSite, {
				visualizePathStyle: {
					stroke: '#ffffff',
				},
			});
		}
		creep.build(constructionSite);
	} else{
		upgrade(creep);
	}

	// finish condition
	if ( creep.carry.energy === 0)
		creep.memory.task = 'none';

}

export default build;