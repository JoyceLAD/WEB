'use client'
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import Footer from "@/components/Footer";

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
    // backgroundColor: '#476',
    // backgroundImage: 'search-bg.webp',
    margin: '10px 60px 0 60px'
};


const AuthorPage = () => {
    const router = useRouter();
    return (
        <>
            <section style={sectionStyles}>
                <button className="btn btn-success" >Thêm Truyện</button>
                <button className="btn btn-success" >Thêm Chapter</button>
                <button className="btn btn-success" >Sửa Truyện</button>
                <button className="btn btn-success" >Sửa Chapter</button>
                <button className="btn btn-success" >Xóa Truyện</button>
                <button className="btn btn-success" >Xóa Chapter</button>
            </section>

            <section>
            <div>
                <div className="card w-96 bg-base-100 shadow-xl" style={sectionStyles}>
                                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card w-96 bg-base-100 shadow-xl" style={sectionStyles}>
                                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
            </section>

            <style jsx>{`
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
        .btn-success {
          background-color: #5cb85c;
          color: #fff;
          margin-left: 80px;
          margin-top: 10px;
          margin-bottom: 10px;
        }
        .footer{
            position: bottom;
        }
        .container {
            position: relative;
        }
        .copyright {
            position: relative;
            bottom: 0;
            right:0;
            left:0;
        }
        

      `}</style>
        </>

    )
}
export default AuthorPage;

