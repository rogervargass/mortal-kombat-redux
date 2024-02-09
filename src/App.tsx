import ReactAudioPlayer from "react-audio-player";
import { Provider } from "react-redux";
import MK_THEME from "./assets/audio/theme_music.mp3";
import Router from "./routes/Router";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Router />
      <ReactAudioPlayer src={MK_THEME} autoPlay />
    </Provider>
  );
}

export default App;
