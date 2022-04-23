import React, { useEffect } from 'react';
import { Flex, Grid } from '@chakra-ui/react';
import Player from './Player';
import SongList from './SongList';
// import songs from '../../../data/songs.json';
import SongDetail from './SongDetail';
import SongListHeader from './SongListHeader';
import axios from "axios";

// for (let index = 0; index < songs.length; index++) {
//   const song = songs[index];
//   song.id = index;
// }

const App = () => {
  const [songs, setSongs] = React.useState([]);
  useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios.get("https://service-music-tramoi.herokuapp.com/songs").then((response) => {
      setSongs(response.data.data);
      console.log("🚀 ~ file: App.js ~ line 23 ~ .then ~ response", response.data.data);
    });

    // for (let index = 0; index < songs.length; index++) {
    //   const song = songs[index];
    //   song.id = index;
    // }
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  return (
    <React.Fragment>
      <Grid
        gridTemplateColumns={'repeat(12, 1fr)'}
        gridTemplateRows={'repeat(8, 1fr)'}
        height="80vh"
      >
        <SongListHeader />
        <SongDetail />
        <SongList songs={songs} />
        <Player />
        <a href="javascript:void 0" id="focus-link" hidden>
          Go to playing element
        </a>
      </Grid>
    </React.Fragment>
  );
};
export default App;
