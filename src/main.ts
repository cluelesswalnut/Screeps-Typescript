const spawns = Game.spawns;
const originRoomNames : string[] = []
for ( let spawn in spawns){
	originRoomNames.push(spawns[spawn].room.name);
}
import roomOverlord from './roomOverlord';

// Markus comment

for (let originRoomName of originRoomNames) {
	const RCL = Game?.rooms[originRoomName]?.controller?.level;
	roomOverlord(originRoomName, RCL);
	//Kevin
}
