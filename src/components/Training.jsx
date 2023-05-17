import React from 'react';
import thumbnail from "../assets/login.jpeg";

const Training = () => {
  const videos = [
    { id: 1, title: 'Introduction to Series', url: 'https://example.com/video1', thumbnail: thumbnail },
    { id: 2, title: 'Getting Started', url: 'https://example.com/video2', thumbnail: thumbnail },
    { id: 3, title: 'Advanced Techniques', url: 'https://example.com/video3', thumbnail: thumbnail },
    { id: 4, title: 'Final Thoughts', url: 'https://example.com/video4', thumbnail: thumbnail },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Training Series</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {videos.map((video) => (
          <a
            key={video.id}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center text-center bg-white shadow-md rounded p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={video.thumbnail}
              alt={`Thumbnail for ${video.title}`}
              className="w-24 h-24 rounded-full mb-4"
            />
            <span className="text-blue-500 hover:underline">{video.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Training;
