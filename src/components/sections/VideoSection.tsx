import { motion } from 'framer-motion';
import { Play, Upload, Video } from 'lucide-react';
import { useState } from 'react';

interface VideoItem {
  id: string;
  src: string;
  title: string;
  description: string;
  thumbnail?: string;
}

export const VideoSection = () => {
  const [videos, setVideos] = useState<VideoItem[]>([
    {
      id: '1',
      src: './VN20251001_133438.mp4',
      title: 'Our First Date',
      description: 'The day everything started',
      thumbnail: 'https://images.unsplash.com/photo-1511376777868-611b54f68947?w=600&h=400&fit=crop'
    },
    {
      id: '2',
      src: './VN20251001_133706.mp4',
      title: 'Adventures Together',
      description: 'All our beautiful journeys',
      thumbnail: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop'
    }
  ]);

  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      Array.from(files).forEach((file) => {
        const url = URL.createObjectURL(file);
        const newVideo: VideoItem = {
          id: Date.now().toString() + Math.random(),
          src: url,
          title: file.name.replace(/\.[^/.]+$/, ""),
          description: 'A special moment captured'
        };
        setVideos(prev => [...prev, newVideo]);
      });
    }
  };

  return (
    <section className="py-20 px-6 bg-card/30">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-6">
            <Video className="w-12 h-12 text-accent float pulse-glow" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Moving Memories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Some moments are too beautiful for photos alone. 
            These videos capture the essence of our love story.
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
            Share a Special Video
            <input
              type="file"
              multiple
              accept="video/*"
              onChange={handleVideoUpload}
              className="hidden"
            />
          </label>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              className="gallery-item interactive group cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedVideo(video)}
            >
              <div className="relative aspect-video">
                {video.thumbnail ? (
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-cosmic rounded-2xl flex items-center justify-center">
                    <Video className="w-16 h-16 text-white/70" />
                  </div>
                )}
                
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 rounded-2xl flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
                <p className="text-muted-foreground">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div
              className="bg-card rounded-2xl p-6 max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">{selectedVideo.title}</h3>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  ✕
                </button>
              </div>
              
              <video
                src={selectedVideo.src}
                controls
                className="w-full aspect-video rounded-xl"
                autoPlay
              />
              
              <p className="text-muted-foreground mt-4">{selectedVideo.description}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};