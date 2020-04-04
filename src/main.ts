const spawns = Game.spawns;
const originRoomNames : string[] = []
for ( let spawn in spawns){
	originRoomNames.push(spawns[spawn].room.name);
}
import roomOverlord from './roomOverlord';

// Markus comment

const getRoomLevel = (originRoomName: string) => {
	const roomEnergyCapacity = Game?.rooms[originRoomName]?.energyCapacityAvailable;

	let RCL : number = 0;

	if ( roomEnergyCapacity <= 300){
		RCL = 1;
	} else if ( roomEnergyCapacity <= 550){
		RCL = 2;
	} else if ( roomEnergyCapacity <= 800){
		RCL = 3;
	} else {
		RCL = 4;
	}
	return RCL;
}

for (let originRoomName of originRoomNames) {
	const RCL = getRoomLevel(originRoomName);
	roomOverlord(originRoomName, RCL);
	//Kevin
}
