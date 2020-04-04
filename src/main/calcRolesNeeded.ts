const calcRolesNeeded = (RCL: number) => {

	let roles = {};

	switch (RCL){
		case 1:
			roles = {
				harvest: 4,
				upgrade: 4,
			};
			break;
		case 2:
			roles = {
				harvest: 4,
				upgrade: 4,
			};
			break;
		case 3:
			roles = {
				mine: 1,
				harvest: 2,
				upgrade: 4,
			};
			break;
		default:
			roles = {
				mine: 1,
				harvest: 2,
				upgrade: 4,
			};
			break;
	}
	return roles;
};

export default calcRolesNeeded;
