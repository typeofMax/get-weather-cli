const getArgs = (args) => {
	const objectOfArguments = {};
	const argsArray = args.slice(2);
	argsArray.forEach((arg, i, array) => {
		if (arg.charAt(0) === '-') {
			if (array.length - 1 === i) {
				objectOfArguments[arg.substring(1)] = true;
			} else if (array[i + 1].charAt(0) !== '-') {
				objectOfArguments[arg.substring(1)] = array[i + 1];
			} else {
				objectOfArguments[arg.substring(1)] = true;
			}
		}
	})
	return objectOfArguments;
}
export {getArgs};