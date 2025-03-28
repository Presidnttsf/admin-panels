import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setErrorMessage("");
  
    console.log("Sending Login Data:", data); // Debugging
  
    try {
      const response = await axios.post(
        "https://mamun-reza-freeshops-backend.vercel.app/api/v1/admin/login",
        {
          email: data.username, // If API expects "email" instead of "username"
          password: data.password
        }
      );
  
      console.log("Response Data:", response.data);
  
      const { accessToken, data: userData } = response.data;
  
      if (accessToken) {
        localStorage.setItem("token", accessToken);
        localStorage.setItem("user", JSON.stringify(userData));
        navigate("/admin/products");
      }
    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message);
  
      if (error.response) {
        setErrorMessage(error.response.data.message || "Invalid credentials!");
      } else {
        setErrorMessage("Something went wrong! Please try again.");
      }
    }
  };
  
  return (
    <Container fluid className="vh-100 d-flex align-items-center justify-content-center">
      <Row className="shadow-lg bg-light rounded-4 overflow-hidden" style={{ width: "900px" }}>
        {/* Left Side - Image */}
        <Col md={6} className="d-flex align-items-center justify-content-center bg-white">
          <img
            src="/images/Group 144.png"
            alt="Free Shopps Logo"
            className="img-fluid"
            style={{ maxWidth: "80%" }}
          />
        </Col>

        {/* Right Side - Form */}
        <Col md={6} className="p-5">
          <h2 className="fw-bold text-start">Log in</h2>
          <p className="text-muted text-start">Welcome to Free Shopps App controller</p>

          {errorMessage && <p className="text-danger text-center">{errorMessage}</p>}

          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3 text-start">
              <Form.Label className="fw-semibold">User Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your username"
                {...register("username", { required: "User Name is required" })}
              />
              {errors.username && <p className="text-danger">{errors.username.message}</p>}
            </Form.Group>

            <Form.Group className="mb-3 text-start">
              <Form.Label className="fw-semibold">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && <p className="text-danger">{errors.password.message}</p>}
            </Form.Group>

            <div className="text-end mb-3">
              <a href="/forgot-password" className="text-decoration-none">Forgot Password?</a>
            </div>

            <Button type="submit" variant="primary" className="w-100">Log in</Button>
          </Form>

          <p className="text-center mt-3">
            <a href="/create-account" className="text-decoration-none">Create New Account</a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}
