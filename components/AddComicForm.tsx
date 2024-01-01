// components/AddComicForm.js
import axios from 'axios';
import { error } from 'console';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const AddComicForm = () => {
  const [title, setTitle] = useState('');
  const [desc, setDes] = useState('');
  const [NumberChapter, setNumberOfChapters] = useState('');
  const [image, setImage] = useState('');
  
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // Xử lý dữ liệu biểu mẫu ở đây (nếu cần)
    console.log('Form submitted:', { title, desc, NumberChapter, image });

    const data = {title, desc, NumberChapter, image}
    axios.post("/api/createComic", data).then(()=>{
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

        <label htmlFor="des" className='dhstyle'>Description:</label>
        <textarea
          id="des"
          name="des"
          value={desc}
          onChange={(e) => setDes(e.target.value)}
          rows={4}
          required
        ></textarea>

        <label htmlFor="numberOfChapters" className='dhstyle'>Number of Chapters:</label>
        <input
          type="number"
          id="numberOfChapters"
          name="numberOfChapters"
          value={NumberChapter}
          onChange={(e) => setNumberOfChapters(e.target.value)}
          required
        />

        <label htmlFor="image" className='dhstyle'>Image URL: </label>
        <input
          type="url"
          id="image"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
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

export default AddComicForm;
