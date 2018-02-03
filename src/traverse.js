export default function traverse(obj, keys) {
    if (keys.length) {
        let currentKey = keys.shift();
        obj = obj[currentKey];

        //noinspection EqualityComparisonWithCoercionJS
        if (obj == undefined) { // coercive equality used to test for null as well.
            if(keys.length) {
                throw new ReferenceError(`"${currentKey}" does not exist`);
            } else {
                return null;
            }
        }

        return traverse(obj, keys);
    }

    return obj;
}
