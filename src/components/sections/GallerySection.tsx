import { motion } from 'framer-motion';
import { Camera, Upload, Heart } from 'lucide-react';
import { useState } from 'react';

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
      src: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=400&fit=crop',
      alt: 'Beautiful couple moment',
      caption: 'Our first adventure together'
    },
    {
      id: '2',
      src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=400&fit=crop',
      alt: 'Romantic dinner',
      caption: 'That perfect evening'
    },
    {
      id: '3',
      src: 'https://images.unsplash.com/photo-1518621012118-1d2cc6b3d49a?w=400&h=400&fit=crop',
      alt: 'Sunset together',
      caption: 'Watching the world together'
    },
    {
      id: '4',
      src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=400&fit=crop',
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              className="gallery-item interactive group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-square">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-2xl" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">{photo.caption}</p>
                </div>
                <Heart className="absolute top-4 right-4 w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};