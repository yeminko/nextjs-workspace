"use client";

export default function FilterError({ error }) {
  return (
    <div id="error">
      <h2>Invalid filter</h2>
      <p>{error.message || "An error occurred while loading the news."}</p>
    </div>
  );
}
