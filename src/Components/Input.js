import TextField from "@mui/material/TextField";

const Input = ({ type, required, label, handleChange, variant, name }) => {
  return (
    <TextField
      style={{
        background: "#3F3F3F",
        color: "#FFFFF",
        borderRadius: "13px",
        width: "90%",
      }}
      name={name}
      required={required}
      type={type}
      label={label}
      onChange={handleChange}
      variant={variant}
    />
  );
};

export default Input;
