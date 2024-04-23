import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import axiosApi from "../../../AxiosApi";
import {
  Typography,
  Button,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";

const getStatusColor = (status) => {
  switch (status) {
    case "completed":
      return "#64DA69"; // Green color for completed status
    case "in progress":
      return "#F69134"; // Orange color for in progress status
    case "pending":
      return "#33ADD1"; // Blue color for pending status
    default:
      return ""; // Default color or handle other statuses as needed
  }
};

export const ModalPending = ({ onClose, data }) => {
  const [edit, setEdit] = useState(true);
  const [task_id, setTaskID] = useState([data.id]);
  const [taskData, setTaskData] = useState({
    user_id: data?.task_assigner_id,
    department_id: data?.users[0].department_id,
    task_name: data?.task_name,
    task_description: data?.task_description,
    data_created: data?.updated_at,
  });

  useEffect(() => {
    setTaskData({
      user_id: data?.task_assigner_id,
      department_id: data?.users[0].department_id,
      task_name: data?.task_name,
      task_description: data?.task_description,
      data_created: data?.updated_at,
    });
  }, [data]);

  const formattedTime = new Date(data.updated_at).toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  const { handleBlur, handleChange, handleSubmit, values } = useFormik({
    initialValues: taskData,
    // validationSchema: ModalViewSchema,

    onSubmit: async (values) => {
      console.log("Form Values:", {});

      const payload = {
        id: data?.id,
      };

      try {
        // setLoading(true);
        if (data?.status === "pending") {
          if (edit) {
            const response = await axiosApi.post(
              `/user/assigner/task/delete`,
              payload
            );
            toast.error("Task deleted", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              theme: "colored",
            });
          } else {
            const response = await axiosApi.post(`/user/assigner/update`, {
              ...values,
              assignee_id: data.users[0].id,
              task_id: data.id,
            });
            toast.success("Task updated", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              theme: "colored",
            });
          }
        } else {
          const response = await axiosApi.post(`/user/assigner/task/verify`, {
            task_id: data?.id,
          });
          toast.success("Task mark as completed", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            theme: "colored",
          });
        }
        // setLoading(false);
        setTimeout(() => {
          onClose();
        }, 6000);
      } catch (err) {
        console.log("Kyleeee", err);
        // setLoading(false);
        toast.error(err.response.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    },
  });

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        mt={-2.5}
        ml={-2.5}
        sx={{
          backgroundColor: "#21293C",
          borderBottomRightRadius: "15px",
          borderBottomLeftRadius: "15px",
          borderTopRightRadius: "15px",
          borderTopLeftRadius: "15px",
          width: "500px",
          height: "221px",
          position: "relative",
        }}>
        <IconButton
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
            color: "white",
          }}
          onClick={onClose}>
          <CloseIcon />
        </IconButton>
        <Typography
          display="flex"
          justifyContent="center"
          variant="v3"
          color="white"
          paddingTop="20px"
          marginBottom="25px">
          Task Details
        </Typography>
        <Stack direction="row" justifyContent="space-between">
          <Typography
            sx={{
              width: "100%",
              fontSize: 12,
              fontWeight: "400px",
              color: "#FFFFFF75",
              px: "20px",
              py: "10px",
            }}>
            Status
          </Typography>
          <Typography
            pr={3}
            display="flex"
            justifyContent="flex-end"
            sx={{
              width: "100%",
              fontSize: 14,
              fontWeight: "400px",
              color: getStatusColor(data?.status),
              py: "10px",
              textTransform: "capitalize",
            }}>
            {data?.status}
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography
            sx={{
              fontSize: 12,
              fontWeight: "400px",
              color: "#FFFFFF75",
              px: "20px",
              py: "10px",
            }}>
            Department
          </Typography>
          <Typography
            pr={3}
            display="flex"
            justifyContent="flex-end"
            sx={{
              width: "100%",
              fontSize: 14,
              fontWeight: "400px",
              color: "#FFFFFF",
              py: "10px",
              textTransform: "capitalize",
            }}>
            {data?.users[0]?.department_name}
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography
            sx={{
              fontSize: 12,
              fontWeight: "400px",
              color: "#FFFFFF75",
              px: "20px",
              py: "10px",
            }}>
            Name
          </Typography>
          <Typography
            display="flex"
            justifyContent="flex-end"
            sx={{
              width: "100%",
              fontSize: 14,
              fontWeight: "400px",
              color: "#FFFFFF",
              py: "10px",
              pr: 3,
              textTransform: "capitalize",
            }}>
            {data?.users[0].first_name}
          </Typography>
        </Stack>
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: 12,
            fontWeight: "400px",
            color: "#21293C",
            marginTop: "20px",
          }}>
          Task
        </Typography>
        {data.status === "pending" ? (
          <TextField
            disabled={edit}
            sx={{ width: "100%" }}
            name="task_name"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.task_name}
          />
        ) : (
          <Typography
            pr={3}
            display="flex"
            justifyContent="flex"
            sx={{
              width: "100%",
              fontSize: 14,
              fontWeight: "400px",
              color: "background: #FFFFFF",
              py: "10px",
              textTransform: "capitalize",
            }}>
            {values.task_name}
          </Typography>
        )}
        <Typography
          sx={{
            fontSize: 12,
            fontWeight: "400px",
            color: "#21293C",
            marginTop: "20px",
          }}>
          Description
        </Typography>
        {data.status === "pending" ? (
          <TextField
            disabled={edit}
            sx={{ width: "100%" }}
            name="task_description"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.task_description}
          />
        ) : (
          <Typography
            pr={3}
            display="flex"
            justifyContent="flex"
            sx={{
              width: "100%",
              fontSize: 14,
              fontWeight: "400",
              color: "background: #FFFFFF",
              py: "10px",
              textTransform: "capitalize",
            }}>
            {values.task_description}
          </Typography>
        )}

        <Typography
          sx={{
            fontSize: 12,
            fontWeight: "400px",
            color: "#21293C",
            marginTop: "20px",
          }}>
          Date Created
        </Typography>
        <Typography
          pr={3}
          display="flex"
          justifyContent="flex"
          sx={{
            width: "100%",
            fontSize: 14,
            fontWeight: "400px",
            color: "background: #FFFFFF",
            py: "10px",
            textTransform: "capitalize",
          }}>
          {formattedTime}
        </Typography>
        {data?.status === "pending" && edit ? (
          <Stack direction="row" gap={2}>
            <Button
              onClick={handleSubmit}
              variant="contained"
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                borderRadius: "10px",
                backgroundColor: "#FF5A79",
                color: "white",
                width: "450px",
                height: "50px",
                textTransform: "none",
                animation: "none",
              }}>
              Delete Task
            </Button>
            <Button
              variant="contained"
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                borderRadius: "10px",
                backgroundColor: "#21293C",
                color: "white",
                width: "450px",
                height: "50px",
                textTransform: "none",
                animation: "none",
              }}
              onClick={() => setEdit(false)}>
              Edit
            </Button>
          </Stack>
        ) : (
          <Button
            variant="contained"
            sx={{
              fontSize: "16px",
              fontWeight: 500,
              borderRadius: "10px",
              backgroundColor: "#21293C",
              color: "white",
              width: "450px",
              height: "50px",
              textTransform: "none",
              animation: "none",
              display: data?.status === "completed" ? "none" : "block",
              ":disabled": {
                color: "white",
                backgroundColor: "#21293C75",
              },
            }}
            disabled={
              !(data?.status !== "pending") &&
              JSON.stringify(values) === JSON.stringify(taskData)
            }
            onClick={handleSubmit}>
            {edit ? "Mark as completed" : "Save"}
          </Button>
        )}
      </Box>
      <ToastContainer
        style={{
          marginTop: "-100px",
        }}
      />
    </>
  );
};
