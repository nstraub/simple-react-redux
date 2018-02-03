import {connect} from 'react-redux';

import mapStateToProps from './map-state-to-props/index';
import mapDispatchToProps from './map-dispatch-to-props';
import mergeProps from './merge-props';
import './extensions';

export default connect(mapStateToProps, mapDispatchToProps, mergeProps);
