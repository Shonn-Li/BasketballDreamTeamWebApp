import React from "react";
import { useState } from "react";
// import SearchBar from 'material-ui-search-bar';
import { Checkbox } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import FilterListIcon from "@mui/icons-material/FilterList";
import SortIcon from "@mui/icons-material/Sort";
import ToggleButton from "@mui/material/ToggleButton";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import PlayerCard from "./PlayerCard.js";

const onSubmitForm = (e) => {
    e.preventDefault();
};

const SearchBar = ({ setSearchQuery }) => (
    <form onSubmit={onSubmitForm}>
        <TextField
            sx={{
                width: 500,
            }}
            id="search-bar"
            className="text"
            //   onKeyPress={(e) => {
            //     if (e.key === 'Enter') {
            //       setSearchQuery(e.target.value);
            //     }
            //   }}
            onInput={(e) => {
                setSearchQuery(e.target.value);
            }}
            onSubmit="return false;"
            label="Search a player name"
            variant="outlined"
            placeholder="Search..."
            size="medium"
        />
    </form>
);

function Main() {
    const [searchQuery, setSearchQuery] = useState("");
    const [order, setOrder] = React.useState("desc");
    const [clicked, setClicked] = useState();

    const handleOrder = (event, newOrder) => {
        setOrder(newOrder);
    };
    const [sort, setSort] = React.useState("");

    const handleChange = (event) => {
        setSort(event.target.value);
    };
    return (
        <>
            <div
                style={{
                    display: "flex",
                    alignSelf: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    padding: 20,
                }}
            >
                <h1>Basketball Players</h1>
            </div>
            <div
                style={{
                    display: "flex",
                    alignSelf: "center",
                    flexDirection: "column",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    flexDirection: "row",
                    padding: 20,
                }}
            >
                <Checkbox
                    icon={<StarBorderIcon />}
                    checkedIcon={<StarIcon />}
                />
                {/* <ToggleButton>
      <StarBorderIcon />
     </ToggleButton> */}
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

                <ToggleButton type="submit" aria-label="search">
                    <SearchIcon />
                </ToggleButton>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={sort}
                            label="Sort By"
                            onChange={handleChange}
                        >
                            <MenuItem value={""}>ID</MenuItem>
                            <MenuItem value={"Height"}>Height</MenuItem>
                            <MenuItem value={"Age"}>Age</MenuItem>
                            <MenuItem value={"Position"}>Position</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Checkbox
                    icon={<ArrowDownwardIcon />}
                    checkedIcon={<ArrowUpwardIcon />}
                />
            </div>
            <PlayerCard order={order} searchQuery={searchQuery} filter={sort} />
        </>
    );
}
export default Main;
