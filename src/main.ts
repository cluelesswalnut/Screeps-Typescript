const originRoomNames: string[] = [`E58S54`];
import overlord from './overlord';

for (let originRoomName of originRoomNames) {
	const RCL = Game?.rooms[originRoomName]?.controller?.level;
	overlord(originRoomName);
}
