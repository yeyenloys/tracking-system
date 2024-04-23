import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { Box, Modal } from "@mui/material";
import { Table2Data } from "./Table2Data";
import { ModalAssignee } from "./ModalAssignee";

export const Table2 = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
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
        <Table2Data onView={handleOpenModal} />
      </TableContainer>
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
          <ModalAssignee />
        </Box>
      </Modal>
    </Box>
  );
};
