import React, { useState } from "react"
import Fab from "@material-ui/core/Fab"
import AddIcon from "@material-ui/icons/Add"

import MoviesTable from "../MoviesTable/MoviesTable"
import MoviesForm from "../MoviesForm/MoviesForm"

import withHocs from "./MoviesHoc"

function Movies({ classes, data }) {
  const [id, setId] = useState("")
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const [genre, setGenre] = useState("")
  const [watched, setWatched] = useState(false)
  const [rate, setRate] = useState(0)
  const [directorId, setDirectorId] = useState("")

  const handleClickOpen = (data = {}) => {
    setOpen(true)
    console.log(data)
    setId(data.id)
    setName(data.name)
    setGenre(data.genre)
    setRate(data.rate)
    setDirectorId(data.director ? data.director.id : "")
  }

  const handleClose = () => {
    setId("")
    setName("")
    setGenre("")
    setWatched(false)
    setRate(0)
    setDirectorId("")
    setOpen(false)
  }

  const handleSelectChange = ({ target }) => {
    console.log('Yo yo')
    setDirectorId(target.value)
  }
  const handleCheckboxChange = name => ({ target }) => {
    if (name === "watched") setWatched(target.checked)
  }
  const handleChange = name => ({ target }) => {
    if (name === "name") setName(target.value)
    if (name === "genre") setGenre(target.value)
    if (name === "rate") setRate(target.value)
  }

  return (
    <>
      <MoviesForm
        handleChange={handleChange}
        handleSelectChange={handleSelectChange}
        handleCheckboxChange={handleCheckboxChange}
        selectedValue={{ id, name, genre, watched, rate, directorId }}
        open={open}
        onClose={handleClose}
      />
      <div className={classes.wrapper}>
        <MoviesTable onOpen={handleClickOpen} onClose={handleClose} />
        <Fab
          onClick={() => handleClickOpen()}
          color="primary"
          aria-label="Add"
          className={classes.fab}
        >
          <AddIcon />
        </Fab>
      </div>
    </>
  )
}

export default withHocs(Movies)
