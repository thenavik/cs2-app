export type Side = 'T' | 'CT';
export type Map = 'Mirage' | 'Inferno' | 'Nuke' | 'Ancient' | 'Dust2' | 'Anubis';

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  map: Map;
  side: Side;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  duration: string;
}

export const videos: Video[] = [
  {
    id: '1',
    title: 'Mirage A Site Smoke',
    description: 'Basic smoke for A site on Mirage',
    thumbnailUrl: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoUrl: 'https://youtube.com/shorts/kObIyNTy2Cs?si=v52-7p5lB17dXTNU',
    map: 'Mirage',
    side: 'T',
    difficulty: 'Easy',
    duration: '0:45'
  }
]; 