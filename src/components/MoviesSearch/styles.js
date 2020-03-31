export const styles = theme => ({
  search: {
    posititon: "relative",
    width: "100vh"
  },
  searchIcon: {
    widht: theme.spacing(9),
    height: "100%",
    posititon: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(10)
  }
})
