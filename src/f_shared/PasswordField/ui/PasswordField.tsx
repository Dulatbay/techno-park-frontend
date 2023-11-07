import {
    FilledInput,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import React, {useCallback} from "react";

type Props = {
    password: string,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
    label: string,
    margin: string
};

export function PasswordField(props: Props) {
    const onOutlinedInputChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        props.setPassword(event.target.value)
        console.log(event.target.value)
    }, [props]);

    const [showPassword, setShowPassword] = React.useState(false);


    return (
        <TextField
            margin={props.margin}
            fullWidth
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            content={props.password}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end">
                            {showPassword ? <VisibilityOff/> : <Visibility/>}
                        </IconButton>
                    </InputAdornment>
                )
            }}
            label={props.label}
            onChange={onOutlinedInputChange}/>
    )
}