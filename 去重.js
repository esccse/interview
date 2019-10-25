function getSingle(arr = []) { // byObjProp
	const resultArr = [];
    const tempObj = {};
    arr.forEach(v => {
        if (!tempObj[v + ' ' + typeof v]) {
            resultArr.push(v);
            tempObj[v + ' ' + typeof v] = true;
        }
    })
	return resultArr;
}
function getSingle(arr = []) {
    const resultArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!resultArr.includes(arr[i])) {
            resultArr.push(arr[i]);
        }
    }
    return resultArr;
}
function getSingle(arr = []) { // arr.filter + indexOf
    return arr.filter((v, i) => arr.indexOf(v) === i)
}
function getSingle(arr = []) {
    for (let i = 0, len = arr.length; i<len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (arr[i] == arr[j]) {
                arr.splice(j, 1);
                len--;
                j--;
            }
        }
    }
    return arr
}
