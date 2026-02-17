import { useEffect, useState } from "react";
import AddThumbnail from "../components/AddThumbnail";

interface Thumbnail {
  id: number;
  title: string;
  image_url: string;
}

export default function Thumbnails() {
  const [thumbnails, setThumbnails] = useState<Thumbnail[]>([]);

  const fetchThumbnails = () => {
    fetch("http://localhost:5000/thumbnails")
      .then((res) => res.json())
      .then((data) => setThumbnails(data))
      .catch((err) => console.error("Error fetching thumbnails:", err));
  };

  useEffect(() => {
    fetchThumbnails();
  }, []);

  return (
    <div>
      <h1>Thumbnails</h1>
      <AddThumbnail onAdded={fetchThumbnails} />
      <ul>
        {thumbnails.map((thumb) => (
          <li key={thumb.id}>
            <h3>{thumb.title}</h3>
            <img src={thumb.image_url} alt={thumb.title} width="200" />
          </li>
        ))}
      </ul>
    </div>
  );
}
