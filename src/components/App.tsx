import Router from "../router/router";
import { Globalstyle } from "../style/Globalstyle";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../style/theme";
import { useSelector } from "react-redux";
import { RooteState } from "../redux/config/configStore";

function App() {
  const darkLight = useSelector((state: RooteState) => state.darklight);

  return (
    <>
      <ThemeProvider theme={darkLight ? darkTheme : lightTheme}>
        <Globalstyle />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
