import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography, Modal } from "@mui/material";
import { Box } from "@mui/material";
import { Table1Data } from "./Table1Data";
import { ModalPending } from "./ModalView";

export const Table1 = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [data, setData] = React.useState({});

  const handleOpenModal = (e) => {
    setData(e);
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
          marginBottom: "35px",
        }}>
        <Table1Data onView={handleOpenModal} />
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
          <ModalPending onClose={handleCloseModal} data={data} />
        </Box>
      </Modal>
    </Box>
  );
};
