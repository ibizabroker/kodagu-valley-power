import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';

export default function Table() {
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: 'Node',
        field: 'node',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Distance in kms',
        field: 'distance',
        width: 200,
      },
      {
        label: 'Load in KVA',
        field: 'load',
        width: 200,
      },
      {
        label: 'Size',
        field: 'size',
        sort: 'disabled',
        width: 100,
      },
    ],
    rows: [
      {
        "node": "0-A",
        "distance": 4.5,
        "load": '25',
        "size": "(3*120 SQmm)ABC",
      },
      {
        "node": "0-A",
        "distance": 9.55,
        "load": "25",
        "size": "RABBIT ACSR"
      },
      {
        "node": "A-B",
        "distance": 0.8,
        "load": 25,
        "size": "RABBIT ACSR"
      },
      {
        "node": "B-C",
        "distance": 0.35,
        "load": 25,
        "size": "RABBIT ACSR"
      },
      {
        "node": "C-D",
        "distance": 0.2,
        "load": 25,
        "size": "RABBIT ACSR"
      },
      {
        "node": "D-E",
        "distance": 0.15,
        "load": 25,
        "size": "RABBIT ACSR"
      },
      {
        "node": "E-F",
        "distance": 0.01,
        "load": 376,
        "size": "RABBIT ACSR"
      },
      {
        "node": "F-G",
        "distance": 0.05,
        "load": 63,
        "size": "RABBIT ACSR"
      },
      {
        "node": "G-H",
        "distance": 0.45,
        "load": 25,
        "size": "RABBIT ACSR"
      },
      {
        "node": "H-I",
        "distance": 0.6,
        "load": 113,
        "size": "RABBIT ACSR"
      },
      {
        "node": "I-J",
        "distance": 0.2,
        "load": 25,
        "size": "RABBIT ACSR"
      },
      {
        "node": "J-K",
        "distance": 0.18,
        "load": 25,
        "size": "RABBIT ACSR"
      },
      {
        "node": "K-L",
        "distance": 0.01,
        "load": 63,
        "size": "RABBIT ACSR"
      },
      {
        "node": "L-M",
        "distance": 0.3,
        "load": 25,
        "size": "RABBIT ACSR"
      },
      {
        "node": "M-N",
        "distance": 0.1,
        "load": 88,
        "size": "RABBIT ACSR"
      },
      {
        "node": "N-O",
        "distance": 0.05,
        "load": 25,
        "size": "RABBIT ACSR"
      },
      {
        "node": "O-P",
        "distance": 0.15,
        "load": 25,
        "size": "RABBIT ACSR"
      },
      {
        "node": "P-Q",
        "distance": 0.2,
        "load": 63,
        "size": "RABBIT ACSR"
      },
      {
        "node": "Q-R",
        "distance": 0.3,
        "load": 25,
        "size": "RABBIT ACSR"
      },
      {
        "node": "R-S",
        "distance": 0.25,
        "load": 25,
        "size": "RABBIT ACSR"
      },
      {
        "node": "S-T",
        "distance": 0.15,
        "load": 63,
        "size": "RABBIT ACSR"
      },
      {
        "node": "T-U",
        "distance": 0.2,
        "load": 88,
        "size": "RABBIT ACSR"
      },
      {
        "node": "U-V",
        "distance": 0.8,
        "load": 50,
        "size": "RABBIT ACSR"
      },
      {
        "node": "V-W",
        "distance": 0.1,
        "load": 176,
        "size": "RABBIT ACSR"
      },
      {
        "node": "W-X",
        "distance": 0.35,
        "load": 25,
        "size": "RABBIT ACSR"
      },
      {
        "node": "X-Y",
        "distance": 0.2,
        "load": 226,
        "size": "RABBIT ACSR"
      },
      {
        "node": "Y-Z",
        "distance": 0.1,
        "load": 63,
        "size": "RABBIT ACSR"
      },
      {
        "node": "Z-AA",
        "distance": 0.05,
        "load": 25,
        "size": "RABBIT ACSR"
      },
      {
        "node": "AA-AB",
        "distance": 0.15,
        "load": 188,
        "size": "RABBIT ACSR"
      },
      {
        "node": "AB-AC",
        "distance": 0.2,
        "load": 25,
        "size": "RABBIT ACSR"
      },
      {
        "node": "AC-AD",
        "distance": 0.1,
        "load": 226,
        "size": "RABBIT ACSR"
      },
      {
        "node": "AD-AE",
        "distance": 0.2,
        "load": 25,
        "size": "RABBIT ACSR"
      },
      {
        "node": "AE-AF",
        "distance": 0.5,
        "load": 213,
        "size": "RABBIT ACSR"
      },
      {
        "node": "AF-AG",
        "distance": 0.55,
        "load": 50,
        "size": "RABBIT ACSR"
      },
      {
        "node": "AG-AH",
        "distance": 0.15,
        "load": 50,
        "size": "RABBIT ACSR"
      },
      {
        "node": "AH-AI",
        "distance": 0.35,
        "load": 100,
        "size": "RABBIT ACSR"
      },
      {
        "node": "AI-AJ",
        "distance": 0.25,
        "load": 176,
        "size": "RABBIT ACSR"
      },
      {
        "node": "AJ-AK",
        "distance": 0.45,
        "load": 63,
        "size": "RABBIT ACSR"
      },
      {
        "node": "AK-AL",
        "distance": 0.8,
        "load": 63,
        "size": "RABBIT ACSR"
      },
    ],
  });

  return <MDBDataTableV5 hover entriesOptions={[5, 10, 15]} entries={5} pagesAmount={4} data={datatable} />;
}