import { Table, Box, Skeleton } from '@radix-ui/themes';

export default function UsersListSkeleton() {
  return (
    <Box maxWidth='60rem'>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Phone</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {generateItems().map(item => (
            <Table.Row key={item}>
              <Table.RowHeaderCell>
                <Skeleton />
              </Table.RowHeaderCell>
              <Table.Cell>
                <Skeleton />
              </Table.Cell>
              <Table.Cell>
                <Skeleton />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
}

function generateItems(amount?: number): number[] {
  return Array.from({ length: amount ?? 10 }, (_, i) => i + 1);
}
