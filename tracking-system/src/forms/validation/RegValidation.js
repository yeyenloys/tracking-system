import * as Yup from "yup";

const BasicInfo = Yup.object({
  first_name: Yup.string().required("First Name is required"),
  last_name: Yup.string().required("Last Name is required"),
  contact_number: Yup.string().required("Contact Number is required"),
  gender: Yup.string().required("Gender is required"),
  birthdate: Yup.date().required("Birthdate is required"),
  address: Yup.string().required("Address is required"),
});

const CompanyInfo = Yup.object({
  department_id: Yup.string().required("department_id is required"),
  position_id: Yup.string().required("Job Position is required"),
  company_id: Yup.string().required("Company ID is required"),
});

const CredentialInfo = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export { BasicInfo, CompanyInfo, CredentialInfo };
