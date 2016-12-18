import {connect} from 'react-redux';

import mapStateToProps from './map-state-to-props';
import mapDispatchToProps from './map-dispatch-to-props';
import mergeProps from './merge-props';

export default connect(mapStateToProps, mapDispatchToProps, mergeProps);