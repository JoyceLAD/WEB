'use client'
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import DeleteComic from "@/components/DeleteComic";
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
            <button className="btn btn-success" onClick={() => router.push('/author/AuthorComic')}>Danh sách truyện đã đăng</button>

                <button className="btn btn-success" onClick={() => router.push('/author/addcomic')}>Thêm Truyện</button>
                <button className="btn btn-success" onClick={() => router.push('/author/addchapter')}>Thêm Chapter</button>
                <button className="btn btn-success" onClick={() => router.push('/author/deletecomic')}>Xóa Truyện</button>
                <button className="btn btn-success" onClick={() => router.push('/author/deletechapter')}>Xóa Chapter</button>
            </section>

            <section>
                <DeleteComic/>
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
      `}</style>
        </>

    )
}
export default AuthorPage;







