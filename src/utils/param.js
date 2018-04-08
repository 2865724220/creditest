
function buildParams(key, obj, traditional, add) {
    let name;
    if (typeof obj === 'object' && toString.call(a) === "[object Array]") {
        obj.forEach(( v, i ) => {
            if (traditional || /\[\]$/.test(key)) {
                add(key, v);
            } else {
                buildParams(
                    key + "[" + (typeof v === "object" && v != null ? i : "") + "]",
                    v,
                    traditional,
                    add
                );
            }
        });
    } else if (!traditional && typeof obj === "object" ) {
        for (name in obj) {
            buildParams(key + "[" + name + "]", obj[name], traditional, add);
        }
    } else {
        add(key, obj);
    }
};

const Param = function (a, traditional) {
    let key,
        s = [],
        add = function (key, valueOrFunction) {
            let value = typeof valueOrFunction === "function" ? valueOrFunction() : valueOrFunction;
            s[ s.length ] = encodeURIComponent( key ) + "=" +
                encodeURIComponent( value == null ? "" : value );
        };

    if (typeof obj === 'object' && toString.call(a) === "[object Array]") {
        a.forEach(item, function() {
            return add(item.name, item.value)
        });
    } else {
        for ( key in a ) {
            buildParams( key, a[ key ], traditional, add );
        }
    }

    return s.join( "&" );
};

// export default param;
module.exports = Param;
