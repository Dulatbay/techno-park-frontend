import {Box, Button, Divider, Paper, Stack, TextField, Typography} from "@mui/material";
import {getGradient} from "@/app/theme.tsx";
import {PasswordField} from "@/f_shared/PasswordField";
import {useState} from "react";
import {Link} from "react-router-dom";

const linkStyle: React.CSSProperties = {
    margin: "1rem",
    textDecoration: "none",
    color: '#bebebe',
    textAlign: "center"
};

export function RegistrationPage() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    return (
        <Box sx={{
            padding: "4px",
            borderRadius: "5px",
            background: getGradient(),
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
        }}>
            <Paper>
                <Stack sx={{
                    width: "500px",
                    borderRadius: "5px",
                    padding: "60px 40px",
                    justifyContent: "center",
                    alignItems: "stretch",
                }}
                       spacing={2}>
                    <Stack alignItems={"center"}>
                        <Typography>Welcome to</Typography>
                        <Typography fontWeight={"600"}
                                    variant={"h4"}>TECH-PARK-NET</Typography>
                    </Stack>
                    <form>
                        <TextField
                            margin={"normal"}
                            required
                            fullWidth
                            variant={"outlined"}
                            label={"Email"}
                            placeholder={"example@mail.ru"}
                        ></TextField>
                        <TextField
                            margin={"normal"}
                            required
                            fullWidth
                            variant={"outlined"}
                            label={"First name"}
                            placeholder={"Akhan"}
                        ></TextField>
                        <TextField
                            margin={"normal"}
                            required
                            fullWidth
                            variant={"outlined"}
                            label={"Last name"}
                            placeholder={"Dulatbay"}
                        ></TextField>
                        <PasswordField
                            margin={"normal"}
                            password={password}
                            setPassword={setPassword}
                            label={"Password"}/>
                        <PasswordField
                            margin={"normal"}
                            password={confirmPassword}
                            setPassword={setConfirmPassword}
                            label={"Confirm password"}/>
                        <Button
                            sx={{
                                marginTop: "15px"
                            }}
                            size={"large"}
                            fullWidth
                            variant={"contained"}>
                            Connect
                        </Button>
                    </form>
                    <Divider/>
                    <Link to={"/login"} style={linkStyle}>Already have an account?</Link>
                </Stack>
            </Paper>
        </Box>
    );
}