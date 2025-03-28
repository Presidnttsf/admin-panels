import { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CreateAccount() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await axios.post(
        "https://mamun-reza-freeshops-backend.vercel.app/api/v1/admin/registration",
        {
          fullName: data.name,
          firstName: data.name.split(" ")[0], // Extract first name
          lastName: data.name.split(" ").slice(1).join(" "), // Extract last name
          phone: data.phone,
          email: data.email,
          password: data.password,
        }
      );

      console.log("Registration Response:", response.data);

      setSuccessMessage("Account created successfully! Redirecting...");
      setTimeout(() => navigate("/"), 2000); // Redirect after success
    } catch (error) {
      console.error("Registration Error:", error.response?.data || error.message);
      setErrorMessage(error.response?.data?.message || "Something went wrong! Try again.");
    }
  };

  return (
    <Container fluid className="vh-100 d-flex align-items-center justify-content-center">
      <Row className="shadow-lg bg-light rounded-4 overflow-hidden" style={{ maxWidth: "1050px", width: "100%" }}>
        <Col md={6} className="d-flex align-items-center justify-content-center bg-white">
          <img src="/images/Group 144.png" alt="Free Shopps Logo" className="img-fluid" style={{ maxWidth: "75%" }} />
        </Col>

        <Col md={6} className="p-5">
          <h3 className="fw-bold text-start">Create New Account</h3>
          <p className="text-muted text-start">Welcome to Free Shopps App controller</p>

          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
          {successMessage && <Alert variant="success">{successMessage}</Alert>}

          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3 text-start">
              <Form.Label className="fw-bold">Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" {...register("name", { required: "Name is required" })} />
              {errors.name && <p className="text-danger">{errors.name.message}</p>}
            </Form.Group>

            <Form.Group className="mb-3 text-start">
              <Form.Label className="fw-bold">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
                })}
              />
              {errors.email && <p className="text-danger">{errors.email.message}</p>}
            </Form.Group>

            <Form.Group className="mb-3 text-start">
              <Form.Label className="fw-bold">Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your phone number"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: { value: /^[0-9]{10}$/, message: "Enter a valid 10-digit phone number" },
                })}
              />
              {errors.phone && <p className="text-danger">{errors.phone.message}</p>}
            </Form.Group>

            <Form.Group className="mb-3 text-start">
              <Form.Label className="fw-bold">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
              />
              {errors.password && <p className="text-danger">{errors.password.message}</p>}
            </Form.Group>

            <Form.Group className="mb-3 text-start">
              <Form.Label className="fw-bold">Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm password"
                {...register("confirmPassword", { required: "Confirm password is required", validate: (value) => value === watch("password") || "Passwords do not match" })}
              />
              {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword.message}</p>}
            </Form.Group>

            <Button type="submit" variant="primary" className="w-100">
              Create Account
            </Button>
          </Form>

          <p className="text-center mt-3">
            <a href="/" className="text-decoration-none">
              Already have an account?
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}
