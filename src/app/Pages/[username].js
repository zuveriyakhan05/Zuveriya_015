import { useRouter } from 'next/router';

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  const paths = users.map(user => ({
    params: { username: user.username },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();
  const user = users.find(u => u.username === params.username);

  if (!user) {
    return { notFound: true };
  }

  return {
    props: { user },
    revalidate: 10, 
  };
}

export default function UserPage({ user }) {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>Website: <a href={`http://${user.website}`} target="_blank">{user.website}</a></p>
    </div>
  );
}
