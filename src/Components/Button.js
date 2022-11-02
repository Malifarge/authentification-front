import Button from '@mui/material/Button';

const Buttons = ({variant,text,color,handleClick,background,border, type}) =>{
    return(
        <Button variant={variant} type={type} onClick={handleClick} style={{"color" : `${color}`, "background" : `${background}`, "border" : `3px solid ${border}`}}>{text}</Button>
    )
}

export default Buttons