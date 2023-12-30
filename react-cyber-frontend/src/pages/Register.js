import { Center, Stack } from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../redux/actions/auth";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <Center
        mt="200px"
        bg="#cfcfcf"
        h="550px"
        w="500px"
        mx="auto"
        // color="white"
        borderRadius="20px"
      >
        <Formik
          initialValues={{ email: "", password: "", confirmpassword: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (values.password != values.confirmpassword)
              errors.confirmpassword = "Passwords doesn't match";
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(register(values)).then((response) => {
              if (response?.payload?.success) navigate("/");
            });
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Stack spacing={"30px"}>
                <Field
                  className="input-field"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                />
                <ErrorMessage name="email" component="div" />
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input-field"
                />
                <Field
                  type="password"
                  name="confirmpassword"
                  placeholder="Confirm Password"
                  className="input-field"
                />
                <ErrorMessage name="password" component="div" />
                <ErrorMessage name="confirmpassword" component="div" />
                <button type="submit" disabled={isSubmitting}>
                  Sign up
                </button>
                <Link to="/">Already have an account?</Link>
              </Stack>
            </Form>
          )}
        </Formik>
      </Center>
    </>
  );
};

export default Register;
