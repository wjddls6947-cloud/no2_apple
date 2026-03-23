/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Apple, Droplets, Leaf, MapPin, Phone, Mail, Instagram, ChevronRight, Star } from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Apple className="text-[#A51C30] w-8 h-8" />
        <span className="text-xl font-bold tracking-tight text-gray-900">예산키움사과</span>
      </div>
      <div className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-600">
        <a href="#story" className="hover:text-[#A51C30] transition-colors">브랜드 스토리</a>
        <a href="#products" className="hover:text-[#A51C30] transition-colors">제품 소개</a>
        <a href="#features" className="hover:text-[#A51C30] transition-colors">특징</a>
        <a href="#contact" className="hover:text-[#A51C30] transition-colors">문의하기</a>
      </div>
      <button className="bg-[#A51C30] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#8B1829] transition-all shadow-lg shadow-red-900/10">
        구매하기
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative h-screen flex items-center overflow-hidden pt-20">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=2070&auto=format&fit=crop" 
        alt="Fresh Yesan Apple"
        className="w-full h-full object-cover scale-105"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
    </div>
    
    <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl text-white"
      >
        <span className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-md text-sm font-medium mb-6 border border-white/30">
          Premium Yesan Apple Brand
        </span>
        <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 tracking-tight">
          예산의 자연을<br />
          한 입에 담다
        </h1>
        <p className="text-xl md:text-2xl text-white/90 font-light mb-10 leading-relaxed">
          가장 정직한 사과의 맛, <span className="font-semibold text-white">예산키움사과</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-white text-[#A51C30] px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
            제품 보러가기 <ChevronRight size={20} />
          </button>
          <button className="bg-transparent border border-white/50 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-all backdrop-blur-sm">
            브랜드 스토리
          </button>
        </div>
      </motion.div>
    </div>
    
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
    >
      <span className="text-xs uppercase tracking-widest font-medium">Scroll Down</span>
      <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
    </motion.div>
  </section>
);

const BrandStory = () => (
  <section id="story" className="py-24 bg-[#F9F7F2]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=1974&auto=format&fit=crop" 
              alt="Apple Orchard"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 w-64 h-64 rounded-2xl overflow-hidden border-8 border-[#F9F7F2] shadow-xl hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?q=80&w=2070&auto=format&fit=crop" 
              alt="Fresh Harvest"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-bold text-[#A51C30] uppercase tracking-[0.2em] mb-4">Brand Story</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            대한민국 사과의 자부심,<br />예산에서 온 명작
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            우리는 단순히 사과를 파는 것이 아니라, 농부의 땀방울과 예산의 비옥한 토양이 만들어낸 ‘작품’을 전달합니다. 
            산지 직송의 신선함부터 정성을 다해 가공한 주스까지, 당신의 건강한 일상을 위해 타협하지 않는 품질을 약속합니다.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-3xl font-bold text-[#A51C30] mb-1">14+</div>
              <div className="text-sm text-gray-500 font-medium">평균 당도 (Brix)</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#A51C30] mb-1">100%</div>
              <div className="text-sm text-gray-500 font-medium">순수 원물 착즙</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section id="features" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-sm font-bold text-[#A51C30] uppercase tracking-[0.2em] mb-4">Our Values</h2>
        <h3 className="text-4xl font-bold text-gray-900 mb-6">예산키움사과가 특별한 이유</h3>
        <p className="text-gray-600">예산의 햇살과 바람이 키운 정직한 맛, 그 이상의 가치를 전달합니다.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-12">
        {[
          {
            icon: <Star className="w-8 h-8" />,
            title: "Fresh Apple",
            desc: "엄격한 선별 과정을 거친 당도 14브릭스 이상의 고당도 예산 명품 사과입니다."
          },
          {
            icon: <Droplets className="w-8 h-8" />,
            title: "Pure Juice",
            desc: "물 한 방울 넣지 않고 저온 압착으로 담아낸 100% 순수 사과 주스의 진한 맛."
          },
          {
            icon: <Leaf className="w-8 h-8" />,
            title: "Crafted Snacks",
            desc: "원물의 맛과 영양을 그대로 살린 프리미엄 사과 칩, 잼 등 건강한 가공식품."
          }
        ].map((feature, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="p-10 rounded-3xl bg-[#F9F7F2] hover:bg-[#F2EFE9] transition-colors group"
          >
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-[#A51C30] mb-8 shadow-sm group-hover:scale-110 transition-transform">
              {feature.icon}
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h4>
            <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Products = () => (
  <section id="products" className="py-24 bg-[#F9F7F2]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-sm font-bold text-[#A51C30] uppercase tracking-[0.2em] mb-4">Product Showcase</h2>
          <h3 className="text-4xl font-bold text-gray-900">정성을 담은 제품 라인업</h3>
        </div>
        <button className="text-[#A51C30] font-bold flex items-center gap-2 hover:gap-3 transition-all">
          전체 제품 보기 <ChevronRight size={20} />
        </button>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            name: "예산 명품 생사과 (5kg)",
            price: "35,000원",
            tag: "Best Seller",
            img: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?q=80&w=2070&auto=format&fit=crop"
          },
          {
            name: "100% 순수 사과주스 (30포)",
            price: "28,000원",
            tag: "Premium",
            img: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=2070&auto=format&fit=crop"
          },
          {
            name: "바삭한 프리미엄 사과칩",
            price: "12,000원",
            tag: "Healthy",
            img: "https://images.unsplash.com/photo-1590005176489-db2e714711fc?q=80&w=2071&auto=format&fit=crop"
          }
        ].map((product, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -10 }}
            className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-black/5"
          >
            <div className="aspect-square overflow-hidden relative">
              <img 
                src={product.img} 
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6">
                <span className="bg-white/90 backdrop-blur-md text-[#A51C30] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {product.tag}
                </span>
              </div>
            </div>
            <div className="p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h4>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-[#A51C30]">{product.price}</span>
                <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-900 hover:bg-[#A51C30] hover:text-white transition-colors">
                  +
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="bg-[#1A1A1A] text-white py-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 lg:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <Apple className="text-[#A51C30] w-8 h-8" />
            <span className="text-2xl font-bold tracking-tight">예산키움사과</span>
          </div>
          <p className="text-gray-400 leading-relaxed mb-8">
            예산의 비옥한 토양과 농부의 정성이 만나<br />
            가장 정직한 사과의 맛을 전합니다.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#A51C30] transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#A51C30] transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#story" className="hover:text-white transition-colors">브랜드 스토리</a></li>
            <li><a href="#products" className="hover:text-white transition-colors">제품 소개</a></li>
            <li><a href="#features" className="hover:text-white transition-colors">특징</a></li>
            <li><a href="#" className="hover:text-white transition-colors">공지사항</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-bold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-[#A51C30] shrink-0" />
              <span>충청남도 예산군 예산읍<br />사과로 123 예산키움농장</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-[#A51C30] shrink-0" />
              <span>041-123-4567</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-[#A51C30] shrink-0" />
              <span>contact@yesankium.com</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-bold mb-6">Newsletter</h4>
          <p className="text-gray-400 mb-6 text-sm">신제품 소식과 할인 혜택을 받아보세요.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-[#A51C30] transition-colors"
            />
            <button className="bg-[#A51C30] px-4 py-2 rounded-lg font-bold hover:bg-[#8B1829] transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>
      
      <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>© 2026 예산키움사과. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">이용약관</a>
          <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#A51C30] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <BrandStory />
        <Features />
        <Products />
        
        {/* Call to Action Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?q=80&w=2048&auto=format&fit=crop" 
              alt="Orchard Background"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-[#A51C30]/80 backdrop-blur-sm" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">자연이 키운 가장 정직한 맛을 경험하세요</h2>
              <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                지금 예산키움사과의 신선함을 집에서 만나보실 수 있습니다. 
                산지 직송으로 가장 신선한 상태 그대로 배송해드립니다.
              </p>
              <button className="bg-white text-[#A51C30] px-12 py-5 rounded-full text-xl font-bold hover:bg-gray-100 transition-all shadow-2xl shadow-black/20">
                지금 구매하기
              </button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
