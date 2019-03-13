export default (str) => {
	var r = [];
	var match = function (str) {
		var j = str.match(/^(0+|1+)/)[0];
		var o = (j[0] ^ 1).toString().repeat(j.length);
		var reg = new RegExp(`^(${j}${o})`);
		if (reg.test(str)) {
			return RegExp.$1
		} else {
			return ''
		}
	}
	for (var i = 0, len = str.length - 1; i < len; i++) {
		var sub = match(str.slice(i));
		if (sub) {
			r.push(sub);
		}
	}
	return r
}