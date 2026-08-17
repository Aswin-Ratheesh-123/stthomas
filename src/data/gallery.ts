export interface GalleryItem {
  id: string;
  title: string;
  category: 'CAMPUS' | 'EVENTS' | 'SPORTS' | 'CULTURAL' | 'TECHNICAL' | 'LABS';
  imageUrl: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Main Academic Block Architecture',
    category: 'CAMPUS',
    imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    title: 'NVIDIA GPU Machine Learning Laboratory',
    category: 'LABS',
    imageUrl: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    title: 'Students Collaborating in Smart India Hackathon',
    category: 'TECHNICAL',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    title: ' Cultural Dance Fest Highlight',
    category: 'CULTURAL',
    imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '5',
    title: 'College Cricket Team Trophy Celebration',
    category: 'SPORTS',
    imageUrl: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '6',
    title: 'Mechanical CNC Prototyping Workshop',
    category: 'LABS',
    imageUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '7',
    title: 'Lush Green Campus Courtyard & Seating Area',
    category: 'CAMPUS',
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '8',
    title: 'Annual Robotics Combat Championship',
    category: 'TECHNICAL',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '9',
    title: 'Musical Concert night at  Fest',
    category: 'CULTURAL',
    imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80'
  }
];
