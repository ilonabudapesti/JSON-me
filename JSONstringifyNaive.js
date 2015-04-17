// Let's rewrite JSON.stringify from scratch:

var JSONstringifyNaive = function(obj) {
  // your code goes here
  var result = '';

  if (typeof obj === 'function' || obj === undefined) {
  	//skip these unstringifyables
  	return result;
  }
  else if (typeof obj === 'number') {
  	result = result + obj;
  }
  else if (obj === null) {
  	result = result + 'null';
  }
  else if (obj === true) {
  	result = result + 'true';
  }
  else if (obj === false) {
  	result = result + 'false';
  }
  else if (typeof obj === 'string') {
  	result = result + '"' + obj + '"';
  }
  else if (Array.isArray(obj)) {
  	result = result + '['
  	for (var i = 0; i < obj.length; i++) {
  		result = result + JSONstringifyNaive(obj[i]);
  		if (i < obj.length-1) {
  			result = result + ',';
  		}
  	} 
  	result = result + ']';
  }
  else {
  	result = result + '{';
  	for (var key in obj) {
		if (obj[key] !== undefined && typeof obj[key] !== 'function') {
			result = result + '"' + key + '":' + JSONstringifyNaive(obj[key]) + ',';
		}
  	}
  	if (result[result.length-1] === ',') {
  		result = result.substring(0, result.length-1) + '}';
  	}
  	else {
  		result = result + '}';
  	}
  }
  return result;
};
