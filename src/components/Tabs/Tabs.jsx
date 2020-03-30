import React, { useState } from "react"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typograhy from "@material-ui/core/Typography"
import SwipeableViews from "react-swipeable-views"
import MovieCreationIcon from "@material-ui/icons/MovieCreation"
import CameraIcon from "@material-ui/icons/Camera"

import Directors from "../Directors/Directors"

import withHoc from "./TabsHoc"

const TabContainer = ({ children, dir }) => (
  <Typograhy component="div" dir={dir} style={{ padding: 8 * 3 }}>
    {children}
  </Typograhy>
)

function SimpleTabs(classes, theme) {
  const [value, setValue] = useState(0)

  const handleChange = (event, value) => {
    setValue(value)
  }

  const handleChangeIndex = index => {
    setValue(index)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs variant="fullWidth" value={value} onChange={handleChange}>
          <Tab label="Directors" icon={<MovieCreationIcon/>}/>
          <Tab label="Movies" icon={<CameraIcon/>}/>
        </Tabs>
        <SwipeableViews axis={theme.direction === "rtl" ? "x-reverse" : "x"} index={value} onChangeIndex={handleChangeIndex}>
          <TabContainer dir={theme.direction}><Directors/></TabContainer>
          <TabContainer></TabContainer>
        </SwipeableViews>
      </AppBar>
    </div>
  )
}

export default withHoc(SimpleTabs)
