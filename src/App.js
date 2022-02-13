import React, { useEffect, useRef } from 'react';
import { Grid } from '@material-ui/core'

import { SpeechState, useSpeechContext } from "@speechly/react-client";
import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel } from '@speechly/react-ui';
import Details from './components/Details/Details';
import useStyles from './styles'
import Main from './components/Main/Main';

function App() {
  const classes = useStyles();

  const { speechState } = useSpeechContext();
  const main = useRef(null)

  const executeScroll = () => main.current.scrollIntoView()

  useEffect(() => {
    if (speechState === SpeechState.Recording) {
      executeScroll();
    }
  }, [speechState]);

  return (
    <div>
      <Grid
        container
        spacing={0}
        alignItems='center'
        justifyContent='center'
        style={{
          height: '100vh'
        }}
        className={classes.grid}
      >
        {/* ======================================================== */}
        <Grid
          item
          xs={12}
          sm={4}
          className={classes.mobile}
        >
          <Details
            title="Income"
          />
        </Grid>

        {/* ======================================================== */}

        <Grid
          item
          xs={12}
          sm={3}
          className={classes.main}
          ref={main}
        >
          <Main />
        </Grid>

        {/* ======================================================== */}

        <Grid
          item
          xs={12}
          sm={4}
          className={classes.desktop}
        >
          <Details
            title="Income"
          />
        </Grid>

        {/* ======================================================== */}

        <Grid
          item
          xs={12}
          sm={4}
          className={classes.last}
        >
          <Details
            title="Expense"
          />
        </Grid>
      </Grid>
      <PushToTalkButtonContainer>
        <PushToTalkButton />
        <ErrorPanel />
      </PushToTalkButtonContainer>
    </div>
  );
}

export default App;