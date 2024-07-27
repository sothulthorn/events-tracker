import Link from 'next/link';
import Logo from './Logo';

const routes = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Events',
    path: '/events/all',
  },
];

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b border-white/10 h-14 px-3 sm:px-9">
      <Logo />

      <nav>
        <ul className="flex gap-6 text-sm">
          {routes.map((routes) => (
            <li
              key={routes.path}
              className="text-white/50 hover:text-white transition"
            >
              <Link href={routes.path}>{routes.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
