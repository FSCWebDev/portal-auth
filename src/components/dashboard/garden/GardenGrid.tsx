import { FormatNumber, Table } from "@chakra-ui/react";

export default function GardenGrid() {
  return (
    <Table.Root size='lg'>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Sensor No.</Table.ColumnHeader>
          <Table.ColumnHeader>Planter Row</Table.ColumnHeader>
          <Table.ColumnHeader>Moisture (%)</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>1</Table.Cell>
          <Table.Cell>1</Table.Cell>
          <Table.Cell>
            <FormatNumber
              value={0.8}
              style='percent'
              maximumFractionDigits={0}
              minimumFractionDigits={0}
            ></FormatNumber>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  );
}
