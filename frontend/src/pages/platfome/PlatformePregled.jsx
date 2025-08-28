import{ useEffect, useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { PRODUKCIJA, RouteNames } from "../../constants";
import PlatformeService from "../../services/PlatformeService";
import { Button, Table } from "react-bootstrap";

export default function PlatformePregled() {

  const [platforme, setPlatforme] = useState([]);
  const [expanded, setExpanded] = useState({});
  const navigate = useNavigate();


  async function dohvatiPlatforme() {
    const odgovor = await PlatformeService.get();
    setPlatforme(odgovor);
  }

  useEffect(() => {
    dohvatiPlatforme();
  }, []);


  function obrisi(sifra) {
    if (!window.confirm('Sigurno obristi?')) return;
    brisanje(sifra);
  }

  async function brisanje(sifra) {
    const odgovor = await PlatformeService.obrisi(sifra);
    dohvatiPlatforme();
  }


  async function toggleGames(sifraPlatforme) {
    if (expanded[sifraPlatforme]) {
      setExpanded(prev => ({ ...prev, [sifraPlatforme]: null }));
      return;
    }

    try {
      const odgovor = await fetch(`${PRODUKCIJA}/api/v1/Platforma/IgricaUPlatformi/${sifraPlatforme}`);

      if (!odgovor.ok) throw new Error("Failed to fetch games");

      const igrice = await odgovor.json();
      setExpanded(prev => ({ ...prev, [sifraPlatforme]: igrice }));
    } catch (error) {
      console.error(error);
      alert("Failed to fetch games");
    }
  }

  return (
    <>
      <Link className="btn btn-success mb-3" to={RouteNames.PLATFORME_NOVI}>
        Add New Platform
      </Link>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {platforme && platforme.map((platforma, index) => (
            <React.Fragment key={index}>
              <tr>
                <td>{platforma.naziv}</td>
                <td>
                  <Button onClick={() => navigate(`/platforme/${platforma.sifra}`)}>
                    Change
                  </Button>
                  &nbsp;&nbsp;
                  <Button variant="danger" onClick={() => obrisi(platforma.sifra)}>
                    Delete
                  </Button>
                  &nbsp;&nbsp;
                  <Button variant="primary" onClick={() => toggleGames(platforma.sifra)}>
                    {expanded[platforma.sifra] ? "Hide Games" : "Show Games"}
                  </Button>
                </td>
              </tr>
              {expanded[platforma.sifra] && (
                <tr>
                  <td colSpan={2}>
                    <Table bordered size="sm" className="mb-0">
  <thead>
    <tr>
      <th>Name</th>
      <th>Rating</th>
      <th>Release Year</th>
    </tr>
  </thead>
  <tbody>
    {expanded[platforma.sifra].map(igra => (
      <tr key={igra.sifra}>
        <td>{igra.naziv}</td>
        <td>{igra.ocjena}</td>
        <td>{igra.godinaIzdanja}</td>
      </tr>
    ))}
  </tbody>
</Table>

                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </Table>
    </>
  );
}
