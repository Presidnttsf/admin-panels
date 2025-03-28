import { useEffect, useState } from "react";
import { Table, Button, Container, Row, Col, Spinner } from "react-bootstrap";
import { FaSearch, FaEllipsisV, FaStar } from "react-icons/fa";
import axios from "axios";

export default function ProductManagement() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state

  const URL = "https://mamun-reza-freeshops-backend.vercel.app";

  useEffect(() => {
    async function getProductData() {
      try {
        const response = await axios.get(
          `${URL}/api/v1/user/allProduct?categoryId=677b6b09999844c0626d5ad4`
        );
        console.log("check response", response.data.data.docs);
        setProductList(response.data.data.docs);
      } catch (error) {
        console.error("Error fetching product data:", error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    }
    getProductData();
  }, []);

  return (
    <Container fluid className="mt-3" style={{ marginLeft: "150px" }}>
      <Row className="mb-4">
        <Col>
          <h2 className="fw-bold">List of Products</h2>
        </Col>
        <Col xs="auto">
          <div className="d-flex">
            <input
              type="text"
              placeholder="Search user by name"
              className="form-control me-2"
            />
            <Button variant="primary">
              <FaSearch />
            </Button>
          </div>
        </Col>
      </Row>

      {/* Show loading spinner until data is fetched */}
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <p>Loading products...</p>
        </div>
      ) : (
        <Table striped bordered hover responsive className="shadow-sm bg-white">
          <thead>
            <tr className="bg-light">
              <th>Name</th>
              <th>User Deal</th>
              <th>Ratings</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((product, i) => (
              <tr key={i + 1}>
                <td className="ps-5 d-flex align-items-center gap-3">
                  <img
                    src={product.productImages[0].image}
                    alt={product.name}
                    className="rounded-circle"
                    width="40"
                  />
                  <div>
                    <p className="fw-bold mb-0">{product.name}</p>
                    <p className="text-muted small mb-0">{product.price}</p>
                    <p className="text-muted small">{product.description}</p>
                  </div>
                </td>
                <td className="text-center">
                  <span className="text-danger">{product.sold} Sold</span> <br />
                  <span className="text-success">{product.bought} Bought</span>
                </td>
                <td className="text-center">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={`me-1 ${
                        index < product.rating ? "text-warning" : "text-secondary"
                      }`}
                    />
                  ))}
                </td>
                <td className="text-center">
                  <FaEllipsisV />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
}
