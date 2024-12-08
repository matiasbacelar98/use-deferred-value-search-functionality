import React from 'react';

import { Theme, Heading, Flex } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

import UsersList from './UsersList';
import UsersListSkeleton from './UsersListSkeleton';
import SearchUser from './SearchUser';

import { User } from './types';
import { useFetch, useDebounce } from './hooks';
import { URL } from './constants';

export default function App() {
  const [query, setQuery] = React.useState<string>('');

  const deferredQuery = React.useDeferredValue(query);
  const debouncedQuery = useDebounce(deferredQuery, 500);

  const { data, loading } = useFetch<User[]>(
    debouncedQuery === '' ? URL : `${URL}?name=${debouncedQuery}`
  );

  function handleChange(value: string) {
    setQuery(value);
  }

  return (
    <Theme accentColor='indigo'>
      <Flex direction='column' gapY='2' pb='3'>
        <Heading color='indigo'>Users</Heading>
        <SearchUser value={query} onChange={handleChange} />
      </Flex>
      {loading ? <UsersListSkeleton /> : <UsersList users={data ?? []} />}
    </Theme>
  );
}
