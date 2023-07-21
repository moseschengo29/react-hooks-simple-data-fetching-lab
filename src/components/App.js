import { useEffect, useState } from "react";

// create your App component here
function App() {
  const [dog, setDog] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setDog(data.message));
  }, []);

  if (!dog) return <p>Loading...</p>;

  console.log("runs");
  return (
    <div>
      <img src={dog} alt="A Random Dog" />
    </div>
  );
}

export default App;
