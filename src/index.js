import {connect} from 'react-redux';

import mapStateToProps from './map-state-to-props/index';
import mapDispatchToProps from './map-dispatch-to-props';
import mergeProps from './merge-props';

// http://stackoverflow.com/questions/33064377/destructuring-to-get-the-last-element-of-an-array-in-es6#comment65929278_37442826
Object.defineProperty(Array.prototype, -1, { get() {return this[this.length - 1]; } });

export default connect(mapStateToProps, mapDispatchToProps, mergeProps);
