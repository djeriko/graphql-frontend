import React, { useState } from "react"
import Paper from "@material-ui/core/Paper"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Checkbox from "@material-ui/core/Checkbox"
import MoreIcon from "@material-ui/icons/MoreVert"
import IconButton from "@material-ui/core/IconButton"
import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"
import DeleteIcon from "@material-ui/icons/Delete"
import CreateIcon from "@material-ui/icons/Create"

import MovieDialog from "../MoviesDialog/MoviesDialog"

import withHocs from "./MoviesTableHoc"

const movies = [
  {
    id: 1,
    name: "Pulp Fiction",
    genre: "Crime",
    rate: 10,
    director: { name: "Quentin Tarantino" },
    watched: true
  },
  {
    id: 2,
    name: "Lock, Stock and Two Smoking Barrels",
    genre: "Crime-comedy",
    rate: 9,
    director: { name: "Guy Ritchie" },
    watched: false
  }
]

function MoviesTable({ classes, onOpen, onClose, data }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const [openDialog, setOpenDialog] = useState(false)
  // const [data, setData] = useState({ activeElem: {} })

  const handleDialogOpen = () => {
    setOpenDialog(true)
  }
  const handleDialogClose = () => {
    setOpenDialog(false)
  }

  const handleClick = ({ currentTarget }, data) => {
    setAnchorEl(currentTarget)
    // setData(data)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleEdit = () => {
    onOpen(data)
    handleClose()
  }

  const handleDelete = () => {
    handleDialogOpen()
    handleClose()
  }
  
  console.log(data)

  return (
    <>
      <MovieDialog
        open={openDialog}
        handleClose={handleDialogClose}
        id={data.id}
      />
      <Paper className={classes.root}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Genre</TableCell>
              <TableCell align="right">Rate</TableCell>
              <TableCell>Director</TableCell>
              <TableCell>Watched</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {movies.map(movie => {
              return (
                <TableRow key={movie.id}>
                  <TableCell>{movie.name}</TableCell>
                  <TableCell>{movie.genre}</TableCell>
                  <TableCell>{movie.rate}</TableCell>
                  <TableCell>{movie.director.name}</TableCell>
                  <TableCell>
                    <Checkbox checked={movie.watched} disabled />
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      color="inherit"
                      onClick={e => handleClick(e, movie)}
                    >
                      <MoreIcon />
                    </IconButton>
                    <Menu
                      id="simple-menu"
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleEdit}>
                        <CreateIcon />
                        Edit
                      </MenuItem>
                      <MenuItem onClick={handleDelete}>
                        <DeleteIcon />
                        Delete
                      </MenuItem>
                    </Menu>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </Paper>
    </>
  )
}

export default withHocs(MoviesTable)
