import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Input from '@material-ui/core/Input';
import MaskedInput from 'react-text-mask';
import PropTypes from 'prop-types';


function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={[ /[A-Z][a-z]/, /\d/, /\d/, '-', /\d/, /\d/,/\d/, /\d/, '-', /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};


//Copyright Component
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Vehicles
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

//Inline CSS
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

//Vehicle Form Component
export default function VehicleForm() {
  const classes = useStyles();
  const [type, setType] = React.useState("");

  const handleChange = (event) => {
    setType(event.target.value);
  };
  
  const  textmask = 'AB-1234-CD';
  const models = ["Audi", "BMW", "Citroen", "Honda", "Hyundai", "Mercedes", "Nissan", "Opel", "Suzuki", "Toyota", "Volkswagen"];
  
const LicenceNumber = name => event => {
  this.setState({
    [name]: event.target.value,
  });
}
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AirportShuttleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Vehicle Entry Form
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="vehicleName"
                name="vehicleName"
                variant="outlined"
                required
                fullWidth
                id="vehicleName"
                label="Vehicle Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl required style={{ width: "100%" }}>
                <InputLabel id="demo-simple-select-required-label" style={{ marginTop: "-3px", marginLeft: "15px" }}>
                  Vehicle Type
                </InputLabel>
                <Select
                  placeholder="Vehicle Type"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  variant="outlined"
                  value={type}
                  onChange={handleChange}
                >
                  <MenuItem value={"car"}>Car</MenuItem>
                  <MenuItem value={"van"}>Van</MenuItem>
                  <MenuItem value={"truck"}>Truck</MenuItem>
                  <MenuItem value={"container"}>Container</MenuItem>
                  <MenuItem value={"trailer"}>Trailer</MenuItem>
                  <MenuItem value={"dumper"}>Dupmer</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                id="combo-box-demo"
                options={models}
                style={{ width: "100%" }}
                renderInput={(params) => <TextField {...params} label="Models" variant="outlined" />}
              />
            </Grid>
            <Grid item xs={12}>
            <InputLabel htmlFor="formatted-text-mask-input">License plate number</InputLabel>
          <Input
            value={textmask}
            onChange={LicenceNumber('textmask')}
            id="formatted-text-mask-input"
            inputComponent={TextMaskCustom}
          />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="date"
                label="Last registration date"
                type="date"
                defaultValue="2021-08-09"
                disableFuture= 'true'
                style={{ width: "100%" }}
              />
            </Grid>
            <TextField
                id="date"
                label="Date of registration submission"
                type="date"
                defaultValue="2017-05-24"
                minDate='Date(1900-01-01)' //to be changed in Last registration Date value
                style={{ width: "98%" }}
              />
            <Grid item xs={12}></Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Submit
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/grid" variant="body2">
                Grid of vehicles
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
