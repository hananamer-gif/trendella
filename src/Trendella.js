import React, { useState } from "react";

function Trendella() {
  const products = [
    { name: "خاتم ذهبي", price: 250, type: "خواتم", img: "https://images.unsplash.com/photo-1603808033192-082d6919d8e7" },
    { name: "عقد فضي", price: 320, type: "عقود", img: "https://images.unsplash.com/photo-1629196900734-8b865b1cbf47" },
    { name: "سوار لؤلؤي", price: 180, type: "أساور", img: "https://images.unsplash.com/photo-1590080875833-70c9e7e55d9b" },
    { name: "حلق ذهبي", price: 150, type: "أقراط", img: "https://images.unsplash.com/photo-1617038260897-1d4744eaf1f4" },
    { name: "ساعة أنيقة", price: 500, type: "ساعات", img: "https://images.unsplash.com/photo-1618378895361-370a8f9b08fa" },
    { name: "شنطة كروس", price: 450, type: "حقائب", img: "https://images.unsplash.com/photo-1618354699071-031d3924a4a6" },
    { name: "نظارة شمسية", price: 200, type: "نظارات", img: "https://images.unsplash.com/photo-1589571894960-20bbe2828a10" },
    { name: "حزام جلد", price: 120, type: "أحزمة", img: "https://images.unsplash.com/photo-1624290181988-4d27f30b7f36" },
  ];

  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState("الكل");
  const [sortOrder, setSortOrder] = useState("الأحدث");

  // فلترة المنتجات
  let filteredProducts = filter === "الكل" ? products : products.filter(p => p.type === filter);

  // ترتيب المنتجات حسب السعر
  if (sortOrder === "الأقل سعراً") {
    filteredProducts = [...filteredProducts].sort((a,b)=> a.price - b.price);
  } else if (sortOrder === "الأعلى سعراً") {
    filteredProducts = [...filteredProducts].sort((a,b)=> b.price - a.price);
  }

  const addToCart = (product) => setCart([...cart, product]);

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-amber-50 min-h-screen text-gray-800">

      {/* شريط التنقل + السلة */}
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-amber-700">Trendella</h1>
        <div className="flex items-center space-x-6">
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:text-amber-600">Home</a></li>
            <li><a href="#shop" className="hover:text-amber-600">Shop</a></li>
            <li><a href="#about" className="hover:text-amber-600">About</a></li>
            <li><a href="#contact" className="hover:text-amber-600">Contact</a></li>
          </ul>
          <div className="ml-6 relative">
            <button className="bg-amber-600 text-white px-4 py-2 rounded-full hover:bg-amber-700 transition">
              🛒 {cart.length}
            </button>
            {cart.length > 0 && (
              <div className="absolute right-0 mt-2 w-72 bg-white shadow-lg rounded-lg p-4 z-50">
                <h4 className="font-bold mb-2">سلة المشتريات</h4>
                {cart.map((item, i) => (
                  <div key={i} className="flex justify-between items-center mb-1">
                    <span>{item.name}</span>
                    <span>{item.price} ج.م</span>
                    <button onClick={()=>removeFromCart(i)} className="text-red-600 font-bold">×</button>
                  </div>
                ))}
                <hr className="my-2" />
                <div className="flex justify-between font-bold">
                  <span>المجموع:</span>
                  <span>{totalPrice} ج.م</span>
                </div>
                <a href="#checkout" className="block mt-3 text-center bg-amber-600 text-white py-2 rounded-full hover:bg-amber-700 transition">
                  الذهاب للدفع
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* الغلاف */}
      <header id="home" className="bg-gradient-to-b from-amber-200 to-amber-50 py-20 text-center">
        <h1 className="text-5xl font-bold text-amber-700 mb-4">Trendella ✨</h1>
        <p className="text-lg mb-6">إكسسوارات راقية تضيف لمسة فخمة لكل إطلالة 💎</p>
        <a href="#shop" className="bg-amber-600 text-white px-6 py-3 rounded-full hover:bg-amber-700 transition">
          تسوقي الآن
        </a>
      </header>

      {/* فلترة وترتيب المنتجات */}
      <section id="shop" className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-semibold text-center text-amber-700 mb-6">منتجاتنا</h2>

        {/* الفلترة */}
        <div className="flex justify-center mb-4 flex-wrap gap-4">
          {["الكل", "خواتم","عقود","أساور","أقراط","ساعات","حقائب","نظارات","أحزمة"].map(type => (
            <button key={type} onClick={()=>setFilter(type)} className={`px-4 py-2 rounded-full ${filter===type?"bg-amber-600 text-white":"bg-amber-200 text-amber-700"} hover:bg-amber-700 hover:text-white transition`}>
              {type}
            </button>
          ))}
        </div>

        {/* ترتيب حسب السعر */}
        <div className="flex justify-center mb-8 gap-4">
          {["الأحدث","الأقل سعراً","الأعلى سعراً"].map(order => (
            <button key={order} onClick={()=>setSortOrder(order)} className={`px-4 py-2 rounded-full ${sortOrder===order?"bg-amber-600 text-white":"bg-amber-200 text-amber-700"} hover:bg-amber-700 hover:text-white transition`}>
              {order}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((item, i) => (
            <div key={i} className="bg-amber-50 shadow rounded-2xl overflow-hidden hover:shadow-lg transition">
              <img src={item.img} alt={item.name} className="w-full h-56 object-cover"/>
              <div className="p-4 text-center">
                <h4 className="text-lg font-semibold">{item.name}</h4>
                <p className="text-amber-700 font-bold mt-2">{item.price} ج.م</p>
                <button onClick={()=>addToCart(item)} className="mt-4 bg-amber-600 text-white px-4 py-2 rounded-full hover:bg-amber-700 transition">
                  أضف إلى السلة
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* صفحة الدفع */}
      <section id="checkout" className="py-16 px-6 bg-amber-100 text-center">
        <h3 className="text-3xl font-semibold text-amber-700 mb-6">صفحة الدفع (وهمية)</h3>
        {cart.length === 0 ? (
          <p>سلة المشتريات فارغة 😢</p>
        ) : (
          <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
            {cart.map((item,i)=>(
              <div key={i} className="flex justify-between mb-2">
                <span>{item.name}</span>
                <span>{item.price} ج.م</span>
              </div>
            ))}
            <hr className="my-2"/>
            <div className="flex justify-between font-bold mb-4">
              <span>المجموع:</span>
              <span>{totalPrice} ج.م</span>
            </div>
            <button className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition">
              دفع الآن
            </button>
          </div>
        )}
      </section>

      {/* من نحن */}
      <section id="about" className="py-20 bg-amber-100 text-center">
        <h3 className="text-3xl font-semibold text-amber-700 mb-6">من نحن</h3>
        <p className="max-w-2xl mx-auto text-lg leading-relaxed">
          متجر <span className="font-bold">Trendella</span> يقدم أحدث صيحات الإكسسوارات النسائية المصنوعة بعناية وجودة عالية.
          لأن الأناقة تبدأ من التفاصيل الصغيرة ✨
        </p>
      </section>

      {/* تواصل معنا */}
      <section id="contact" className="py-16 px-6 bg-white text-center">
        <h3 className="text-3xl font-semibold text-amber-700 mb-6">تواصل معنا</h3>
        <p className="mb-4">📍 القاهرة، مصر</p>
        <p className="mb-2">📞 01012345678</p>
        <p>📧 contact@trendella.com</p>
      </section>

      {/* تذييل */}
      <footer className="bg-amber-700 text-white text-center py-4 mt-10">
        © {new Date().getFullYear()} Trendella - جميع الحقوق محفوظة.
      </footer>

    </div>
  );
}

export default Trendella;
