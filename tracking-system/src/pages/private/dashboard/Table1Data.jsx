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
import Chip from "@mui/material/Chip";

function createData(id, task, name, department, date, status, action, profile) {
  return { id, task, name, department, date, status, action, profile };
}

const getStatusColor = (status) => {
  if (status === "Completed") {
    return "#64DA6950"; // Green color for completed status
  } else if (status === "In Progress") {
    return "#F6913450"; // Orange color for in progress status
  } else if (status === "Pending") {
    return "#33ADD150"; // Blue color for pending status
  } else {
    return ""; // Default color or handle other statuses as needed
  }
};

const rows = [
  createData(
    1,
    "Buy Fruits",
    "Kyle Atuel",
    "R&D",
    "22 Mar 2024 8:15am",
    "Completed",
    "View",
    kyle
  ),
  createData(
    2,
    "Fix Computer",
    "Neil Clifford Pagara",
    "Shared Services",
    "20 Mar 2024 2:40pm",
    "Completed",
    "View",
    nil
  ),
  createData(
    3,
    "Clean Office",
    "Christian Paul Flores",
    "Intern",
    "15 Mar 2024 9:20am",
    "In Progress",
    "View",
    chan
  ),
];
export const Table1Data = () => {
  return (
    <Table aria-label="simple table">
      <TableHead>
        <Typography
          variant="h2"
          paddingTop="15px"
          fontStyle="italic"
          pl={2}
          color="#00000075;">
          Recent Tasks
        </Typography>
        <TableRow>
          <TableCell>No.</TableCell>
          <TableCell align="left">Task</TableCell>
          <TableCell align="left">Assignee</TableCell>
          <TableCell align="left">Department</TableCell>
          <TableCell align="left">Date Created</TableCell>
          <TableCell align="left">Status</TableCell>
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
            <TableCell align="left">{row.task}</TableCell>
            <TableCell align="left">
              <Stack direction="row" sx={{ alignItems: "center", gap: 2 }}>
                <Avatar alt={row.name} src={row?.profile} />
                {row.name}
              </Stack>
            </TableCell>
            <TableCell align="left">{row.department}</TableCell>
            <TableCell align="left">{row.date}</TableCell>
            <TableCell align="left">
              <Stack direction="row" spacing={1}>
                <Chip
                  variant="outlined"
                  label={row.status}
                  style={{
                    borderColor: getStatusColor(row.status),
                    backgroundColor: getStatusColor(row.status),
                  }}
                />
              </Stack>
            </TableCell>
            <TableCell align="left">{row.action}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
