var array = [
	1,
	{
		arr: [1, 2, 3],
	},
]; 


const [first, { arr:[a, b, c]}] = array;
console.log(b,c);