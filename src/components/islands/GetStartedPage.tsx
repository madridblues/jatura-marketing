import { useState } from 'react';
import { Play, Clock, X } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface Video {
  id: string;
  title: string;
  description: string;
  duration: string;
  thumbnailUrl: string;
  videoUrl: string;
  author?: string;
}

const onboardingVideos: Video[] = [
  {
    id: '1',
    title: 'Getting Started with Your ATS',
    description: 'Learn the basics of navigating your new Applicant Tracking System',
    duration: '03:45',
    thumbnailUrl: 'https://img.youtube.com/vi/ScMzIvxBSi4/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4',
    author: 'Product Team'
  },
  {
    id: '2',
    title: 'Creating Your First Job Posting',
    description: 'Step-by-step guide to creating and publishing job listings',
    duration: '04:20',
    thumbnailUrl: 'https://img.youtube.com/vi/1Rs2ND1ryYc/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/1Rs2ND1ryYc',
    author: 'Product Team'
  },
  {
    id: '3',
    title: 'Managing Candidates & Applications',
    description: 'Learn how to review, organize, and move candidates through your pipeline',
    duration: '05:15',
    thumbnailUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    author: 'Product Team'
  },
  {
    id: '4',
    title: 'Using AI-Powered Features',
    description: 'Discover how AI can help you screen candidates and match resumes',
    duration: '03:30',
    thumbnailUrl: 'https://img.youtube.com/vi/JfVOS4VSpmA/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/JfVOS4VSpmA',
    author: 'Product Team'
  },
  {
    id: '5',
    title: 'Scheduling Interviews',
    description: 'Automate interview scheduling with calendar integration',
    duration: '02:50',
    thumbnailUrl: 'https://img.youtube.com/vi/aircAruvnKk/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/aircAruvnKk',
    author: 'Product Team'
  },
  {
    id: '6',
    title: 'Team Collaboration & Communication',
    description: 'Collaborate with your team and communicate with candidates',
    duration: '04:00',
    thumbnailUrl: 'https://img.youtube.com/vi/R9OHn5ZF4Uo/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/R9OHn5ZF4Uo',
    author: 'Product Team'
  }
];

export default function GetStartedPage() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  return (
    <div className="bg-slate-50 dark:bg-slate-950">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-black dark:via-slate-950 dark:to-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-16 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Get Started with
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-slate-400">
              Jatura ATS
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Watch these quick tutorials to get up and running in minutes
          </p>
        </div>
      </div>

      {/* Video Grid Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
            Video Tutorials
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Click on any video to start watching
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {onboardingVideos.map((video) => (
            <Card
              key={video.id}
              className="group cursor-pointer overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 hover:shadow-md"
              onClick={() => setSelectedVideo(video)}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-slate-900 overflow-hidden">
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <div className="bg-white/90 dark:bg-slate-900/90 rounded-full p-3 group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-slate-900 dark:text-white fill-current" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {video.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-sm text-slate-900 dark:text-slate-100 mb-1 line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                  {video.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Video Player Overlay */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-slate-300 transition-colors z-50"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="bg-black rounded-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src={selectedVideo.videoUrl}
                  title={selectedVideo.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4 bg-slate-900">
                <h3 className="text-lg font-semibold text-white mb-1">
                  {selectedVideo.title}
                </h3>
                <p className="text-sm text-slate-300">
                  {selectedVideo.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
