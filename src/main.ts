const originRoomNames: string[] = [`E58S54`];
import roomOverlord from './roomOverlord';

// Markus comment

for (let originRoomName of originRoomNames) {
	const RCL = Game?.rooms[originRoomName]?.controller?.level;
	roomOverlord(originRoomName, RCL);
}
