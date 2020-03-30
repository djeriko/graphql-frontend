import React from 'react';
import { ThemeProvider as MuiThemeProvider} from "@material-ui/core/styles"
import SimpleTabs from "./components/Tabs/Tabs"
import theme from "./components/theme"
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <SimpleTabs/>
    </MuiThemeProvider>
  );
}

export default App;
