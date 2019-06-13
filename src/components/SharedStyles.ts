export const buttonWithMargin = (theme: any) => ({
  marginTop: theme.spacing(6),
  [theme.breakpoints.down("md")]: {
    marginTop: theme.spacing(4)
  },
  [theme.breakpoints.down("xs")]: {
    marginTop: theme.spacing(2)
  }
});

export const dividerWithMargin = (theme: any) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  }
});

export const topBottomImageWrapper = (theme: any) => ({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: theme.spacing(3),
  marginTop: theme.spacing(3)
});

export const imageWrapper = (theme: any) => ({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  marginBottom: theme.spacing(3)
});

export const imageShiftWrapper = (theme: any) => ({
  overflow: "hidden",
  width: "100%",
  [theme.breakpoints.up("xs")]: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

export const pageContainer = (theme: any) => ({
  width: "100vw",
  height: "100vh",
  [theme.breakpoints.down("md")]: {
    fontSize: "15px",
    height: "600px"
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "15px",
    height: "500px"
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "10px",
    height: "330px"
  },
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  overflow: "hidden"
});
