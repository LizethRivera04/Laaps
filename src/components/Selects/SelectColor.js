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

const SelectColor = ({userAutoData, setUserAutoData}) => {
  const classes = useStyles();
  const [color, setColor] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (e) => {
    setUserAutoData({...userAutoData, [e.target.name]: e.target.value});
    setColor(e.target.value)
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
          name="color"
          onChange={handleChange}
        >
          <MenuItem value="Blanco">Blanco</MenuItem>
          <MenuItem value="Negro">Negro</MenuItem>
          <MenuItem value="Rojo">Rojo</MenuItem>
          <MenuItem value="Gris">Gris</MenuItem>
          <MenuItem value="Plata">Plata</MenuItem>
          <MenuItem value="Azul">Azul</MenuItem>
          <MenuItem value="Vino">Vino</MenuItem>
          <MenuItem value="Cafe">Cafe</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectColor;