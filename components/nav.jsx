import Link from "next/link";

export const Nav = () => {
  return (
    <nav className="nav">
      <ul className="flex p-6 bg-gray-100">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <Link href="/admin">Admin</Link>
        </li>
      </ul>
    </nav>
  );
};
