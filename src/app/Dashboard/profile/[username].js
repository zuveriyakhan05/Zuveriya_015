import { useRouter } from 'next/router';

export default function UserProfile() {
  const { username } = useRouter().query;

  return <h3>Profile of {username}</h3>;
}
