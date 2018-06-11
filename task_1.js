hasArrayTwoCandidates = (arrNumber, sum ) => {
	const arrSort = arrNumber.sort();
	let leftMost = 0;
	let rightMost = arrSort.length - 1;
	let found = false;
	while (!found && leftMost<rightMost)
	{
		(arrSort[leftMost] + arrSort[rightMost] === sum) ? (found = true) 
		: ((arrSort[leftMost] + arrSort[rightMost] < sum) ? leftMost++  
				: rightMost--);
	}
	return found;	
}
console.log(hasArrayTwoCandidates([9,10,8,4,5,3], 15));