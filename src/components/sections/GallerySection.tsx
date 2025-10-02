import { motion } from 'framer-motion';
import ThreeDHoverGallery from "@/components/ui/3d-hover-gallery";
import { Camera, Upload, Heart } from 'lucide-react';
import { useState } from 'react';
import GradualBlur from '@/components/GradualBlur';

interface Photo {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

export const GallerySection = () => {
  const [photos, setPhotos] = useState<Photo[]>([
    {
      id: '1',
      src: './IMG-20250525-WA0011.jpg',
      alt: 'Beautiful couple moment',
      caption: 'Our first adventure together'
    },
    {
      id: '2',
      src: './IMG-20250828-WA0113.jpg',
      alt: 'Romantic dinner',
      caption: 'That perfect evening'
    },
    {
      id: '3',
      src: './Snapchat-353749387.jpg',
      alt: 'Sunset together',
      caption: 'Watching the world together'
    },
    {
      id: '4',
      src: './Snapchat-1900427176.jpg',
      alt: 'Holding hands',
      caption: 'Always by your side'
    },
  ]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const newPhoto: Photo = {
            id: Date.now().toString() + Math.random(),
            src: e.target?.result as string,
            alt: 'Uploaded memory',
            caption: 'A precious moment'
          };
          setPhotos(prev => [...prev, newPhoto]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-6">
            <Camera className="w-12 h-12 text-primary float" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Our Beautiful Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every photograph tells a story, every moment captured is a treasure. 
            These are the memories that led us to this perfect moment.
          </p>
        </motion.div>

        {/* Upload Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <label className="btn-romantic interactive cursor-pointer inline-flex items-center gap-2">
            <Upload className="w-5 h-5" />
            Add Your Favorite Memory
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        </motion.div>

        {/* 3D Hover Gallery Grid */}
        <ThreeDHoverGallery
          images={photos.map(photo => photo.src)}
          onImageClick={(index, image) => {
            // Optionally show caption or do something on click
          }}
        />
      </div>

      {/* Gradual Blur Effect */}
      <GradualBlur
        target="parent"
        position="bottom"
        height="6rem"
        strength={1.5}
        divCount={4}
        curve="ease-out"
        exponential={false}
        opacity={0.9}
      />
    </section>
  );
};