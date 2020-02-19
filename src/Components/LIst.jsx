import React from "react";

export default function LIst() {
    
  const names = "{props.names}";
  const listnames = names.map((name) => <li key={name}>{name}</li>);

  return (
    <div>
      <ul>{listnames}</ul>
    </div>
  );
}
