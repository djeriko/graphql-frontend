import React, { useState } from "react"
import Fab from "@material-ui/core/Fab"
import AddIcon from "@material-ui/icons/Add"

// import MoviesTable from ".../"
// import MoviesForm

import withHocs from "./MoviesHoc"

function Movies( classes ) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const [genre, setGenre] = useState("")
  const [watched, setWatched] = useState(false)
  const [rate, setRate] = useState(0)
  const [directorId, setDirectorId] = useState("")

  const handleClickOpen = (data = {}) => {
    setOpen(true)
    setDirectorId(data.director ? data.director.id : "")
  }

  const handleClose = () => {
    setName("")
    setGenre("")
    setWatched(false)
    setRate(0)
    setDirectorId("")
    setOpen(false)
  }

  const handleSelectChange = ({ target }) => {
    setName(target.name)
  }
  const handleCheckboxChange = name => ({ target }) => {
    setName({ [name]: target.checked })
  }
  const handleChange = name => ({ target }) => {
    setName({ [name]: target.value })
  }

  return (
    <>
      <Fab
        onClick={() => handleClickOpen()}
        color="primary"
        aria-label="Add"
        className={classes.fab}
      >
        <AddIcon/>
      </Fab>
    </>
  )
}

export default withHocs(Movies) 
