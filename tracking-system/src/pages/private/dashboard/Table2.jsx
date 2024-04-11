import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { Table2Data } from "./Table2Data";

export const Table2 = () => {
  return (
    <Box px={4}>
      <TableContainer
        component={Paper}
        sx={{
          height: "100%",
          width: "100%",
          boxShadow: 5,
          marginTop: "35px",
        }}>
        <Table2Data />
      </TableContainer>
    </Box>
  );
};
