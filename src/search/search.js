import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top



export default function FreeSolo() {
  const [inputsearch, setInputsearch] = useState("");

  const handleInput = (data) => {
    console.log(data);
    setInputsearch(data);
  };
  
  return (
    <Stack spacing={2} sx={{ width: 500 }}>
          <div className="inputsearch">
            <React.Fragment>
              <TextField
               
                label="Search input"
                onChange={(e) => handleInput(e.target.value)}
              />
              <Link to =  { (inputsearch == "") ?  '/' : `/productSearch/${inputsearch}`}>
                <div className="buttonSearch">
                  <SearchIcon />
                </div>
              </Link>
            </React.Fragment>
          </div>
        {/* )}
      /> */}
    </Stack>
  );
}
