// components/AddComicForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
const DeleteUser = () => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // Xử lý dữ liệu biểu mẫu ở đây (nếu cần)
    console.log('Form submitted:', { name, email });
    const dt = {name , email}

    axios.delete(`/api/deleteUser`, {data:dt}).then(()=>{
        toast.success("Success")
      }).catch((error:any) =>{
        toast.error("Something Went Wrong")
      })
  
  };

  return (
    <div className='margin'>
      <form onSubmit={handleSubmit} >
        <label htmlFor="title" className='dhstyle'>User name:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={name}
          onChange={(e) => setname(e.target.value)}
          required
        />
        <label htmlFor="numberOfChapters" className='dhstyle'>Email:</label>
        <input
          type="text"
          id="numberOfChapters"
          name="numberOfChapters"
          value={email}
          onChange={(e) => setemail(e.target.value)}
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

export default DeleteUser;
