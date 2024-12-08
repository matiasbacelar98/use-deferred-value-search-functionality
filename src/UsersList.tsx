import { Table, Box } from '@radix-ui/themes';
import { User, UserData } from './types';

export default function UsersList({ users }: { users: UserData }) {
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
          {users.map(user => (
            <UserItem key={user.id} user={user} />
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
}

function UserItem({ user }: { user: User }) {
  return (
    <Table.Row>
      <Table.RowHeaderCell>Jasper Eriksson</Table.RowHeaderCell>
      <Table.Cell>jasper@example.com</Table.Cell>
      <Table.Cell>Developer</Table.Cell>
    </Table.Row>
  );
}