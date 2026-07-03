import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";

function MyNavbar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Netflix</Navbar.Brand>

                <Nav className="me-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">TV Shows</Nav.Link>
                    <Nav.Link href="#">Movies</Nav.Link>
                    <Nav.Link href="#">Recently Added</Nav.Link>
                    <Nav.Link href="#">My List</Nav.Link>
                </Nav>

                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search and press Enter"
                        className="me-2"
                    />
                </Form>

                <Nav>
                    <Nav.Link href="#">Kids</Nav.Link>
                    <Nav.Link href="#">🔔</Nav.Link>
                    <Nav.Link href="#">👤</Nav.Link>
                </Nav>

            </Container>
        </Navbar>
    );
}

export default MyNavbar;