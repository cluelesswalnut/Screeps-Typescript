abstract class Task {
	constructor(){};
	public abstract assign(creep: Creep): void;
	public abstract execute(creep: Creep): void;
	public abstract checkFinished(creep: Creep): boolean;
}