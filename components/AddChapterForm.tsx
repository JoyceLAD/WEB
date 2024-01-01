// components/AddComicForm.js
import React, { useState } from 'react';

const AddChapterForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDes] = useState('');
  const [numberOfChapters, setNumberOfChapters] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // Xử lý dữ liệu biểu mẫu ở đây (nếu cần)
    console.log('Form submitted:', { title, description, numberOfChapters, image });
  };

  return (
    <div className='margin'>
      <form onSubmit={handleSubmit} >
        <label htmlFor="title" className='dhstyle'>Name of the comic: </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label htmlFor="numberOfChapters" className='dhstyle'>Chapter: </label>
        <input
          type="number"
          id="numberOfChapters"
          name="numberOfChapters"
          value={numberOfChapters}
          onChange={(e) => setNumberOfChapters(e.target.value)}
          required
        />

        <label htmlFor="des" className='dhstyle'>Content: </label>
        <textarea
          id="des"
          name="des"
          value={description}
          onChange={(e) => setDes(e.target.value)}
          rows={4}
          required
        ></textarea>

        {/* <label htmlFor="image" className='dhstyle'>Image URL: </label>
        <input
          type="url"
          id="image"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        /> */}

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
};

export default AddChapterForm;
