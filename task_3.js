divideNumber = (dividend, divisor) => {
	let sign = (dividend < 0 ^ divisor < 0 ) ? -1 : 1;
	dividend = Math.abs(dividend);
	divisor = Math.abs(divisor);
	let qoutinent = 0;
	let result = 0;
	while (dividend>=divisor){
		dividend -= divisor;
		qoutinent++
	}
	qoutinent === 0 ? result = qoutinent : result = qoutinent*sign;
	return result;

}

console.log(divideNumber(2,2))