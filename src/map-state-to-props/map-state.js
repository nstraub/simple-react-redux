import { parsePaths, pathsAreValid, tryMap } from './common';

export default function mapState (state, paths = []) {
    if (!pathsAreValid(paths)) {
        throw new TypeError(`"getFromState" must be an array or a string, instead got ${typeof paths}`);
    }

    return parsePaths(paths).reduce(((accumulator, path) =>{
        (accumulator[path[-1]] = tryMap(
            {
                state,
                path,
                messageType: 'error',
                message: `value "${path.join('.')}" is inaccessible: `
            }

        )) || delete accumulator[path[-1]];

        return accumulator;
    }), {});
}
