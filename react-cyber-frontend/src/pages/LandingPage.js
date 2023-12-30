import { Center, Stack } from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../redux/actions/auth";

const LandingPage = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Center
        mt="200px"
        bg="#cfcfcf"
        h="550px"
        w="500px"
        mx="auto"
        color="black"
        borderRadius="20px"
      >
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(login(values));
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
                <Field type="password" name="password" placeholder="Password" />
                <ErrorMessage name="password" component="div" />
                <button type="submit" disabled={isSubmitting}>
                  Login
                </button>
                <Link to="/register">Sign up here...</Link>
              </Stack>
            </Form>
          )}
        </Formik>
      </Center>
    </>
  );
};

export default LandingPage;
