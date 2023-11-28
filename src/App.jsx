import { useEffect, useState } from "react";
import Gallery from "./Gallery";
import PopupBox from "./PopupBox";
import SearchForm from "./SearchForm";
import ThemeToggle from "./ThemeToggle";

function App() {
  const [item, setItem] = useState(null);

  return (
    <main>
      <ThemeToggle />
      <SearchForm />
      <Gallery setItem={setItem} />
      {item !== null && <PopupBox item={item} setItem={setItem} />}
    </main>
  );
}

export default App;
