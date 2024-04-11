import React, { useState } from "react";
import Box from "@mui/material/Box";
import { TaskCards } from "../../components/cards";
import PendingIcon from "../../../assets/PendingIcon.svg";
import InProgress from "../../../assets/InProgress.svg";
import Completed from "../../../assets/Completed.svg";
import { blue } from "@mui/material/colors";
import { TaskForms } from "../../../forms";
import { Table1 } from "./Table1";
import { Table2 } from "./Table2";
import axiosApi from "../../../AxiosApi";
import { useEffect } from "react";

const Dashboard = () => {
  const [counter, setCounter] = useState([]);
  useEffect(() => {
    axiosApi
      .get("/task/task-counter")
      .then((response) => {
        setCounter(response.data);
        console.log("anhhssgdg", response.data);
      })
      .catch((err) => {
        console.log("Kyle", err);
      });
  }, []);

  return (
    <Box>
      <Box padding="13px">Dashboard</Box>
      <Box
        px={4}
        py={2}
        display="flex"
        gap={5}
        justifyContent="space-evenly"
        width="full">
        <TaskForms />
        <TaskCards
          icon={PendingIcon}
          name="Pending Tasks"
          count={counter.pending}
          type={0}
        />
        <TaskCards
          icon={InProgress}
          name="In Progress Tasks"
          count={counter.inprogress}
          type={1}
        />
        <TaskCards
          icon={Completed}
          name="Completed Tasks"
          count={counter.completed}
          type={2}
        />
      </Box>
      <Table1 />
      <Table2 />
    </Box>
  );
};

export default Dashboard;
