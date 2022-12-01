import { Button, CssBaseline, Grid, Card, Tabs, Typography, Tab, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { unSetUserToken } from "../features/authSlice";
import { getToken, removeToken } from "../services/LocalStorageService";
import ChangePassword from "./Auth/ChangePassword";
import { useGetLoggedUserQuery } from "../services/userAuthApi";
import { useEffect, useState } from "react";
import { setUserInfo, unsetUserInfo } from "../features/userSlice";
import Navbar from "../components/Navbar";
const TabPanel = (props) => {
    const { children, value, index } = props;
    return (
        <div role="tabpanel" hidden={value !== index}>
            {value === index && <Box>{children}</Box>}
        </div>
    );
};

const Dashboard = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleLogout = () => {
        dispatch(unsetUserInfo({ name: "", email: "" }));
        dispatch(unSetUserToken({ access_token: null }));
        removeToken();
        navigate("/login");
    };
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { access_token } = getToken();
    const { data, isSuccess } = useGetLoggedUserQuery(access_token);

    const [userData, setUserData] = useState({
        email: "",
        name: "",
    });

    // Store User Data in Local State
    useEffect(() => {
        if (data && isSuccess) {
            setUserData({
                email: data.email,
                name: data.name,
            });
        }
    }, [data, isSuccess]);

    // Store User Data in Redux Store
    useEffect(() => {
        if (data && isSuccess) {
            dispatch(
                setUserInfo({
                    email: data.email,
                    name: data.name,
                })
            );
        }
    }, [data, isSuccess, dispatch]);

    return (
        <>
            <Navbar />
            <CssBaseline />
            <Grid class='setting-container' container>
                <Card sx={{ width: "100%", height: "100%" }}>
                    <Box sx={{ mx: 3, height: 530 }}>
                        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                            <Tabs
                                value={value}
                                textColor="secondary"
                                indicatorColor="secondary"
                                onChange={handleChange}
                            >
                                <Tab
                                    label="Profile"
                                    sx={{ textTransform: "none", fontWeight: "bold" }}
                                ></Tab>
                                <Tab
                                    label="Change Password"
                                    sx={{ textTransform: "none", fontWeight: "bold" }}
                                ></Tab>
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    flexWrap: "wrap",
                                    maxWidth: 600,
                                    mx: 4,
                                }}
                            >
                                <h1>Profile</h1>
                                <Typography variant="h5">Email: {userData.email}</Typography>
                                <Typography variant="h5">Name: {userData.name}</Typography>

                                <Box textAlign="center">
                                    <Button

                                        variant="contained"
                                        color="warning"
                                        size="large"
                                        onClick={handleLogout}
                                        sx={{ mt: 3, mb: 2, px: 5 }}
                                    >
                                        Logout
                                    </Button>
                                </Box>
                            </Box>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <ChangePassword />
                        </TabPanel>
                    </Box>
                    <Box textAlign="center" sx={{ mt: 2 }}>
                        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                        </Typography>
                    </Box>
                </Card>
            </Grid>
        </>
    );
};

export default Dashboard;
