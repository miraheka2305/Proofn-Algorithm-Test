coinChange = (arrCoin, amountOfPaid) => {
	let countCombinations = 0;
	let paidAmount = 0;
	let begin = 0;
	let start = 0;
	let end = 0;
	let temp = 0;

	for (var i=0; i<arrCoin.length;i++){
		paidAmount = amountOfPaid - arrCoin[i];
		if (paidAmount === 0){
			countCombinations++;
		} else {
			for (var j=i+1; j<arrCoin.length;j++){
				temp = paidAmount;
				start = j
				while (paidAmount > 0 && start < arrCoin.length)
				{
					temp = temp - arrCoin[start];
					if (temp>= 0){
						paidAmount = temp;
					} else {
						temp = paidAmount;
					}
					start++;
				}		
				if (paidAmount=== 0){
					countCombinations++
				}
			}
		}
	}

	return countCombinations;
}

console.log(coinChange([4, 3, 2, 2, 1, 1], 4))