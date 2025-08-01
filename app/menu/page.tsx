
'use client';

import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cartItems, setCartItems] = useState<{[key: number]: number}>({});

  useEffect(() => {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'streetfood', name: 'Street Food' },
    { id: 'pizza', name: 'Pizza' },
    { id: 'burgers', name: 'Burgers' },
    { id: 'biryani', name: 'Biryani' },
    { id: 'chinese', name: 'Chinese' },
    { id: 'south-indian', name: 'South Indian' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'beverages', name: 'Beverages' }
  ];

  const menuItems = [
    // Street Food
    {
      id: 1,
      name: 'Pav Bhaji',
      category: 'streetfood',
      price: 89,
      description: 'Spicy mixed vegetable curry served with buttered pav bread and onions',
      image: 'https://readdy.ai/api/search-image?query=Authentic%20Mumbai%20pav%20bhaji%20with%20spicy%20mixed%20vegetable%20curry%20served%20with%20buttered%20pav%20bread%2C%20garnished%20with%20chopped%20onions%2C%20cilantro%2C%20and%20lemon%20wedge%20on%20traditional%20Indian%20street%20food%20plate%20on%20clean%20background&width=300&height=200&seq=menu1&orientation=landscape',
      rating: 4.6,
      popular: true
    },
    {
      id: 2,
      name: 'Vada Pav',
      category: 'streetfood',
      price: 25,
      description: 'Mumbai\'s famous potato fritter sandwich with spicy chutneys',
      image: 'https://readdy.ai/api/search-image?query=Classic%20Mumbai%20vada%20pav%20with%20golden%20fried%20potato%20dumpling%20in%20fresh%20pav%20bread%2C%20served%20with%20green%20and%20red%20chutneys%2C%20wrapped%20in%20paper%20on%20clean%20white%20background%2C%20authentic%20Indian%20street%20food%20photography&width=300&height=200&seq=menu2&orientation=landscape',
      rating: 4.8,
      popular: true
    },
    {
      id: 3,
      name: 'Pani Puri',
      category: 'streetfood',
      price: 45,
      description: 'Crispy shells filled with spicy tangy water, chutneys and potato',
      image: 'https://readdy.ai/api/search-image?query=Traditional%20pani%20puri%20plate%20with%20crispy%20hollow%20shells%2C%20spiced%20water%2C%20tamarind%20chutney%2C%20and%20potato%20filling%20arranged%20on%20banana%20leaf%2C%20colorful%20Indian%20street%20snack%20on%20clean%20background&width=300&height=200&seq=menu3&orientation=landscape',
      rating: 4.7,
      popular: true
    },
    {
      id: 4,
      name: 'Bhel Puri',
      category: 'streetfood',
      price: 55,
      description: 'Crunchy mix of puffed rice, sev, chutneys and fresh vegetables',
      image: 'https://readdy.ai/api/search-image?query=Colorful%20bhel%20puri%20mixture%20with%20puffed%20rice%2C%20sev%2C%20chopped%20onions%2C%20tomatoes%2C%20and%20chutneys%20in%20traditional%20serving%20bowl%2C%20garnished%20with%20cilantro%20on%20clean%20background&width=300&height=200&seq=menu4&orientation=landscape',
      rating: 4.5,
      popular: false
    },
    {
      id: 5,
      name: 'Dosa',
      category: 'streetfood',
      price: 79,
      description: 'Crispy crepe made from fermented rice batter served with sambar and chutneys',
      image: 'https://readdy.ai/api/search-image?query=Golden%20crispy%20masala%20dosa%20served%20with%20coconut%20chutney%20and%20sambar%20in%20traditional%20banana%20leaf%2C%20authentic%20South%20Indian%20street%20food%20presentation%20on%20clean%20background&width=300&height=200&seq=menu5&orientation=landscape',
      rating: 4.9,
      popular: true
    },

    // Pizza
    {
      id: 6,
      name: 'Margherita Pizza',
      category: 'pizza',
      price: 649,
      description: 'Fresh mozzarella, basil, and tomato sauce on crispy crust',
      image: 'https://readdy.ai/api/search-image?query=Delicious%20margherita%20pizza%20with%20fresh%20basil%20leaves%2C%20melted%20mozzarella%20cheese%2C%20and%20rich%20tomato%20sauce%20on%20golden%20crispy%20crust%2C%20photographed%20from%20above%20on%20clean%20white%20marble%20background%20with%20soft%20natural%20lighting%2C%20restaurant%20quality%20food%20photography&width=300&height=200&seq=menu6&orientation=landscape',
      rating: 4.8,
      popular: true
    },
    {
      id: 7,
      name: 'Paneer Tikka Pizza',
      category: 'pizza',
      price: 749,
      description: 'Indian fusion pizza with marinated paneer, bell peppers and onions',
      image: 'https://readdy.ai/api/search-image?query=Indian%20fusion%20paneer%20tikka%20pizza%20with%20marinated%20cottage%20cheese%20cubes%2C%20colorful%20bell%20peppers%2C%20onions%2C%20and%20spicy%20sauce%20on%20crispy%20base%2C%20fusion%20cuisine%20photography%20on%20clean%20background&width=300&height=200&seq=menu7&orientation=landscape',
      rating: 4.7,
      popular: false
    },

    // Burgers
    {
      id: 8,
      name: 'Aloo Tikki Burger',
      category: 'burgers',
      price: 129,
      description: 'Spiced potato patty with fresh vegetables and mint chutney',
      image: 'https://readdy.ai/api/search-image?query=Indian%20aloo%20tikki%20burger%20with%20golden%20fried%20potato%20patty%2C%20fresh%20lettuce%2C%20tomatoes%2C%20onions%2C%20and%20green%20mint%20chutney%20in%20sesame%20seed%20bun%20on%20clean%20background%2C%20fusion%20street%20food%20photography&width=300&height=200&seq=menu8&orientation=landscape',
      rating: 4.6,
      popular: true
    },
    {
      id: 9,
      name: 'Chicken Maharaja Burger',
      category: 'burgers',
      price: 219,
      description: 'Grilled chicken patty with Indian spices, cheese and special sauce',
      image: 'https://readdy.ai/api/search-image?query=Delicious%20chicken%20maharaja%20burger%20with%20spiced%20grilled%20chicken%20patty%2C%20melted%20cheese%2C%20lettuce%2C%20tomatoes%20in%20toasted%20bun%20with%20Indian%20flavors%2C%20premium%20fast%20food%20photography%20on%20clean%20background&width=300&height=200&seq=menu9&orientation=landscape',
      rating: 4.8,
      popular: true
    },

    // Biryani
    {
      id: 10,
      name: 'Chicken Biryani',
      category: 'biryani',
      price: 299,
      description: 'Aromatic basmati rice with tender chicken, spices and fried onions',
      image: 'https://readdy.ai/api/search-image?query=Aromatic%20chicken%20biryani%20with%20perfectly%20cooked%20basmati%20rice%2C%20tender%20chicken%20pieces%2C%20fried%20onions%2C%20and%20fresh%20herbs%20in%20elegant%20serving%20bowl%20on%20clean%20background%2C%20authentic%20Indian%20cuisine%20photography&width=300&height=200&seq=menu10&orientation=landscape',
      rating: 4.9,
      popular: true
    },
    {
      id: 11,
      name: 'Mutton Biryani',
      category: 'biryani',
      price: 399,
      description: 'Premium mutton biryani with fragrant rice and traditional spices',
      image: 'https://readdy.ai/api/search-image?query=Rich%20mutton%20biryani%20with%20tender%20meat%20pieces%2C%20aromatic%20basmati%20rice%2C%20saffron%2C%20fried%20onions%2C%20and%20boiled%20eggs%20in%20traditional%20serving%20bowl%2C%20royal%20Indian%20cuisine%20photography%20on%20clean%20background&width=300&height=200&seq=menu11&orientation=landscape',
      rating: 4.8,
      popular: true
    },
    {
      id: 12,
      name: 'Veg Biryani',
      category: 'biryani',
      price: 249,
      description: 'Vegetarian biryani with mixed vegetables and aromatic spices',
      image: 'https://readdy.ai/api/search-image?query=Colorful%20vegetable%20biryani%20with%20mixed%20vegetables%2C%20basmati%20rice%2C%20saffron%2C%20and%20fresh%20herbs%20in%20elegant%20bowl%2C%20healthy%20Indian%20vegetarian%20cuisine%20photography%20on%20clean%20background&width=300&height=200&seq=menu12&orientation=landscape',
      rating: 4.5,
      popular: false
    },

    // Chinese
    {
      id: 13,
      name: 'Chicken Fried Rice',
      category: 'chinese',
      price: 189,
      description: 'Wok-tossed rice with chicken, vegetables and soy sauce',
      image: 'https://readdy.ai/api/search-image?query=Delicious%20chicken%20fried%20rice%20with%20tender%20chicken%20pieces%2C%20mixed%20vegetables%2C%20scrambled%20eggs%2C%20and%20aromatic%20soy%20sauce%20in%20white%20bowl%2C%20Indo-Chinese%20cuisine%20photography%20on%20clean%20background&width=300&height=200&seq=menu13&orientation=landscape',
      rating: 4.6,
      popular: true
    },
    {
      id: 14,
      name: 'Chili Chicken',
      category: 'chinese',
      price: 249,
      description: 'Spicy chicken pieces in Indo-Chinese sauce with bell peppers',
      image: 'https://readdy.ai/api/search-image?query=Spicy%20chili%20chicken%20with%20glazed%20chicken%20pieces%2C%20colorful%20bell%20peppers%2C%20onions%20in%20tangy%20sauce%2C%20garnished%20with%20spring%20onions%2C%20Indo-Chinese%20cuisine%20photography%20on%20clean%20background&width=300&height=200&seq=menu14&orientation=landscape',
      rating: 4.7,
      popular: true
    },

    // South Indian
    {
      id: 15,
      name: 'Idli Sambar',
      category: 'south-indian',
      price: 69,
      description: 'Steamed rice cakes served with lentil soup and chutneys',
      image: 'https://readdy.ai/api/search-image?query=Traditional%20South%20Indian%20idli%20sambar%20with%20fluffy%20white%20steamed%20rice%20cakes%2C%20aromatic%20lentil%20sambar%2C%20coconut%20chutney%2C%20and%20tomato%20chutney%20on%20banana%20leaf%2C%20authentic%20presentation%20on%20clean%20background&width=300&height=200&seq=menu15&orientation=landscape',
      rating: 4.8,
      popular: true
    },
    {
      id: 16,
      name: 'Uttapam',
      category: 'south-indian',
      price: 89,
      description: 'Thick pancake topped with vegetables, served with sambar and chutney',
      image: 'https://readdy.ai/api/search-image?query=Golden%20uttapam%20pancake%20topped%20with%20colorful%20vegetables%20like%20tomatoes%2C%20onions%2C%20and%20carrots%2C%20served%20with%20sambar%20and%20coconut%20chutney%2C%20South%20Indian%20breakfast%20photography%20on%20clean%20background&width=300&height=200&seq=menu16&orientation=landscape',
      rating: 4.6,
      popular: false
    },

    // Desserts
    {
      id: 17,
      name: 'Gulab Jamun',
      category: 'desserts',
      price: 79,
      description: 'Deep-fried milk dumplings soaked in rose-flavored sugar syrup',
      image: 'https://readdy.ai/api/search-image?query=Traditional%20gulab%20jamun%20dessert%20with%20golden%20brown%20milk%20dumplings%20soaked%20in%20sweet%20rose%20syrup%2C%20garnished%20with%20pistachios%20and%20silver%20leaf%20in%20elegant%20bowl%20on%20clean%20background&width=300&height=200&seq=menu17&orientation=landscape',
      rating: 4.8,
      popular: true
    },
    {
      id: 18,
      name: 'Kulfi',
      category: 'desserts',
      price: 59,
      description: 'Traditional Indian ice cream with cardamom and pistachios',
      image: 'https://readdy.ai/api/search-image?query=Creamy%20traditional%20kulfi%20ice%20cream%20garnished%20with%20chopped%20pistachios%2C%20almonds%2C%20and%20cardamom%20on%20decorative%20plate%2C%20authentic%20Indian%20frozen%20dessert%20photography%20on%20clean%20background&width=300&height=200&seq=menu18&orientation=landscape',
      rating: 4.7,
      popular: true
    },

    // Beverages
    {
      id: 19,
      name: 'Masala Chai',
      category: 'beverages',
      price: 29,
      description: 'Traditional spiced tea brewed with milk and aromatic spices',
      image: 'https://readdy.ai/api/search-image?query=Steaming%20hot%20masala%20chai%20in%20traditional%20clay%20cup%20with%20whole%20spices%20like%20cardamom%2C%20cinnamon%2C%20and%20ginger%20visible%2C%20aromatic%20Indian%20tea%20photography%20on%20clean%20background&width=300&height=200&seq=menu19&orientation=landscape',
      rating: 4.9,
      popular: true
    },
    {
      id: 20,
      name: 'Fresh Lime Water',
      category: 'beverages',
      price: 39,
      description: 'Refreshing lime juice with mint and black salt',
      image: 'https://readdy.ai/api/search-image?query=Refreshing%20fresh%20lime%20water%20with%20mint%20leaves%2C%20ice%20cubes%2C%20and%20black%20salt%20rim%20in%20tall%20glass%2C%20garnished%20with%20lime%20slice%2C%20summer%20beverage%20photography%20on%20clean%20background&width=300&height=200&seq=menu20&orientation=landscape',
      rating: 4.5,
      popular: false
    },
    {
      id: 21,
      name: 'Mango Lassi',
      category: 'beverages',
      price: 89,
      description: 'Creamy yogurt drink blended with sweet mango pulp',
      image: 'https://readdy.ai/api/search-image?query=Thick%20creamy%20mango%20lassi%20in%20tall%20glass%20topped%20with%20mango%20chunks%20and%20pistachios%2C%20traditional%20Indian%20yogurt%20drink%20photography%20with%20golden%20color%20on%20clean%20background&width=300&height=200&seq=menu21&orientation=landscape',
      rating: 4.8,
      popular: true
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const addToCart = (itemId: number) => {
    const item = menuItems.find(i => i.id === itemId);
    if (!item) return;

    const newCartItems = {
      ...cartItems,
      [itemId]: (cartItems[itemId] || 0) + 1
    };
    
    setCartItems(newCartItems);
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));

    const cartData = JSON.parse(localStorage.getItem('cartData') || '[]');
    const existingItem = cartData.find((i: any) => i.id === itemId);

    if (existingItem) {
      existingItem.quantity = newCartItems[itemId];
    } else {
      cartData.push({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        quantity: 1
      });
    }

    localStorage.setItem('cartData', JSON.stringify(cartData));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="bg-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-xl text-orange-100">Discover delicious dishes from our curated selection</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium whitespace-nowrap cursor-pointer transition-colors ${
                selectedCategory === category.id
                  ? 'bg-orange-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-orange-50 border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover object-top"
                />
                {item.popular && (
                  <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <div className="text-lg font-pacifico">logo</div>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-star-fill text-yellow-400"></i>
                    </div>
                    <span className="text-sm text-gray-600">{item.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-600">₹{item.price}</span>
                  <button
                    onClick={() => addToCart(item.id)}
                    className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 whitespace-nowrap cursor-pointer flex items-center space-x-2"
                  >
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-add-line"></i>
                    </div>
                    <span>Add to Cart</span>
                    {cartItems[item.id] && (
                      <span className="bg-orange-700 text-white px-2 py-1 rounded-full text-xs">
                        {cartItems[item.id]}
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
