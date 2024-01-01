// components/AddComicForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
const DeleteComic = () => {
  const [title, setTitle] = useState('');
  const [NumberChapter, setNumberOfChapters] = useState('');

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // Xử lý dữ liệu biểu mẫu ở đây (nếu cần)
    console.log('Form submitted:', { title, NumberChapter });
    const dt = {title , NumberChapter}

    axios.delete(`/api/deleteComic`, {data:dt}).then(()=>{
        toast.success("Success")
      }).catch((error:any) =>{
        toast.error("Something Went Wrong")
      })
  
  };

  return (
    <div className='margin'>
      <form onSubmit={handleSubmit} >
        <label htmlFor="title" className='dhstyle'>Name of the comic:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label htmlFor="numberOfChapters" className='dhstyle'>Number of Chapters:</label>
        <input
          type="number"
          id="numberOfChapters"
          name="numberOfChapters"
          value={NumberChapter}
          onChange={(e) => setNumberOfChapters(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>

      <style jsx>{`
        form {
          max-width: 900px;
          margin: 0 auto;
        }

        label {
          display: block;
          margin-bottom: 5px;
        }

        input,
        textarea {
          width: 100%;
          margin-bottom: 10px;
        }

        button {
          background-color: #4caf50;
          color: white;
          padding: 10px 15px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .dhstyle{
            color: white;
            fontFamily: Dancing Script;
            font-size: 16px;
        }

        button:hover {
          background-color: #45a049;
        }
        .margin{
            margin-top: 50px;
        }
      `}</style>
    </div>
  );
};

export default DeleteComic;
