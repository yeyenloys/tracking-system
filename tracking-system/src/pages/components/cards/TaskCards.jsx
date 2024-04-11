import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export const TaskCards = ({ icon, name, count, type }) => {
  return (
    <Box sx={{ width: "100%", boxShadow: 3, borderRadius: 2 }}>
      <Box display="flex" justifyContent="space-between" padding="10px">
        <Typography fontSize="40px">{count} </Typography>
        <Box
          width="35px"
          height="35px"
          sx={{
            padding: 2.5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor:
              type === 1
                ? "#F6913450 "
                : type === 2
                ? "#64DA6950"
                : "#33ADD150",
          }}>
          <img src={icon} alt="" />
        </Box>
      </Box>
      <Box
        px={2}
        width="auto"
        marginBottom="16px"
        style={{
          backgroundColor:
            type === 1 ? "#F6913450 " : type === 2 ? "#64DA6950" : "#33ADD150",
        }}>
        <Typography variant="v2">{name}</Typography>
      </Box>
    </Box>
  );
};
