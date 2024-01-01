import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
const AddChapterForm = () => {
  const [name, setname] = useState('');
  const [comicId, setcomicId] = useState('');
  const [imageurl, setimageurl] = useState('');

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // Xử lý dữ liệu biểu mẫu ở đây (nếu cần)
    console.log('Form submitted:', { name, comicId, imageurl });
    const data = {name, comicId, imageurl}
    
    axios.post("/api/createChapter", data).then(()=>{
      toast.success("Success")
    }).catch((error:any) =>{
      toast.error("Something Went Wrong")
    })
  };


  return (
    <div className='margin'>
      <form onSubmit={handleSubmit} >
        <label htmlFor="title" className='dhstyle'>Name of the chapter: </label>
        <input
          type="text"
          id="title"
          name="title"
          value={name}
          onChange={(e) => setname(e.target.value)}
          required
        />
        <label htmlFor="numberOfChapters" className='dhstyle'>Comic ID : </label>
        <input
          type="text"
          id="numberOfChapters"
          name="numberOfChapters"
          value={comicId}
          onChange={(e) => setcomicId(e.target.value)}
          required
        />

        {/* <label htmlFor="des" className='dhstyle'>Content: </label>
        <textarea
          id="des"
          name="des"
          value={description}
          onChange={(e) => setDes(e.target.value)}
          rows={4}
          required
        ></textarea> */}

        <label htmlFor="image" className='dhstyle'>Image URL: </label>
        <input
          type="url"
          id="image"
          name="image"
          value={imageurl}
          onChange={(e) => setimageurl(e.target.value)}
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
      }

export default AddChapterForm;
