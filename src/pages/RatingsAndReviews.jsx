import React from "react";
import { Table, Button, Pagination, Form, InputGroup } from "react-bootstrap";
import { FaCheck, FaTimes } from "react-icons/fa";

const RatingsAndReviews = () => {
  const reviews = [
    { name: "Yeray Rosalos", comment: "Very Good", rating: 3, date: "July 3, 2023 12:29 pm", status: "Pending" },
    { name: "Alan Robert", comment: "Looks Awesome", rating: 5, date: "July 3, 2023 12:27 pm", status: "Approved" },
    { name: "Yeray Rosalos", comment: "Very Good", rating: 3, date: "July 3, 2023 12:29 pm", status: "Pending" },
    { name: "Alan Robert", comment: "Looks Awesome", rating: 5, date: "July 3, 2023 12:27 pm", status: "Declined" },
  ];

  return (
    <div className="container-fluid p-4">
      <h4>List of reviews with ratings, comments, and user details</h4>
      <div className="d-flex justify-content-between align-items-center my-3">
        <div>
          <span>All (877) | </span>
          <span className="text-success">Approved (500)</span> | 
          <span className="text-primary">Pending (377)</span>
        </div>
        <InputGroup className="w-25">
          <Form.Control type="text" placeholder="Search Review by Date" />
          <Button variant="primary">Search</Button>
        </InputGroup>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th><Form.Check /></th>
            <th>Name</th>
            <th>Comment</th>
            <th>Ratings</th>
            <th>Date & Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review, index) => (
            <tr key={index}>
              <td><Form.Check /></td>
              <td>{review.name}</td>
              <td>{review.comment}</td>
              <td>{'⭐'.repeat(review.rating)}</td>
              <td>{review.date}</td>
              <td>
                {review.status === "Pending" ? (
                  <>
                    <Button variant="warning" className="me-2"><FaCheck /></Button>
                    <Button variant="danger"><FaTimes /></Button>
                  </>
                ) : (
                  <Button variant={review.status === "Approved" ? "success" : "danger"}>{review.status}</Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="d-flex justify-content-between align-items-center">
        <Button variant="danger">Delete</Button>
        <Pagination>
          <Pagination.First />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Item>{4}</Pagination.Item>
          <Pagination.Item>{5}</Pagination.Item>
          <Pagination.Last />
        </Pagination>
      </div>
    </div>
  );
};

export default RatingsAndReviews;
