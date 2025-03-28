import { useEffect, useState } from "react";
import { Table, Button, Container, Row, Col, Spinner, Form } from "react-bootstrap";
import { FaSearch, FaEllipsisV } from "react-icons/fa";
import axios from "axios";

export default function Models() {
  const [modelList, setModelList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeRow, setActiveRow] = useState(null);
  const [editModel, setEditModel] = useState({ id: null, name: "" });

  const URL = "https://mamun-reza-freeshops-backend.vercel.app";

  useEffect(() => {
    fetchModels();
  }, []);

  const fetchModels = async () => {
    try {
      const response = await axios.get(`${URL}/api/v1/admin/Model/allModel`);
      setModelList(response.data.data);
    } catch (error) {
      console.error("Error fetching model data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle update
  const handleUpdate = async () => {
    if (!editModel.name.trim()) return alert("Model name cannot be empty!");

    try {
      await axios.put(`${URL}/api/v1/admin/Model/updateModel/${editModel.id}`, {
        name: editModel.name,
      });
      setModelList((prev) =>
        prev.map((model) => (model._id === editModel.id ? { ...model, name: editModel.name } : model))
      );
      setEditModel({ id: null, name: "" });
      setActiveRow(null);
    } catch (error) {
      console.error("Error updating model:", error);
    }
  };

  // Handle delete
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this model?")) return;

    try {
      await axios.delete(`${URL}/api/v1/admin/Model/deleteModel/${id}`);
      setModelList((prev) => prev.filter((model) => model._id !== id));
    } catch (error) {
      console.error("Error deleting model:", error);
    }
  };

  return (
    <Container fluid className="mt-3" style={{ marginLeft: "150px" }}>
      <Row className="mb-4">
        <Col>
          <h2 className="fw-bold">List of Models</h2>
        </Col>
        <Col xs="auto">
          <div className="d-flex">
            <input type="text" placeholder="Search model by name" className="form-control me-2" />
            <Button variant="primary">
              <FaSearch />
            </Button>
          </div>
        </Col>
      </Row>

      {loading ? (
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <p>Loading models...</p>
        </div>
      ) : (
        <Table striped bordered hover responsive className="shadow-sm bg-white">
          <thead>
            <tr className="bg-light">
              <th>Models</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {modelList.map((model, index) => (
              <tr key={index}>
                <td className="ps-5 d-flex align-items-center gap-3">
                  {editModel.id === model._id ? (
                    <Form.Control
                      type="text"
                      value={editModel.name}
                      onChange={(e) => setEditModel({ ...editModel, name: e.target.value })}
                    />
                  ) : (
                    <p className="fw-bold mb-0">{model.name}</p>
                  )}
                </td>
                <td className="text-center position-relative">
                  <FaEllipsisV className="cursor-pointer" onClick={() => setActiveRow(activeRow === index ? null : index)} />

                  {activeRow === index && (
                    <div className="position-absolute bg-white shadow p-2 rounded" style={{ right: 10, top: 20, minWidth: "120px", zIndex: 1000 }}>
                      {editModel.id === model._id ? (
                        <Button variant="success" size="sm" className="w-100 mb-1" onClick={handleUpdate}>
                          Save
                        </Button>
                      ) : (
                        <Button
                          variant="warning"
                          size="sm"
                          className="w-100 mb-1"
                          onClick={() => setEditModel({ id: model._id, name: model.name })}
                        >
                          Update
                        </Button>
                      )}
                      <Button variant="danger" size="sm" className="w-100" onClick={() => handleDelete(model._id)}>
                        Delete
                      </Button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
}
