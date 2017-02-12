import { parsePaths, pathsAreValid, tryMap } from './common';

export default function mapCurry (state, paths) {
    if (pathsAreValid(paths)) {
        return {CURRY: parsePaths(paths).map(function (path) {
            return tryMap(
                {
                    state,
                    path,
                    messageType: 'warn',
                    message: `WARNING: "${path.join('.')}" does not exist. undefined will be assigned instead of desired value`
                }
            );
        })};
    }
}
