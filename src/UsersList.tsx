import React from 'react';
import { Table, Box } from '@radix-ui/themes';
import { User, UserData } from './types';

function UsersList({ users }: { users: UserData }) {
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
      <Table.RowHeaderCell>{user?.name ?? ''}</Table.RowHeaderCell>
      <Table.Cell>{user?.email ?? ''}</Table.Cell>
      <Table.Cell>{user?.phone ?? ''}</Table.Cell>
    </Table.Row>
  );
}

export default React.memo(UsersList);
