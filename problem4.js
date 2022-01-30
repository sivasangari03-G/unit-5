var arr = [100, [50, 60, 70]]; 

const [first, [sec, ...rest] ] = arr;
console.log(sec);