maxSubArray = (arrA) => {
	let max_so_far = 0;
	let max_ending_here = 0;
	let begin = 0;
	let start = 0;
	let end = 0;
	let arrNew = [];
	arrA.map((item,index) => {
		max_ending_here = max_ending_here + item;
		max_ending_here < 0 ? 
			(max_ending_here = 0,
				begin = index + 1
			)
		: max_so_far < max_ending_here ? 
			( max_so_far = max_ending_here,
				start = begin,
				end = index
			)
		  : "" ;
	})
	arrNew = arrA.slice(start, end+1);
	return arrNew;

}

console.log(maxSubArray([1,-3,5,-2,9,-8,-6,4]))