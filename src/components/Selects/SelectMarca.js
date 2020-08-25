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
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
}));

const SelectMarca = () => {
  const classes = useStyles();
  const [marca, setMarca] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setMarca(event.target.value);
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
        <InputLabel id="demo-controlled-open-select-label">Marca*</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={marca}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>VW-Jetta</MenuItem>
          <MenuItem value={2}>VW-Passat</MenuItem>
          <MenuItem value={3}>VW-Golf</MenuItem>
          <MenuItem value={4}>Ford-Fiesta</MenuItem>
          <MenuItem value={5}>Ford-Escape</MenuItem>
          <MenuItem value={6}>Ford-Edge</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectMarca;