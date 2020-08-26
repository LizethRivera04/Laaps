import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(0),
  },
  formControl: {
    margin: theme.spacing(0),
    minWidth: 250,
  },
}));

const SelectColor = () => {
  const classes = useStyles();
  const [color, setColor] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button className={classes.button} onClick={handleOpen}>
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Color*</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={color}
          onChange={handleChange}
        >
          <MenuItem value={1}>Blanco</MenuItem>
          <MenuItem value={2}>Negro</MenuItem>
          <MenuItem value={3}>Rojo</MenuItem>
          <MenuItem value={4}>Gris</MenuItem>
          <MenuItem value={5}>Plata</MenuItem>
          <MenuItem value={6}>Azul</MenuItem>
          <MenuItem value={7}>Vino</MenuItem>
          <MenuItem value={7}>Cafe</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectColor;