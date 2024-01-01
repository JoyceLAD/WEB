// components/Header.js
import Link from 'next/link';
import Router from 'next/router';


const headerStyles = {
    backgroundColor: '#333',
    color: 'white',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between', // Dàn đều các thành phần theo chiều ngang
    alignItems: 'center', // Canh giữa theo chiều dọc
  };
  
  const logoStyles = {
    marginLeft: '40px',
    fontSize: '2.0rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    fontFamily: 'Dancing Script, cursive, Lobster, sans-serif, Arial',
    color: 'White',
    display: 'flex', // Thêm display: 'flex' để chứa hình ảnh và văn bản trong cùng một hàng
    alignItems: 'center', // Canh giữa theo chiều dọc
  };
  
  const logoImgStyles = {
    width: '50px', // Điều chỉnh kích thước hình ảnh
    height: '50px',
    marginRight: '10px', // Khoảng cách giữa hình ảnh và văn bản
  };
  
  const navStyles = {
    display: 'flex',
    marginLeft: '50px'
  };
  
  const navItemStyles = {
    margin: '0 20px', // Khoảng cách giữa các thành phần trong menu
    textDecoration: 'none',
    color: 'white',
    fontSize: '1.1rem',
    transition: 'color 0.6s, font-size 0.6s ease-in-out',  // event hover
  };

//change theme light or dark
  const handleChangeTheme = (type: 'light' | 'dark') => {
    if (type === 'light') {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
      document.body.classList.remove('dark:bg-gray-900')
      localStorage.setItem('theme', 'light')
    }
    if (type === 'dark') {
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
      document.body.classList.add('dark:bg-gray-900')
      localStorage.setItem('theme', 'dark')
    }
  }

const Header = () => {
  return (
    <header style={headerStyles}>
      <Link href="/" style={logoStyles} >
      <img src="/logo-256x256.png" alt="Logo" style={logoImgStyles} />
        VcComic
      </Link>
      <nav style={navStyles}>
      </nav>

    </header>
  );
};

export default Header;
