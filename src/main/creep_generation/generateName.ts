const generateName = (name: string) => {
	return `${name}${Math.round(Math.random() * 1000)}`;
};

export default generateName;
