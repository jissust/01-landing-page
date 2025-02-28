import logotipo from '../assets/logotipo.png'

function Navbar() {
  return (
    <nav className="py-0 relative">
        <div className="container mx-auto">
            <img src={logotipo} alt="logo" className='mx-auto' />
        </div>
    </nav>
  );
}

export default Navbar;
