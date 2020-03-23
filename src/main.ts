const originRoomNames: string[] = [`E58S54`];
import overlordOne from './room_overlords/overlordOne';

for (let originRoomName of originRoomNames) {
	const RCL = Game?.rooms[originRoomName]?.controller?.level;
	switch (RCL) {
		case 1:
			overlordOne(originRoomName, RCL);
			break;
		case 2:
			overlordOne(originRoomName, RCL);
			break;
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
		case 8:
	}
}
