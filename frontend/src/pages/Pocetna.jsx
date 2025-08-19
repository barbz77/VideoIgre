import { useState } from "react";
import { Button } from "react-bootstrap";
import { NumericFormat } from "react-number-format";
import moment from "moment";
import IgriceService from "../services/IgriceService";

export default function Pocetna() {
  const [igrica, setIgrica] = useState(null);

  async function handleRandomGame() {
    const g = await IgriceService.getRandom();
    setIgrica(g);
  }

  return (
    <>
      <p>Welcome!</p>
      <Button variant="primary" onClick={handleRandomGame}>
        Random Game
      </Button>

   {igrica && (
  <table className="table table-striped table-bordered mt-3">
    <thead>
      <tr>
        <th>Name</th>
        <th className="text-end">Rating</th>
        <th>Release Date</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{igrica.naziv}</td>
        <td className="text-end">
          <NumericFormat
            value={igrica.ocjena}
            displayType="text"
            thousandSeparator="."
            decimalSeparator=","
          />
        </td>
        <td>{moment.utc(igrica.godinaIzdanja).format("DD-MM-YYYY")}</td>
      </tr>
    </tbody>
  </table>
)}

    </>
  )
}
