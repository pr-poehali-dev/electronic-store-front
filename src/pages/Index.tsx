import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const products = [
  {
    id: 1,
    name: 'AirPods Pro',
    description: 'Активное шумоподавление. Прозрачный режим. Адаптивный эквалайзер.',
    price: '24 990 ₽',
    image: 'https://cdn.poehali.dev/projects/f7f8c6d2-15c8-487c-b5f8-94d534443b66/files/5db693c8-1744-402e-bbff-eb1ec9ec029d.jpg',
  },
  {
    id: 2,
    name: 'iPhone 15 Pro',
    description: 'Титановый корпус. A17 Pro. Система камер профессионального уровня.',
    price: '119 990 ₽',
    image: 'https://cdn.poehali.dev/projects/f7f8c6d2-15c8-487c-b5f8-94d534443b66/files/7b80ac12-00b6-4b8c-9b54-3e99980b1d2b.jpg',
  },
  {
    id: 3,
    name: 'MacBook Pro',
    description: 'Чип M3 Pro. До 22 часов работы. Liquid Retina XDR дисплей.',
    price: '229 990 ₽',
    image: 'https://cdn.poehali.dev/projects/f7f8c6d2-15c8-487c-b5f8-94d534443b66/files/47985123-7d77-4150-878c-a35d997e4d73.jpg',
  },
];

const Index = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-gray-200">
        <nav className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold">Store</div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm hover:text-gray-600 transition-colors">Mac</a>
            <a href="#" className="text-sm hover:text-gray-600 transition-colors">iPhone</a>
            <a href="#" className="text-sm hover:text-gray-600 transition-colors">AirPods</a>
            <a href="#" className="text-sm hover:text-gray-600 transition-colors">Аксессуары</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="hover:text-gray-600 transition-colors">
              <Icon name="Search" size={20} />
            </button>
            <button className="hover:text-gray-600 transition-colors">
              <Icon name="ShoppingBag" size={20} />
            </button>
          </div>
        </nav>
      </header>

      <section className="pt-24 pb-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
              Новая коллекция
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light">
              Премиальная электроника. Доставка по всей России.
            </p>
          </div>

          <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden mb-20 animate-scale-in">
            <img 
              src="https://cdn.poehali.dev/projects/f7f8c6d2-15c8-487c-b5f8-94d534443b66/files/5db693c8-1744-402e-bbff-eb1ec9ec029d.jpg"
              alt="Hero Product"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-16">
              <div className="text-center text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">AirPods Pro</h2>
                <p className="text-lg md:text-xl mb-6 font-light">Погружение в звук</p>
                <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-8 h-12 text-base font-medium transition-all">
                  Купить
                </Button>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Популярные товары</h2>
            <p className="text-gray-600 text-lg">Выбор покупателей</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredCard(product.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="bg-gray-50 rounded-3xl overflow-hidden mb-4 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                <div className="px-2">
                  <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">{product.price}</span>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className={`rounded-full transition-all duration-300 ${
                        hoveredCard === product.id 
                          ? 'bg-black text-white hover:bg-black/90' 
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <Icon name="Plus" size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Truck" size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Быстрая доставка</h3>
              <p className="text-gray-600">Доставим ваш заказ в течение 1-2 дней</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Shield" size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Гарантия качества</h3>
              <p className="text-gray-600">Оригинальная продукция с гарантией</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Headphones" size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Поддержка 24/7</h3>
              <p className="text-gray-600">Всегда готовы помочь вам с выбором</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white py-12 px-6 border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto text-center text-gray-600 text-sm">
          <p>© 2025 Store. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
