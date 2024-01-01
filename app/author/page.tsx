'use client'
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation';

const logoStyles = {
    marginLeft: '40px',
    fontSize: '2.0rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    fontFamily: 'Dancing Script, cursive, Lobster, sans-serif, Arial',
    color: 'black',
    display: 'flex', // Thêm display: 'flex' để chứa hình ảnh và văn bản trong cùng một hàng
    alignItems: 'center', // Canh giữa theo chiều dọc
};

const logoImgStyles = {
    width: '50px', // Điều chỉnh kích thước hình ảnh
    height: '50px',
    marginRight: '10px', // Khoảng cách giữa hình ảnh và văn bản
    display: 'flex',
};

const h1_style = {
    color: 'black',
    fontFamily: 'Dancing Script, cursive, Lobster, sans-serif, Arial',
    display: 'flex',
    fontSize: '2.0rem',
    fontStyle: 'bold',
    marginRight: '200px',
};

const sectionStyles = {
    backgroundColor: '#235',
    // margin: ' 20px 60px 20px 60px ',
};


const AuthorPage = () => {
    const router = useRouter();
    return (
        <>
            <header>
                <Link href="/" style={logoStyles} >
                    <img src="/logo-256x256.png" alt="Logo" style={logoImgStyles} />
                    VcComic
                </Link>
                <h1 style={h1_style}>Author Dashboard</h1>
            </header>
            <section style={sectionStyles}>
                <button className="btn btn-success" >Thêm Chapter</button>
                <button className="btn btn-success" >Thêm Nội Dung</button>
                <button className="btn btn-success" >Sửa chapter</button>
                <button className="btn btn-success" >Sửa Nội Dung</button>
                <button className="btn btn-success" >Xóa Chapter</button>
                <button className="btn btn-success" >Xóa Nội Dung</button>
            </section>

            <style jsx>{`
        body {
          font-family: 'Arial', sans-serif;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-rows: auto 1fr auto;
          min-height: 100vh;
        }

        header {
          background-color: #333;
          color: #fff;
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-image: url('search-bg.webp');
        }

        .logo-container {
          display: flex;
          align-items: center;
        }

        .logo {
          max-width: 50px;
          margin-right: 1rem;
        }

        .dashboard-title {
          margin: 0;
          text-align: center;
          flex-grow: 1;
        }

        .search-bar {
          display: flex;
          align-items: center;
        }

        input {
          padding: 0.5rem;
          font-size: 1rem;
          margin-right: 0.5rem;
        }

        button {
          padding: 0.5rem 1rem;
          font-size: 1rem;
          cursor: pointer;
          border: none;
          background-color: #5bc0de;
          border-radius: 4px;
          margin-left: 60px;
          margin-bottom: 20px;
        }

        .btn-info {
          background-color: #5bc0de;
          color: #fff;
          margin-left: 50px;
          margin-top:20px;
        }

        .btn-success {
          background-color: #5cb85c;
          color: #fff;
          margin-left: 80px;
          margin-top:20px;
          margin-bottom: 20px;
        }

        .btn-warning {
          background-color: #f0ad4e;
          color: #fff;
          margin-left: 50px;
          margin-top:20px;
        }

        .btn-error {
          background-color: #d9534f;
          color: #fff;
          margin-left: 50px;
          margin-top:20px;
        }

        main {
          padding: 1rem;
        }

        footer {
          background-color: #333;
          color: #fff;
          padding: 1rem;
          text-align: center;
        }

        /* Add additional styling as needed */
      `}</style>

        </>

    )
}
export default AuthorPage;

