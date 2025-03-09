'use client';

import React from 'react';

interface Image {
  id: number;
  url: string;
  height: number;
}

interface MasonryGridProps {
  images?: Image[];
}

const defaultImages: Image[] = Array.from({length: 12}, (_, i) => ({
  id: i,
  url: `https://picsum.photos/400/${Math.floor(Math.random() * 200 + 300)}`,
  height: Math.floor(Math.random() * 200 + 300),
}));

export function MasonryGrid({images = defaultImages}: MasonryGridProps) {
  return (
    <div className="w-full p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-[200px]">
        {images.map((image) => (
          <div
            key={image.id}
            className="rounded-lg overflow-hidden hover:opacity-75 transition-opacity duration-300"
            style={{
              gridRow: `span ${Math.ceil(image.height / 200)}`,
            }}
          >
            <img src={image.url} alt={`Grid item ${image.id}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
