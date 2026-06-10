"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type Props = {
  images: string[];
};

export default function ImageLightbox({ images }: Props) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className="h-60 bg-cover bg-center rounded-xl shadow-md cursor-pointer hover:scale-105 transition"
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={images.map((src) => ({ src }))}
      />
    </>
  );
}