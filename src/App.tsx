import { Theme, Heading } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

import UsersList from './UsersList';

export default function App() {
  return (
    <Theme accentColor='indigo'>
      <Heading color='indigo'>Users</Heading>
      <UsersList users={[]} />
    </Theme>
  );
}
