import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

import Fade from '@material-ui/core/Fade';

function Loader(props) {
  return (
    <Fade
        in={props.query}
        unmountOnExit
        >
        <LinearProgress />
    </Fade>
  )
}

export default Loader;