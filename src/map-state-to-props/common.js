import traverse from '../traverse';

function parsePaths(paths) {
    if (typeof paths === 'string') {
        return [paths.split('.')];
    }

    return paths.map((path) => path.split('.'));
}

function pathsAreValid(paths) {
    return typeof paths === 'string' || Array.isArray(paths);
}

function tryMap(parameters) {
    let {state, path, messageType, message} = parameters;
    try {
        return traverse(state, [...path]);
    } catch (e) {
        console[messageType](message + (messageType === 'error'? e.message : ''));
    }
}

export { parsePaths, pathsAreValid, tryMap };
