import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  const footerLinks = [
    "Audio e sottotitoli",
    "Centro assistenza",
    "Carte regalo",
    "Media Center",
    "Rapporti con gli investitori",
    "Opportunità di lavoro",
    "Condizioni di utilizzo",
    "Privacy",
    "Preferenze per i cookie",
    "Informazioni legali",
    "Contattaci",
    "Solo su Netflix",
  ];

  // 2 colonne (6 link ciascuna)
  const mobileColumns = [
    footerLinks.slice(0, 6),
    footerLinks.slice(6, 12),
  ];

  // 4 colonne (3 link ciascuna)
  const desktopColumns = [
    footerLinks.slice(0, 3),
    footerLinks.slice(3, 6),
    footerLinks.slice(6, 9),
    footerLinks.slice(9, 12),
  ];

  return (
    <footer className="text-secondary py-5">
      <Container>

        {/* Footer mobile/tablet (<992px) */}
        <Row className="d-lg-none">
          {mobileColumns.map((column, index) => (
            <Col xs={6} key={index}>
              <ul className="list-unstyled">
                {column.map((link) => (
                  <li key={link} className="mb-2">
                    <a
                      href="#"
                      className="footerLink text-secondary text-decoration-none"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>

        {/* Footer desktop (>=992px) */}
        <Row className="d-none d-lg-flex">
          {desktopColumns.map((column, index) => (
            <Col lg={3} key={index}>
              <ul className="list-unstyled">
                {column.map((link) => (
                  <li key={link} className="mb-2">
                    <a
                      href="#"
                      className="footerLink text-secondary text-decoration-none"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>

      </Container>
    </footer>
  );
}

export default Footer;