import React from 'react';
import { MDBDataTable } from 'mdbreact';

export default function Table2() {
  const [data] = React.useState({
    columns: [
      {
        label: 'O&M Unit',
        field: 'o&m',
        width: 150,
        attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'Name',
        },
      },
      {
        label: '100 KVA',
        field: '100',
        width: 270,
      },
      {
        label: '63 KVA',
        field: '63',
        width: 200,
      },
      {
        label: '25 KVA',
        field: '25',
        width: 100,
      },
      {
        label: 'Total',
        field: 'total',
        width: 150,
      },
      {
        label: 'KVA',
        field: 'kva',
        width: 100,
      },
      {
        label: 'HT Line',
        field: 'ht',
        width: 100,
      },
    ],
    rows: [
        {
            "o&m": "MADIKERI",
            "100": 6,
            "63": 11,
            "25": 28,
            "total": 45,
            "kva": 1993,
            "ht": 28,
        },
        {
            "o&m": "SAMPAJE",
            "100": 4,
            "63": 22,
            "25": 45,
            "total": 71,
            "kva": 2901,
            "ht": 68,
        },
        {
            "o&m": "PERAJE",
            "100": 7,
            "63": 3,
            "25": 32,
            "total": 45,
            "kva": 1689,
            "ht": 46,
        },
        {
            "o&m": "Export-Intr escom",
            "100": 3,
            "63": 14,
            "25": 20,
            "total": 37,
            "kva": 1683,
            "ht": 24,
        },
    ],
    });

  return (<MDBDataTable
    responsive
    bordered
    noBottomColumns
    hover
    paging={false}
    theadColor="grey"
    theadTextWhite
    data={data}
  />) 
}