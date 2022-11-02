import TextField from '@mui/material/TextField';

const Input = ({type,required,label,handleChange,variant})=>{
    return(
        <TextField required={required} type={type} label={label} onChange={handleChange} variant={variant} />
    )
}

export default Input