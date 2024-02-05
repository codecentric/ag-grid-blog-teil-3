import { AgGridReact } from "ag-grid-react";
import React, { useMemo, useState, FC } from "react";

const SecondSample: FC = () => {
  // Daten
  const [rowData] = useState([
    {
      Titel: "Monty Python's Flying Circus",
      Jahr: 1969,
      Bewertung: 8.8,
      Staffeln: 4,
      Genre: "Comedy",
      Produktion: "GB",
    },
    {
      Titel: "Star Trek: Deep Space Nine",
      Jahr: 1993,
      Bewertung: 6.9,
      Staffeln: 7,
      Genre: "Science-Fiction",
      Produktion: "US",
    },
  ]);

  const [columnDefs] = useState([
    {
        headerName: 'Group A',
        children: [
            { field: 'Titel' },
            { field: 'Jahr' },
            { field: 'Bewertung' },
            { field: 'Staffeln' },
            { field: 'Genre' },
            { field: 'Produktion' }
        ]
    }
]);


  // globale Spaltendefinitionen
  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      resizable: true,
    }),
    []
  );

  return (
    <div className="ag-theme-alpine" data-testid="Test-table" style={{ height: 400, width: 1200 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
      />
    </div>
  );
};

export default SecondSample;
