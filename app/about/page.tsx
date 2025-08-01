
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      position: 'CEO & Founder',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20confident%20female%20CEO%20in%20her%2030s%20with%20warm%20smile%2C%20wearing%20business%20attire%2C%20clean%20studio%20lighting%20against%20neutral%20background%2C%20executive%20portrait%20photography&width=300&height=300&seq=team1&orientation=squarish',
      bio: 'Sarah founded FoodieHub with a vision to connect food lovers with amazing local restaurants.'
    },
    {
      name: 'Michael Chen',
      position: 'Head of Technology',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20Asian%20male%20tech%20executive%20in%20his%2030s%20with%20friendly%20expression%2C%20wearing%20casual%20business%20attire%2C%20modern%20studio%20lighting%20against%20clean%20background&width=300&height=300&seq=team2&orientation=squarish',
      bio: 'Michael leads our technology team, ensuring our platform delivers the best user experience.'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Head of Operations',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20Hispanic%20female%20operations%20manager%20in%20her%2020s%20with%20confident%20smile%2C%20wearing%20modern%20business%20casual%2C%20clean%20studio%20lighting%20against%20neutral%20background&width=300&height=300&seq=team3&orientation=squarish',
      bio: 'Emily oversees our restaurant partnerships and delivery operations across all locations.'
    },
    {
      name: 'David Thompson',
      position: 'Marketing Director',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20male%20marketing%20director%20in%20his%2030s%20with%20creative%20energy%2C%20wearing%20stylish%20casual%20business%20attire%2C%20modern%20studio%20lighting%20against%20clean%20background&width=300&height=300&seq=team4&orientation=squarish',
      bio: 'David crafts our brand story and connects with food enthusiasts around the world.'
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Happy Customers' },
    { number: '1,200+', label: 'Restaurant Partners' },
    { number: '25+', label: 'Cities Served' },
    { number: '99.8%', label: 'Order Accuracy' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div 
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Modern%20food%20delivery%20service%20team%20working%20together%20in%20bright%20office%20space%20with%20laptops%2C%20discussing%20over%20healthy%20meals%2C%20diverse%20group%20of%20professionals%20in%20casual%20business%20attire%2C%20collaborative%20workspace%20atmosphere&width=1200&height=600&seq=about-hero&orientation=landscape')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About FoodieHub</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            We're passionate about connecting food lovers with incredible dining experiences, 
            one delivery at a time.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6">
              Founded in 2020, FoodieHub began as a simple idea: making great food accessible to everyone. 
              We started with just 5 restaurant partners and a dream to revolutionize food delivery.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Today, we've grown into a platform that serves thousands of customers daily, partnering 
              with over 1,200 restaurants across 25 cities. Our commitment to quality, speed, and 
              customer satisfaction remains at the heart of everything we do.
            </p>
            <p className="text-lg text-gray-700">
              We believe food brings people together, and we're proud to be the bridge connecting 
              hungry customers with passionate restaurant owners and chefs.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://readdy.ai/api/search-image?query=Diverse%20team%20of%20food%20delivery%20professionals%20in%20modern%20office%20kitchen%2C%20sharing%20meals%20together%2C%20laptops%20and%20tablets%20on%20table%2C%20collaborative%20and%20friendly%20atmosphere%20with%20natural%20lighting&width=600&height=400&seq=about-story&orientation=landscape"
              alt="Our team"
              className="w-full rounded-lg shadow-lg object-cover object-top"
            />
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">By the Numbers</h2>
            <p className="text-lg text-gray-700">Our impact speaks for itself</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-700">What drives us every day</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 mx-auto bg-orange-600 rounded-full flex items-center justify-center mb-6">
                <i className="ri-heart-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Customer First</h3>
              <p className="text-gray-700">
                Every decision we make is driven by what's best for our customers. 
                Your satisfaction is our success.
              </p>
            </div>
            
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 mx-auto bg-orange-600 rounded-full flex items-center justify-center mb-6">
                <i className="ri-flash-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Speed & Quality</h3>
              <p className="text-gray-700">
                We deliver fast without compromising on quality. Fresh, hot meals 
                delivered when you need them.
              </p>
            </div>
            
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 mx-auto bg-orange-600 rounded-full flex items-center justify-center mb-6">
                <i className="ri-team-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Community</h3>
              <p className="text-gray-700">
                We support local restaurants and create opportunities for our 
                delivery partners in every community we serve.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-700">The passionate people behind FoodieHub</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 mx-auto rounded-full object-cover object-top shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-orange-600 font-medium mb-3">{member.position}</p>
                <p className="text-gray-700 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Journey?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Discover amazing restaurants and enjoy delicious meals delivered to your door.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 whitespace-nowrap cursor-pointer">
              Order Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 whitespace-nowrap cursor-pointer">
              Partner With Us
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
