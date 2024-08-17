'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  {
    name: 'Home',
    pathName: '/',
  },
  {
    name: 'services',
    pathName: '/services',
  },
  {
    name: 'resume',
    pathName: '/resume',
  },
  {
    name: 'work',
    pathName: '/work',
  },
  {
    name: 'contact',
    pathName: '/contact',
  },
];
const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.pathName}
          className={`${
            pathname === link.pathName && 'text-accent border-b-2 border-accent'
          } capitalize font-medium hover:text-accent transition-all`}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
