import { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { Eye, EyeSlash } from "react-bootstrap-icons";

export default function Profile() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "400px", borderRadius: "12px" }}>
        {/* Skip Button */}
        <div className="text-end">
          <Button variant="link" className="text-muted">Skip</Button>
        </div>

        {/* Profile Image Upload */}
        <div className="text-center mb-3">
          <div
            className="rounded-circle bg-light d-flex justify-content-center align-items-center"
            style={{ width: "80px", height: "80px" }}
          >
            📷
          </div>
          <a href="#" className="d-block text-primary mt-2">Upload Profile Picture</a>
        </div>

        {/* Form */}
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" defaultValue="XYZ" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" defaultValue="xyz@gmail.com" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="tel" placeholder="Enter your phone number" defaultValue="0987654324" />
          </Form.Group>

          {/* Password with Eye Icon */}
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <InputGroup>
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                defaultValue="********"
              />
              <Button variant="outline-secondary" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeSlash /> : <Eye />}
              </Button>
            </InputGroup>
          </Form.Group>

          {/* Change Password Link */}
          <div className="text-center mb-3">
            <a href="#" className="text-muted">Change Password</a>
          </div>

          {/* Save Button */}
          <Button variant="primary" className="w-100">Save</Button>
        </Form>
      </div>
      
    </div>
  );
}
