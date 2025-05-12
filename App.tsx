import React, { useState, useEffect } from 'react';
import { Search, Map, Compass, Calendar, Hotel, Plane, Camera, Users, Menu, X, Globe, Sun, Umbrella, Mountain } from 'lucide-react';
import { useAuth } from './contexts/AuthContext';
import toast from 'react-hot-toast';

interface Destination {
  id: string;
  name: string;
  image: string;
  description: string;
  rating: number;
  bestTime: string;
  thingsToSee: string[];
  climate: string;
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState('discover');

  const popularDestinations: Destination[] = [
    {
      id: '1',
      name: 'Santorini, Greece',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=800',
      description: 'Iconic white-washed buildings overlooking the Aegean Sea. Experience stunning sunsets, volcanic beaches, and world-class wineries.',
      rating: 4.8,
      bestTime: 'April to October',
      thingsToSee: ['Oia Sunset', 'Red Beach', 'Ancient Akrotiri', 'Fira Town'],
      climate: 'Mediterranean climate with mild winters and warm summers'
    },
    {
      id: '2',
      name: 'Kyoto, Japan',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800',
      description: 'Ancient capital of Japan featuring serene temples, traditional gardens, and geisha culture in the historic Gion district.',
      rating: 4.7,
      bestTime: 'March-May and October-November',
      thingsToSee: ['Fushimi Inari Shrine', 'Kinkaku-ji', 'Arashiyama Bamboo Grove', 'Nijo Castle'],
      climate: 'Humid subtropical climate with four distinct seasons'
    },
    {
      id: '3',
      name: 'Machu Picchu, Peru',
      image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80&w=800',
      description: 'Ancient Incan citadel set high in the Andes Mountains, showcasing incredible architecture and engineering.',
      rating: 4.9,
      bestTime: 'May to October (dry season)',
      thingsToSee: ['Sun Gate', 'Huayna Picchu', 'Temple of the Sun', 'Intihuatana'],
      climate: 'Tropical highland climate with dry and wet seasons'
    },
    {
      id: '4',
      name: 'Banff National Park, Canada',
      image: 'https://images.unsplash.com/photo-1561134643-668f9b6c4771?auto=format&fit=crop&q=80&w=800',
      description: 'Stunning mountain landscapes, turquoise lakes, and abundant wildlife in the heart of the Canadian Rockies.',
      rating: 4.9,
      bestTime: 'June to August for summer, December to March for winter sports',
      thingsToSee: ['Lake Louise', 'Moraine Lake', 'Banff Gondola', 'Johnston Canyon'],
      climate: 'Subarctic climate with long, cold winters and short, mild summers'
    },
    {
      id: '5',
      name: 'Amalfi Coast, Italy',
      image: 'https://images.unsplash.com/photo-1633321088355-d0f81134ca3b?auto=format&fit=crop&q=80&w=800',
      description: 'Dramatic coastline featuring colorful villages, stunning beaches, and world-renowned Italian cuisine.',
      rating: 4.8,
      bestTime: 'May to October',
      thingsToSee: ['Positano Town', 'Path of the Gods', 'Ravello Gardens', 'Amalfi Cathedral'],
      climate: 'Mediterranean climate with warm summers and mild winters'
    },
    {
      id: '6',
      name: 'Bali, Indonesia',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800',
      description: 'Tropical paradise with ancient temples, rice terraces, pristine beaches, and vibrant cultural heritage.',
      rating: 4.7,
      bestTime: 'April to October (dry season)',
      thingsToSee: ['Tanah Lot Temple', 'Tegalalang Rice Terraces', 'Uluwatu Temple', 'Ubud Monkey Forest'],
      climate: 'Tropical climate with distinct wet and dry seasons'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Compass className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">TravelScope</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100">
                Discover
              </button>
              <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100">
                My Trips
              </button>
              <button className="px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                Sign In
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gray-900 h-[500px]">
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=2000"
          alt="Travel Hero"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Discover Your Next Adventure
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Personalized travel experiences tailored just for you
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Where do you want to go?"
                  className="pl-10 pr-4 py-2 w-72 rounded-full border-2 border-white bg-white/10 text-white placeholder-gray-300 backdrop-blur-sm focus:outline-none focus:border-blue-500"
                />
              </div>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
                Plan My Trip
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
            <Map className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Interactive Maps</h3>
            <p className="text-gray-600">Explore destinations with detailed maps and local insights</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
            <Calendar className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Smart Itineraries</h3>
            <p className="text-gray-600">Personalized travel plans based on your preferences</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
            <Hotel className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Best Stays</h3>
            <p className="text-gray-600">Curated accommodations for every budget</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
            <Users className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Travel Community</h3>
            <p className="text-gray-600">Connect with fellow travelers worldwide</p>
          </div>
        </div>
      </div>

      {/* Popular Destinations */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {popularDestinations.map((destination) => (
            <div key={destination.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300">
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm">
                    <Sun className="h-4 w-4 text-yellow-500 mr-2" />
                    <span className="text-gray-600">Best Time: {destination.bestTime}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Globe className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">{destination.climate}</span>
                  </div>
                  <div className="text-sm">
                    <h4 className="font-medium text-gray-700 mb-1">Must-See Attractions:</h4>
                    <ul className="list-disc list-inside text-gray-600 pl-2">
                      {destination.thingsToSee.map((thing, index) => (
                        <li key={index}>{thing}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1 text-gray-600">{destination.rating}</span>
                  </div>
                  <button className="px-4 py-2 text-sm text-blue-600 border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition duration-300">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of travelers creating unforgettable memories
          </p>
          <button className="px-8 py-3 bg-white text-blue-600 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">
            Get Started Now
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About TravelScope</h3>
              <p className="text-gray-400">
                Discover the world with personalized travel experiences tailored just for you.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Destinations</a></li>
                <li><a href="#" className="hover:text-white">Travel Guides</a></li>
                <li><a href="#" className="hover:text-white">Community</a></li>
                <li><a href="#" className="hover:text-white">About Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to get travel tips and exclusive offers
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>© 2025 TravelScope. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;