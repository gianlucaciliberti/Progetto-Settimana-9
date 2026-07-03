import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function MyNavbar({ onSearch }) {
    const [query, setQuery] = useState("");
    return (
        <Navbar variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#" style={{ color: '#e50914', fontWeight: 'bold' }}>
                    Netflix
                </Navbar.Brand>

                <Nav className="me-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">Serie TV</Nav.Link>
                    <Nav.Link href="#">Film</Nav.Link>
                    <Nav.Link href="#">Aggiunti di recente</Nav.Link>
                </Nav>

                <Form className="d-flex"
                    onSubmit={(e) => {
                        e.preventDefault();
                        onSearch(query);
                    }}
                >
                    <Form.Control
                        type="search"
                        placeholder="Search and press Enter"
                        className="me-2"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)} />
                </Form>

                <Nav>
                    <Nav.Link href="#">Kids</Nav.Link>
                    <Nav.Link href="#">👤</Nav.Link>
                </Nav>

            </Container>
        </Navbar>
    );
}

export default MyNavbar;