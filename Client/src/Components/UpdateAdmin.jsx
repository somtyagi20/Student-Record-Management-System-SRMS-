import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";

const UpdateAdmin = ({ setFormVisible }) => {
  const { user, setUser } = useContext(UserContext);
  const [name, setName] = useState(user.name || "");

  const [email, setEmail] = useState(user.email || "");

  const handleUpdate = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3000/api/v1/admin/updatePersonalDetails`,
        {
          name: name,
          email: email,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data.success) {
        setUser(response.data.data);
        setFormVisible(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 0 10px 0 #000",
        zIndex: "1000",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        border: "1px solid #ccc",
        width: "30%",
        padding: "20px",
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <label
          style={{
            fontSize: "20px",
            fontWeight: "bold",
          }}
          htmlFor="name"
        >
          Name:
        </label>
        <input
          style={{
            padding: "5px",
            fontSize: "15px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label
          style={{
            fontSize: "20px",
            fontWeight: "bold",
          }}
          htmlFor="email"
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: "5px",
            fontSize: "15px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        <button
          type="button"
          onClick={handleUpdate}
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            background: "#f5f5f5",
            color: "black",
            fontSize: "15px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateAdmin;
