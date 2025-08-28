import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PRODUKCIJA, RouteNames } from "../../constants";
import ZanroviService from "../../services/ZanroviService";
import { Button, Table } from "react-bootstrap";

export default function ZanroviPregled() {
  const [zanrovi, setZanrovi] = useState([]);
  const [expanded, setExpanded] = useState({});
  const navigate = useNavigate();

  // Fetch all genres
  async function dohvatiZanrove() {
    const odgovor = await ZanroviService.get();
    setZanrovi(odgovor);
  }

  useEffect(() => {
    dohvatiZanrove();
  }, []);

  // Confirm + delete
  function obrisi(sifra) {
    if (!window.confirm("Sigurno obrisati?")) return;
    brisanje(sifra);
  }

  // Delete API call
  async function brisanje(sifra) {
    await ZanroviService.obrisi(sifra);
    dohvatiZanrove();
  }

  // Toggle show/hide games for genre
  async function toggleGames(sifraZanra) {
    if (expanded[sifraZanra]) {
      setExpanded(prev => ({ ...prev, [sifraZanra]: null }));
      return;
    }

    try {
      const odgovor = await fetch(`${PRODUKCIJA}/api/v1/Zanr/IgricaUZanru/${sifraZanra}`);
      if (!odgovor.ok) throw new Error("Failed to fetch games");

      const igrice = await odgovor.json();
      setExpanded(prev => ({ ...prev, [sifraZanra]: igrice }));
    } catch (error) {
      console.error(error);
      alert("Failed to fetch games");
    }
  }

  return (
    <>
      <Link className="btn btn-success mb-3" to={RouteNames.ZANROVI_NOVI}>
        Add New Genre
      </Link>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {zanrovi.map((zanr, index) => (
            <React.Fragment key={index}>
              <tr>
                <td>{zanr.naziv}</td>
                <td>
                  <Button onClick={() => navigate(`/zanrovi/${zanr.sifra}`)}>
                    Change
                  </Button>
                  &nbsp;&nbsp;
                  <Button variant="danger" onClick={() => obrisi(zanr.sifra)}>
                    Delete
                  </Button>
                  &nbsp;&nbsp;
                  <Button variant="primary" onClick={() => toggleGames(zanr.sifra)}>
                    {expanded[zanr.sifra] ? "Hide Games" : "Show Games"}
                  </Button>
                </td>
              </tr>
              {expanded[zanr.sifra] && (
                <tr>
                  <td colSpan={2}>
                    {expanded[zanr.sifra].length > 0 ? (
                     <Table bordered size="sm">
  <thead>
    <tr>
      <th>Name</th>
      <th>Rating</th>
      <th>Release Year</th>
    </tr>
  </thead>
  <tbody>
    {expanded[zanr.sifra].map(igra => (
      <tr key={igra.sifra}>
        <td>{igra.naziv}</td>
        <td>{igra.ocjena}</td>
        <td>{igra.godinaIzdanja}</td>
      </tr>
    ))}
  </tbody>
</Table>

                    ) : (
                      <span>No games found for this genre.</span>
                    )}
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
