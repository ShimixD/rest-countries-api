import { useState } from "react";

export default function Search({ handleChanges }) {
  const handleChange = (event) => {
    const searchValue = event.target.value;
    handleChanges(searchValue);
  };
  return (
    <section className="input-container">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input type="search" name="search" id="search" onChange={handleChange} placeholder="Search for a country..." />
    </section>
  )
}