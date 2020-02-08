import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
   button: {
      marginTop: theme.spacing(2),
   },
   formControl: {
      margin: theme.spacing(1),
      minWidth: 80,
   },
}));

export default function ControlledOpenSelect({ changeFilter }) {
   const classes = useStyles();
   const [age, setAge] = React.useState('');
   const [open, setOpen] = React.useState(false);

   const handleChange = event => {
      setAge(event.target.value);
      changeFilter(event.target.value);
   };

   const handleClose = () => {
      setOpen(false);
   };

   const handleOpen = () => {
      setOpen(true);
   };

   return (
      <form autoComplete="off">
         <FormControl className={classes.formControl}>
            <InputLabel htmlFor="demo-controlled-open-select">
               Filter
            </InputLabel>
            <Select
               open={open}
               onClose={handleClose}
               onOpen={handleOpen}
               value={age}
               onChange={handleChange}
               inputProps={{
                  name: 'age',
                  id: 'demo-controlled-open-select',
               }}
            >
               <MenuItem value="all">All</MenuItem>
               <MenuItem value="open">Open</MenuItem>
               <MenuItem value="closed">Closed</MenuItem>
            </Select>
         </FormControl>
      </form>
   );
}
