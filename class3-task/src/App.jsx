import React from 'react'
import Card from './assets/components/Card'

const App = () => {

  const users = [
    {
      id: 1,
      name: "John Doe",
      profession: "Product Designer who focuses on simplicity & usability",
      coverImage: "https://images.unsplash.com/photo-1503264116251-35a269479413",
      avatar: "https://i.pravatar.cc/150?img=11",
      likes: "72.9k",
      posts: "828",
      views: "342.9k"
    },
    {
      id: 2,
      name: "Mellisa Vargas",
      profession: "UI/UX Designer passionate about clean interfaces",
      coverImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      avatar: "https://i.pravatar.cc/150?img=32",
      likes: "58.1k",
      posts: "612",
      views: "210.4k"
    },
    {
      id: 3,
      name: "Jane Smith",
      profession: "Frontend Developer crafting responsive experiences",
      coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      avatar: "https://i.pravatar.cc/150?img=47",
      likes: "91.3k",
      posts: "1,024",
      views: "489.7k"
    },
    {
      id: 4,
      name: "Alex Johnson",
      profession: "Full Stack Developer building scalable web apps",
      coverImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      avatar: "https://i.pravatar.cc/150?img=14",
      likes: "66.4k",
      posts: "734",
      views: "298.1k"
    },
    {
      id: 5,
      name: "Sophia Lee",
      profession: "Digital Illustrator creating modern brand visuals",
      coverImage: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
      avatar: "https://i.pravatar.cc/150?img=21",
      likes: "83.7k",
      posts: "540",
      views: "401.2k"
    },
    {
      id: 6,
      name: "Daniel Brown",
      profession: "Backend Engineer specializing in APIs & databases",
      coverImage: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d",
      avatar: "https://i.pravatar.cc/150?img=18",
      likes: "49.5k",
      posts: "389",
      views: "176.8k"
    },
    {
      id: 7,
      name: "Olivia Martin",
      profession: "Content Creator sharing design & tech insights",
      coverImage: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
      avatar: "https://i.pravatar.cc/150?img=25",
      likes: "105.2k",
      posts: "1,342",
      views: "612.9k"
    },
    {
      id: 8,
      name: "Ethan Wilson",
      profession: "Mobile App Developer building smooth user experiences",
      coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      avatar: "https://i.pravatar.cc/150?img=39",
      likes: "61.8k",
      posts: "690",
      views: "254.3k"
    },
    {
      id: 9,
      name: "Isabella Moore",
      profession: "Brand Strategist helping startups grow digitally",
      coverImage: "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb",
      avatar: "https://i.pravatar.cc/150?img=45",
      likes: "74.6k",
      posts: "508",
      views: "332.7k"
    },
    {
      id: 10,
      name: "Liam Anderson",
      profession: "Software Engineer passionate about clean code",
      coverImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      avatar: "https://i.pravatar.cc/150?img=53",
      likes: "88.9k",
      posts: "921",
      views: "458.6k"
    }
  ];


  return (
    <div className='h-full bg-black p-10 flex flex-wrap gap-8'>
      {users.map((user, idx) => {
        return <Card key={idx} user={user}/>
      })}
    </div>
  )
}

export default App