import {
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { RegoneFOrm, RegtwoForm, RegthreeForm } from "../../forms";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller } from "swiper/modules";
import "swiper/css";
import { Form, Formik } from "formik";
import {
  BasicInfo,
  CompanyInfo,
  CredentialInfo,
} from "../../forms/validation/RegValidation";
import { useEffect } from "react";
import axiosApi from "../../AxiosApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import CustomLoader from "../../components/common/CustomLoader";

const steps = ["Personal Details", "Company Details", "Account Details"];

const initialValues = {
  first_name: "",
  last_name: "",
  contact_number: "",
  gender: "",
  birthdate: "",
  address: "",
  department_id: "",
  position_id: "",
  company_id: "",
  email: "",
  password: "",
  password_confirmation: "",
};

export const Register = () => {
  const [step, setStep] = useState(0);
  const [current, setCurrent] = useState("basic");
  const [swiperController, setSwiperController] = useState(null);

  const [department, setDepartment] = useState([]);
  const [position, setPosition] = useState([]);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    console.log("values", values);

    step === 0 && setStep(1);
    step === 1 && setStep(2);
    if (step === 2) {
      setOpen(true);
      try {
        await axiosApi
          .post(`/signup`, values)
          .then((response) => {
            setOpen(false);
            // console.log(response.data.token);
            console.log(response);
            // localStorage.setItem("token", response.data.token);
            toast.success(response.data.message, {
              position: "bottom-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });

            setTimeout(() => {
              navigate("/login");
            }, 4000);
            console.log("Graaaa", response);
          })
          .catch((err) => {
            console.log("Kyleeee", err);
            setOpen(false);
            toast.error(err.response.data.message, {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          });
      } catch (error) {
        console.log("smthng went wrong");
      }
    }
  };

  const handleContinue = (data) => {
    data === "two" ? setStep(1) : data === "three" ? setStep(2) : "basic";
    setCurrent(data);
  };

  const handlePrevious = () => {
    step === 1 && setStep(0);
    step === 2 && setStep(1);
  };

  // const handleSubmit = (values) => {
  //   step === 0 && setStep(1);
  //   step === 1 && setStep(2);
  //   console.log(values);
  // };

  useEffect(() => {
    axiosApi
      .get(`/departments`)
      .then((response) => {
        console.log("Maryenn", response);
        setDepartment(response.data.department);
      })
      .catch((err) => {
        console.log("Kyleeee", err);
      });
  }, []);

  useEffect(() => {
    axiosApi
      .get(`/positions`)
      .then((response) => {
        setPosition(response.data.position);
      })
      .catch((err) => {
        console.log("Kyleeee", err);
      });
  }, []);

  return (
    <>
      {/* <CustomLoader open={open} /> */}
      <Box
        sx={{
          display: "flex",
          height: "100%",
          width: "100%",
        }}>
        <Box position="absolute" top={0} right={0}>
          <img src={Logo} alt="company-logo" height={164} width={164} />
        </Box>
        <Box
          sx={{
            width: "40%",
            borderTopRightRadius: 150,
            borderBottomRightRadius: 150,
            backgroundColor: (theme) => theme.palette.primary.main,
            color: "#ffffff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "20px",
          }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Hi there!
          </Typography>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Let's create your account to start tracking tasks.
          </Typography>
          <Typography variant="h2" marginTop="40px" marginBottom="20px">
            Already have an account?
          </Typography>
          <NavLink to="/login" style={{ textDecoration: "none" }}>
            <Typography
              variant="button"
              component="button"
              sx={{
                textTransform: "none",
                display: "block",
                width: "150px",
                height: "50px",
                borderRadius: "10px",
                backgroundColor: "transparent",
                color: "white",
                border: "1px solid white",
                cursor: "pointer",
                fontSize: "14px",
              }}>
              Log In
            </Typography>
          </NavLink>
        </Box>
        <Formik
          initialValues={initialValues}
          validationSchema={
            step === 0 ? BasicInfo : step === 1 ? CompanyInfo : CredentialInfo
          }
          onSubmit={handleSubmit}>
          {({ touched }) => (
            <Box
              sx={{
                width: "60%",
                padding: "30px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Form id="myForm">
                <Typography
                  variant="h5"
                  mb={3}
                  fontWeight={700}
                  sx={{ display: "flex", justifyContent: "center" }}>
                  Create Account
                </Typography>
                <Stepper activeStep={step} alternativeLabel>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
                <Box
                  display="flex"
                  justifyContent="center"
                  width="25vw"
                  marginTop={5}>
                  {/* <Swiper
            modules={[Controller]}
            spaceBetween={50}
            slidesPerView={1}
            controller={{ control: swiperController }}
            onSwiper={setSwiperController}>
            <SwiperSlide>
              <RegoneFOrm />
            </SwiperSlide>
            <SwiperSlide>
              <RegtwoForm />
            </SwiperSlide>
            <SwiperSlide>
              <RegthreeForm />
            </SwiperSlide>
          </Swiper> */}

                  {step === 0 && (
                    <RegoneFOrm
                    // onContinue={() => handleContinue("two")}
                    />
                  )}
                  {step === 1 && (
                    <RegtwoForm department={department} position={position} />
                  )}
                  {step === 2 && (
                    <RegthreeForm
                    // onPrev={() => handlePrevious("two")}
                    // onContinue={() => handleSubmit()}
                    />
                  )}
                </Box>
                <Box display="flex" gap={2} justifyContent="center">
                  <Button
                    sx={{
                      textTransform: "none",
                      height: "50px",
                      width: "150px",
                      borderRadius: "10px",
                      marginTop: "50px",
                    }}
                    disabled={step === 0}
                    variant="outlined"
                    color="primary"
                    onClick={handlePrevious}>
                    Previous
                  </Button>
                  <Button
                    sx={{
                      textTransform: "none",
                      height: "50px",
                      width: "150px",
                      borderRadius: "10px",
                      marginTop: "50px",
                    }}
                    variant="contained"
                    color="primary"
                    type="submit">
                    Next
                  </Button>
                  <ToastContainer />
                </Box>
              </Form>
            </Box>
          )}
        </Formik>
      </Box>
    </>
  );
};
