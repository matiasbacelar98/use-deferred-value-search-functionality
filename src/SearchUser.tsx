import { TextField, Box } from '@radix-ui/themes';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

export default function SearchUser({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <Box maxWidth='20rem'>
      <TextField.Root
        onChange={e => onChange(e.target.value)}
        placeholder='Search username'
        value={value}
      >
        <TextField.Slot>
          <MagnifyingGlassIcon height='16' width='16' />
        </TextField.Slot>
      </TextField.Root>
    </Box>
  );
}
