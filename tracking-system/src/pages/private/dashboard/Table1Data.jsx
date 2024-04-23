import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Typography, Modal } from "@mui/material";
import { Avatar, Stack } from "@mui/material";
import Chip from "@mui/material/Chip";
import axiosApi from "../../../AxiosApi";
import kyle from "../../../assets/kyle.jpg";
import chan from "../../../assets/chan.jpg";
import nil from "../../../assets/nil.jpg";
import { ModalPending } from "./ModalView";

function createData(
  id,
  task_name,
  first_name,
  last_name,
  department_id,
  date,
  status,
  action,
  profile
) {
  return {
    id,
    task_name,
    first_name,
    last_name,
    department_id,
    date,
    status,
    action,
    profile,
  };
}

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

const getStatusColor = (status) => {
  switch (status) {
    case "completed":
      return "#64DA6950";
    case "in progress":
      return "#F6913450";
    case "pending":
      return "#33ADD150";
    default:
      return "";
  }
};

export const Table1Data = ({ onView }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axiosApi.get(`/user/assigner/recent-tasks`);
        setTasks(response.data.tasks);
        console.log(response);
      } catch (error) {
        console.error("API Error:", error);
      }
    };

    fetchTasks();
  }, [onView]);

  console.log(tasks);

  return (
    <Table aria-label="simple table">
      <TableHead>
        <Typography
          variant="h2"
          paddingTop="15px"
          fontStyle="italic"
          pl={2}
          color="#00000075">
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
        {Array.isArray(tasks) && tasks.length > 0 ? (
          tasks.map(
            (row, key) =>
              key < 3 && (
                <TableRow
                  key={tasks.id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    fontSize: "18px",
                  }}>
                  <TableCell align="left">{row.id}</TableCell>
                  <TableCell align="left">{row.task_name}</TableCell>
                  <TableCell align="left">
                    <Stack
                      direction="row"
                      sx={{ alignItems: "center", gap: 2 }}>
                      <Avatar alt={row.name} src={row?.profile} />
                      {row?.users[0]?.first_name +
                        ", " +
                        row?.users[0]?.last_name}
                    </Stack>
                  </TableCell>
                  <TableCell align="left">
                    {row.users[0]?.department_name}
                  </TableCell>
                  <TableCell align="left">
                    {row.created_at
                      ? `${new Date(row?.created_at).toLocaleDateString(
                          "en-AU",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )} ${new Date(row?.created_at).toLocaleTimeString(
                          "en-US",
                          {
                            hour: "2-digit",
                            minute: "2-digit",
                          }
                        )}`
                      : null}
                  </TableCell>
                  <TableCell align="left">
                    <Stack direction="row" spacing={1}>
                      <Chip
                        variant="outlined"
                        label={row.status}
                        style={{
                          textTransform: "capitalize",
                          borderColor: getStatusColor(row.status),
                          backgroundColor: getStatusColor(row.status),
                        }}
                      />
                    </Stack>
                  </TableCell>
                  <TableCell align="left">
                    <button
                      style={{
                        fontSize: "13px",
                        borderColor: "transparent",
                        backgroundColor: "transparent",
                      }}
                      onClick={() => onView(row)}>
                      View
                    </button>
                  </TableCell>
                </TableRow>
              )
          )
        ) : (
          <TableRow>
            <TableCell colSpan={7} align="center">
              No tasks found.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
