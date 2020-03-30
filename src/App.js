import React from 'react';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider"
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
