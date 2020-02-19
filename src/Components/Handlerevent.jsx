import React from "react";

export default function Handlerevent() {
  function handleclick(e) {
    e.preventDefault();
    alert("You click the link");
    window.location.href = "https://www.youtube.com/watch?v=3EbYJrAOpUs&list=PLEiEAq2VkUUKMie-cEUnkHRxiFKDZJGqO&index=3";
  }
  return (
    <div>
      <a href="https://www.youtube.com/watch?v=3EbYJrAOpUs&list=PLEiEAq2VkUUKMie-cEUnkHRxiFKDZJGqO&index=3" onClick={handleclick}>
        Click here
      </a>
    </div>
  );
}
