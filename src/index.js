module.exports = function getZerosCount(number, base) {
  
    var currBase = base,
        result = Number.MAX_VALUE;

    var getFactZeros = (base) => {
        var count = 0,
            j = Math.floor(number / base);
        
        while (j > 0) {
            count += j;
            j = Math.floor(j / base);
        }
        
        return count;
    };

    var getBaseZeros = (base) => {
        var count = 0;

        while (currBase % base === 0) {
            currBase = currBase / base;     
            count++;
        }
        
        return count;
    };

    for (var i = 2; i <= base; i++) {
        if (currBase % i !== 0) continue;

        var baseZeros = getBaseZeros(i),
            factZeros = getFactZeros(i);

        result = Math.min(Math.floor(factZeros / baseZeros), result);
    }

    return result;
}