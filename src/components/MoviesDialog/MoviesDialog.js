import React from "react"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContent"
import DialogTitle from "@material-ui/core/DialogTitle"
import DeleteForeverIcon from "@material-ui/icons/DeleteForever"
import BlockIcon from "@material-ui/icons/Block"

function MoviesDialog({open, handleClose, id}) {
  const handleDelete = () => {
    handleClose()
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      id={id}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Are you sure that you want to delete element?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-descriprion">
          If you click "Confirm" this element will be removied from data base
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          <BlockIcon /> Cancel
        </Button>
        <Button onClick={handleDelete} color="primary">
          <DeleteForeverIcon /> Confirm
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default MoviesDialog
