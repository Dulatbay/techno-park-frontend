import {getGradient} from "@/app/theme.tsx";
import {Box, Button, Divider, Paper, Stack, TextField, Typography} from "@mui/material";
import {PasswordField} from "@/f_shared/PasswordField";
import {useState} from "react";
import {Link} from "react-router-dom";

const linkStyle : React.CSSProperties = {
    margin: "1rem",
    textDecoration: "none",
    color: '#bebebe',
    textAlign: "center"
};

export function LoginPage() {
    const [password, setPassword] = useState("");
    return (
        <>
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
                            <Typography fontWeight={"600"}
                                        variant={"h4"}>TECH-PARK-NET</Typography>
                            <Typography color={"text.secondary"}>Login</Typography>
                        </Stack>
                        <form>
                            <TextField
                                margin={"normal"}
                                required
                                fullWidth
                                variant={"outlined"}
                                label={"Email or username"}
                            ></TextField>
                            <PasswordField
                                margin={"normal"}
                                password={password}
                                setPassword={setPassword}
                                label={"Password"}/>
                            <Button
                                sx={{
                                    marginTop: "15px"
                                }}
                                size={"large"}
                                fullWidth
                                variant={"contained"}>
                                Sign in
                            </Button>
                        </form>
                        <Divider/>
                        <Link to={"/registration"} style={linkStyle}>Don't have an account?</Link>
                    </Stack>
                </Paper>
            </Box>
        </>
    );
}