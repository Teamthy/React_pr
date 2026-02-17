import HeroSection from "../sections/HeroSection";
import FeaturesSection from "../sections/FeaturesSection";
import TestimonialSection from "../sections/TestimonialSection";
import PricingSection from "../sections/PricingSection";
import ContactSection from "../sections/ContactSection";
import CTASection from "../sections/CTASection";
import { useEffect, useState } from "react";
import AddThumbnail from "../components/AddThumbnail";

interface Thumbnail {
  id: number;
  title: string;
  image_url: string;
}

export default function HomePage() {
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
    <>
      <HeroSection />
      <FeaturesSection />
      <TestimonialSection />
      <PricingSection />
      <ContactSection />
      <CTASection />

      <section>
        <h2>Thumbnails</h2>
        <AddThumbnail onAdded={fetchThumbnails} />
        <ul>
          {thumbnails.map((thumb) => (
            <li key={thumb.id}>
              <h3>{thumb.title}</h3>
              <img src={thumb.image_url} alt={thumb.title} width="200" />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
