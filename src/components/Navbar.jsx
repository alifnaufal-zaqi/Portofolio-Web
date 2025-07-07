const Navbar = () => {
  return (
    <nav className="flex justify-between">
      <h1 className="text-4xl">Portofolio</h1>
      <ul className="flex gap-10 text-lg">
        <li>
          <a href="">Beranda</a>
        </li>
        <li>
          <a href="">Tentang Saya</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Sertifikasi</a>
        </li>
        <li>
          <a href="">Kontak</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
