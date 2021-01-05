import React from "react"
import { Table, TableHeading, TableData, TableRow } from "../common/Table"

export const NutritionalInfo: React.FC = () => {
  return (
    <Table>
      <TableRow>
        <TableHeading>Ravintosisältö</TableHeading>
        <TableHeading>/ 100g</TableHeading>
      </TableRow>
      <TableRow>
        <TableData>Energia</TableData>
        <TableData>200 kcal</TableData>
      </TableRow>
    </Table>
  )
}
