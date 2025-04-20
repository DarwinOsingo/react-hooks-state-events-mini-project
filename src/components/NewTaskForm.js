import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [formData, setFormData] = useState({
    text: "",
    category: "Code",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit(formData);
    setFormData({ text: "", category: "Code" }); // reset form
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label htmlFor="task-details">Details</label>
      <input
        id="task-details"
        type="text"
        name="text"
        value={formData.text}
        onChange={handleChange}
      />

      <label htmlFor="task-category">Category</label>
      <select
        id="task-category"
        name="category"
        value={formData.category}
        onChange={handleChange}
      >
        {categories
          .filter((cat) => cat !== "All")
          .map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
      </select>

      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
