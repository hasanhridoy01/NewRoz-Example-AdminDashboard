import { Stack, Typography } from "@mui/material";
import React from "react";
import Rating from "@mui/material/Rating";

const Sales = () => {
  const [value, setValue] = React.useState(4);

  return (
    <div style={{ margin: "0px", padding: "0px", overflow: "hidden" }}>
      <div
        className=""
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div className="">
          <Typography variant="h5">Hi, welcome back!</Typography>
          <Typography variant="body2" sx={{ color: "gray" }}>
            Sales monitoring dashboard template.
          </Typography>
        </div>
        <div className="">
          <Stack direction={"row"} spacing={3}>
            <div className="">
              <Typography variant="body1" sx={{ color: "gray" }}>
                Customer Ratings
              </Typography>
              <Rating name="read-only" value={value} readOnly />
            </div>
            <div className="">
              <Typography variant="body1" sx={{ color: "gray" }}>
                Online Sales
              </Typography>
              <Typography sx={{ color: "#000000" }}>563,275</Typography>
            </div>
            <div className="">
              <Typography variant="body1" sx={{ color: "gray" }}>
                Offline Sales
              </Typography>
              <Typography sx={{ color: "#000000" }}>783,675</Typography>
            </div>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Sales;
