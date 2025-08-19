export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  return {
    props: { users },
  };
}

export default function Home({ users }) {
  return (
    <div>
      <h1>User Directory</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <a href={`/${user.username}`}>{user.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
