
export const filterParam = params => {
    let obj = {};
    if (toString.call(params) === '[object Object]') {
        Object.keys(params).forEach(key => {
            if (params[key] !== '' && params[key] !== null && params !== undefined) {
                obj[key] = params[key];
            }
        });
        obj['_'] = Date.now();
        return obj;
    } else {
        return params;
    }
	
};
