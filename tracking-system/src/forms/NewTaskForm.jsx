import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  TextField,
  CircularProgress,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useFormik } from "formik";
import CloseIcon from "@mui/icons-material/Close";
import { NewTaskSchema } from "./validation/RegValidation";
import { useEffect } from "react";
import axiosApi from "../AxiosApi";
import { ToastContainer, toast } from "react-toastify";

export const NewTaskForm = ({ setLoading, onClose }) => {
  const departments = [{ value: "dept1", label: "Department 1" }];
  const assignees = [{ value: "assignee1", label: "Assignee 1" }];
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedAssignee, setSelectedAssignee] = useState("");
  const [department, setDepartment] = useState([]);
  const [assignee, setAssignee] = useState([]);

  const { handleBlur, handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      assignee_id: "",
      department_id: "",
      task_name: "",
      task_description: "",
    },
    validationSchema: NewTaskSchema,

    onSubmit: async (values) => {
      console.log("Form Values:", {});

      const payload = {
        ...values,
        assignee_id: selectedAssignee,
        user_id: selectedAssignee,
        department_id: selectedDepartment,
      };

      try {
        setLoading(true);
        const response = await axiosApi.post(`/user/assigner/add`, payload);
        console.log("gtyvg", response);
        toast.success("Task added", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          theme: "colored",
        });
        console.log("succc");
        setLoading(false);
        setTimeout(() => {
          onClose();
        }, 6000);
      } catch (err) {
        console.log("Kyleeee", err);
        setLoading(false);
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

  useEffect(() => {
    axiosApi
      .get("/departments")
      .then((response) => {
        console.log("Maryen", response.data);
        setDepartment(response.data.department);
      })
      .catch((err) => {
        console.log("Kyle", err);
      });
  }, []);

  const handleChangeDepartment = (event) => {
    setSelectedDepartment(event.target.value);
    console.log(event);
    const payload = {
      department_id: event.target.value,
    };
    axiosApi
      .post("/department/assignee", payload)
      .then((response) => {
        console.log("anhhssgdg", response.data);
        setAssignee(response.data);
        console.log(assignee);
      })
      .catch((err) => {
        console.log("Kyle", err);
      });
  };

  const handleChangeAssignee = (event) => {
    setSelectedAssignee(event.target.value);
  };

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
          height: "270px",
          position: "relative",
        }}>
        <IconButton
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
            color: "white",
          }}
          onClick={() => onClose()}>
          <CloseIcon />
        </IconButton>
        <Typography
          variant="v3"
          color="white"
          marginLeft="10px"
          paddingTop="20px"
          paddingBottom="20px"
          paddingLeft="12px">
          Create New Task
        </Typography>
        <Typography
          sx={{
            fontSize: 12,
            fontWeight: "400px",
            color: "#FFFFFF75",
            mb: "6px",
            pl: "14px",
          }}>
          Select Department
        </Typography>
        <FormControl sx={{ color: "white", m: 1, minWidth: 120 }} size="small">
          <Select
            sx={{
              border: "white 1px solid",
              mx: 1.5,
              color: "white",
              width: "460px",
              height: "40px",
            }}
            labelId="department_id-label"
            // id="department_id"
            name="department_id"
            value={selectedDepartment}
            onChange={handleChangeDepartment}>
            {department.map((item, index) => (
              <MenuItem value={item.id} key={index}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ color: "white", m: 1, minWidth: 120 }} size="small">
          <Typography
            sx={{
              fontSize: 12,
              fontWeight: "400px",
              color: "#FFFFFF75",
              mb: "6px",
              pl: "14px",
            }}>
            Select Assignee
          </Typography>
          <Select
            sx={{
              border: "white 1px solid",
              mx: 1.5,
              color: "white",
              width: "460px",
              height: "40px",
            }}
            labelId="assignee_id-label"
            value={selectedAssignee}
            onChange={handleChangeAssignee}>
            {assignee.length ? (
              assignee?.map((item, index) => (
                <MenuItem value={item.id} key={index}>
                  {item.fullname}
                </MenuItem>
              ))
            ) : (
              <MenuItem value={"null"} key={0}>
                No Data
              </MenuItem>
            )}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ paddingBottom: "6px" }}>
        <Typography variant="v4">Task</Typography>
      </Box>
      <Box>
        <TextField
          name="task_name"
          onChange={handleChange}
          inputProps={{ style: { width: "434px", height: "10px" } }}
        />
      </Box>
      <Typography variant="v4" sx={{ marginBottom: "6px" }}>
        Description
      </Typography>
      <TextField
        name="task_description"
        onChange={handleChange}
        variant="outlined"
        sx={{ width: "460px", height: "100px" }}
      />
      <Button
        variant="contained"
        onClick={handleSubmit}
        sx={{
          fontSize: "16px",
          fontWeight: 500,
          borderRadius: "25px",
          backgroundColor: "#21293C",
          color: "white",
          width: "450px",
          height: "50px",
          textTransform: "none",
          animation: "none",
        }}>
        Add Task
      </Button>
      <ToastContainer
        style={{
          marginTop: "-100px",
        }}
      />
    </>
  );
};
