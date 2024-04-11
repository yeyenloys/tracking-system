import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { Box, Avatar, Stack } from "@mui/material";
import kyle from "../../../assets/kyle.jpg";
import chan from "../../../assets/chan.jpg";
import nil from "../../../assets/nil.jpg";
import action from "../../../assets/action.svg";

function createData(id, name, email, department, progress, action, profile) {
  return { id, name, email, department, progress, action, profile };
}

const rows = [
  createData(1, "Kyle Atuel", "kyleAtuel@gmail.com", "R&D", "12", action, kyle),
  createData(
    2,
    "Neil Clifford Pagara",
    "neilCliffordPagara@gmail.com",
    "Shared Services",
    "10",
    action,
    nil
  ),
  createData(
    3,
    "Christian Paul Flores",
    "christianPaulFlores@gmail.com",
    "Intern",
    "2",
    action,
    chan
  ),
];

export const Table2Data = () => {
  return (
    <Table aria-label="simple table">
      <TableHead>
        <Typography
          variant="h2"
          paddingTop="15px"
          fontStyle="italic"
          pl={2}
          color="#00000075;">
          Assignees
        </Typography>
        <TableRow>
          <TableCell>No.</TableCell>
          <TableCell align="left">Name</TableCell>
          <TableCell align="left">Email Address</TableCell>
          <TableCell align="left">Department</TableCell>
          <TableCell align="left">In Progress Task</TableCell>
          <TableCell align="left">Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
              fontSize: "18px",
            }}>
            {/* <TableCell component="th" scope="row">
              {row.name}
            </TableCell> */}
            <TableCell align="left">{row.id}</TableCell>
            <TableCell align="left">
              <Stack direction="row" sx={{ alignItems: "center", gap: 2 }}>
                <Avatar alt={row.name} src={row?.profile} />
                {row.name}
              </Stack>
            </TableCell>
            <TableCell align="left">{row.email}</TableCell>
            <TableCell align="left">{row.department}</TableCell>
            <TableCell align="left">{row.progress}</TableCell>
            <TableCell align="left">
              <img src={row.action} alt={row.name} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
