import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RouteNames } from "../../constants";
import IgriceService from "../../services/IgriceService";
import moment from "moment";
import { useEffect, useState } from "react";

export default function IgricePromjena() {
  const navigate = useNavigate();
  const params = useParams();
  const [igrica, setIgrica] = useState({
    naziv: "",
    ocjena: "",
    godinaIzdanja: "",
  });

  async function ucitajIgricu() {
    const odgovor = await IgriceService.getBySifra(params.sifra);
    odgovor.godinaIzdanja = moment
      .utc(odgovor.godinaIzdanja)
      .format("YYYY-MM-DD");
    setIgrica(odgovor);
  }

  useEffect(() => {
    ucitajIgricu();
  }, []);

  async function promjena(sifra, igrica) {
    await IgriceService.promjeni(sifra, igrica);
    navigate(RouteNames.IGRICE_PREGLED);
  }

  function odradiSubmit(e) {
    e.preventDefault();

    promjena(params.sifra, {
      naziv: igrica.naziv,
      ocjena: parseFloat(igrica.ocjena),
      godinaIzdanja: moment(igrica.godinaIzdanja).toISOString(),
    });
  }

  return (
    <>
      <h2>Change game</h2>

      <Form onSubmit={odradiSubmit}>
        <Form.Group controlId="naziv">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="naziv"
            required
            value={igrica.naziv}
            onChange={(e) => setIgrica({ ...igrica, naziv: e.target.value })}
          />
        </Form.Group>

        <Form.Group controlId="ocjena">
          <Form.Label>Rating</Form.Label>
          <Form.Control
            type="number"
            name="ocjena"
            step={0.01}
            value={igrica.ocjena}
            onChange={(e) => setIgrica({ ...igrica, ocjena: e.target.value })}
          />
        </Form.Group>

        <Form.Group controlId="godinaIzdanja">
          <Form.Label>Release date</Form.Label>
          <Form.Control
            type="date"
            name="godinaIzdanja"
            value={igrica.godinaIzdanja}
            onChange={(e) =>
              setIgrica({ ...igrica, godinaIzdanja: e.target.value })
            }
          />
        </Form.Group>

        <hr style={{ marginTop: "50px" }} />

        <Row>
          <Col xs={6} sm={6} md={3} lg={2} xl={6} xxl={6}>
            <Link to={RouteNames.IGRICE_PREGLED} className="btn btn-danger">
              Quit
            </Link>
          </Col>
          <Col xs={6} sm={6} md={9} lg={10} xl={6} xxl={6}>
            <Button variant="success" type="submit">
              Change
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  )
}
