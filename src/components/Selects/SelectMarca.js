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

const SelectMarca = ({userAutoData, setUserAutoData}) => {
  const classes = useStyles();
  const [marca, setMarca] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (e) => {
    setUserAutoData({...userAutoData, marca: e.target.value});
    setMarca(e.target.value)
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

          <MenuItem value="VW-Jetta">VW-Jetta</MenuItem>
          <MenuItem value="VW-Passat">VW-Passat</MenuItem>
          <MenuItem value="VW-Golf">VW-Golf</MenuItem>
          <MenuItem value="Ford-Fiesta">Ford-Fiesta</MenuItem>
          <MenuItem value="Ford-Escape">Ford-Escape</MenuItem>
          <MenuItem value="Ford-Edge">Ford-Edge</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectMarca;