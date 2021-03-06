import React, { useState } from "react"
import Fab from "@material-ui/core/Fab"
import AddIcon from "@material-ui/icons/Add"
import DirectorsTable from "../DirectorsTable/DirectorTable"
import DirectorsForm from "../DirectorsForm/DirectorsForm"

import withHocs from "./DirectorsHoc"

function Directors({ classes }) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const [id, setId] = useState(null)
  const [age, setAge] = useState(0)

  const handleClickOpen = (data = {}) => {
    setOpen(true)
    setName(data.name)
    setId(data.id)
    setAge(data.age)
  }

  const handleChange = name => ({ target }) => {
    if (name === "name") {
      setName(target.value)
    }
    if (name === "age") {
      setAge(target.value)
    }
  }

  const handleClose = () => {
    setOpen(false)
    setName("")
    setAge(0)
    setId(null)
  }

  return (
    <>
      <DirectorsForm
        handleChange={handleChange}
        selectedValue={{ name, age, id }}
        open={open}
        onClose={handleClose}
      />
      <div className={classes.wrapper}>
        <DirectorsTable onOpen={handleClickOpen} onClose={handleClose} />
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

export default withHocs(Directors)
