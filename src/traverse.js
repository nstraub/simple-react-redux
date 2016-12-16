export default function traverse(obj, keys) {
    if(keys.length) {
        let currentKey = keys.shift();
        obj = obj[currentKey];

        if (obj == undefined) { // coercive equality used to test for null as well.
            throw new ReferenceError(currentKey);
        }

        return traverse(obj, keys);
    }

    return obj;
}