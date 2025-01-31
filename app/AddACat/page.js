"use client";
import { useEffect, useState } from "react";
import styles from "./add-cat.module.css";

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
  const [cats, setCats] = useState([]);

  const [imagePreview, setImagePreview] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // Add items to database

  // Read items from database

  // useEffect(() => {
  //   async function getCats() {
  //     const catsData = await fetchCatsData();
  //     setCats(catsData); // Store the fetched cats data in state
  //   }
  //   getCats();
  // }, []);

  // useEffect(() => {
  //   fetchCatsData();
  // }, []);
  // function handleImageChange(e) {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setFormData((prev) => ({ ...prev, image: file }));
  //     setImagePreview(URL.createObjectURL(file));
  //   }
  // }

  function handleSubmit(e) {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call)
    console.log(formData);
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

        {/* <label className={styles.label}>
          Image:
          <input
            className={styles.input}
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </label> */}

        {/* {imagePreview && (
          <div className={styles.imagePreview}>
            <img src={imagePreview} alt="Cat Preview" />
          </div>
        )} */}

        <button type="submit" className={styles.button}>
          Add Cat
        </button>
      </form>
    </div>
  );
}
