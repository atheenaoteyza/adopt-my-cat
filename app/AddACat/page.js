"use client";
import { useEffect, useState } from "react";
import styles from "./add-cat.module.css";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // Make sure to import db from your firebase configuration
import { redirect } from "next/navigation";

export default function AddCat() {
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    description: "",
    owner: "",
    age: "",
    breed: "",
    image: null,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // Add items to database
  const addCat = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "cats"), {
        name: formData.name,
        slug: formData.slug,
        description: formData.description,
        owner: formData.owner,
        age: formData.age,
        breed: formData.breed,
        image: formData.image,
      });
      console.log("Cat added successfully!");
    } catch (error) {
      console.error("Error adding cat: ", error);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    addCat(e); // Call addCat inside handleSubmit
    redirect("/");
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Add a Cat for Adoption</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Name:
          <input
            className={styles.input}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        <label className={styles.label}>
          Slug:
          <input
            className={styles.input}
            type="text"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
          />
        </label>

        <label className={styles.label}>
          Description:
          <textarea
            className={styles.input}
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </label>

        <label className={styles.label}>
          Owner:
          <input
            className={styles.input}
            type="text"
            name="owner"
            value={formData.owner}
            onChange={handleChange}
          />
        </label>

        <label className={styles.label}>
          Age:
          <input
            className={styles.input}
            type="number"
            name="age"
            value={formData.age}
            min="0"
            onChange={handleChange}
          />
        </label>

        <label className={styles.label}>
          Breed:
          <input
            className={styles.input}
            type="text"
            name="breed"
            value={formData.breed}
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Upload Image:
          <input
            className={styles.input}
            type="file"
            accept="image/*"
            //onChange={handleFileChange}
          />
        </label>

        <button type="submit" className={styles.button}>
          Add Cat
        </button>
      </form>
    </div>
  );
}
