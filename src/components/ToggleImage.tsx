import { useState } from "react";

const ToggleImage = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      {toggle ? (
        <img src="/kratos.webp" style={{ width: "100px", height: "100px" }} />
      ) : null}
      <button onClick={() => setToggle(!toggle)}>Toggle Image</button>
    </div>
  );
};

export default ToggleImage;
