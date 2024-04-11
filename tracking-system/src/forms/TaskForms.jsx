import React, { useState } from "react";
import {
  Box,
  Typography,
  Modal,
  Button,
  CircularProgress,
} from "@mui/material";
import NewTask from "../../src/assets/NewTask.svg";
import { NewTaskForm } from "./NewTaskForm";

export const TaskForms = () => {
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = React.useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      {loading && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}>
          <CircularProgress color="primary" />
        </Box>
      )}
      <Button
        onClick={handleOpenModal}
        sx={{
          width: "50%",
          boxShadow: 5,
          borderRadius: 2,
          backgroundColor: "#21293C",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          "&:hover": {
            backgroundColor: "#1A1F2E",
          },
        }}>
        <Box>
          <img src={NewTask} alt="New Task" height={25} width={25} />
        </Box>
        <Typography
          textTransform="none"
          fontSize="16px"
          fontWeight={500}
          color="white">
          Add New Task
        </Typography>
      </Button>
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            width: "500px",
            borderTopRightRadius: "15px",
            borderTopLeftRadius: "15px",
          }}>
          <NewTaskForm setLoading={setLoading} onClose={handleCloseModal} />
        </Box>
      </Modal>
    </>
  );
};
