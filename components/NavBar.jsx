import NavLink from './NavLink';

export default function NavBar() {
  return (
    <nav>
      <ul className='flex gap-2'>
        <li>
          <NavLink href='/'>Inde Gamer</NavLink>
        </li>
        <li className='ml-auto'>
          <NavLink href='/reviews'>Reviews</NavLink>
        </li>
        <li>
          <NavLink href='/about'>About</NavLink>
        </li>
      </ul>
    </nav>
  );
}
