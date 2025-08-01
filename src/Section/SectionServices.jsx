import React from 'react';
import { motion } from 'framer-motion';
import './SectionServices.css';

const services = [
  {
    icon: '💻',
    title: 'Desenvolvimento Web',
    description: 'Sites e aplicações web modernas e responsivas com as melhores tecnologias',
    features: ['React', 'Next.js', 'TypeScript', 'Responsivo'],
    color: '#667eea',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
  },
  {
    icon: '📱',
    title: 'Aplicativos Mobile',
    description: 'Apps nativos e híbridos para iOS e Android com performance excepcional',
    features: ['React Native', 'Flutter', 'iOS', 'Android'],
    color: '#e74c3c',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop'
  },
  {
    icon: '🛒',
    title: 'E-commerce',
    description: 'Lojas online completas com sistema de pagamento e gestão de estoque',
    features: ['WooCommerce', 'Shopify', 'Pagamentos', 'Estoque'],
    color: '#f39c12',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop'
  },
  {
    icon: '📊',
    title: 'Sistemas ERP',
    description: 'Sistemas de gestão empresarial integrados e personalizados',
    features: ['Dashboard', 'Relatórios', 'Integração', 'Cloud'],
    color: '#2ecc71',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
  },
  {
    icon: '🎨',
    title: 'Design UI/UX',
    description: 'Interfaces intuitivas e experiências únicas para seu produto',
    features: ['Figma', 'Adobe XD', 'Prototipagem', 'Testes'],
    color: '#9b59b6',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop'
  },
  {
    icon: '☁️',
    title: 'Cloud Computing',
    description: 'Infraestrutura e serviços em nuvem para escalabilidade total',
    features: ['AWS', 'Azure', 'Google Cloud', 'DevOps'],
    color: '#1abc9c',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop'
  }
];

const SectionServices = () => {
  return (
    <section className="services">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge">
            <span className="badge-icon">⚙️</span>
            Nossos Serviços
          </div>
          <h2>Soluções Completas para o Digital</h2>
          <p>Oferecemos uma gama completa de serviços para transformar sua presença digital</p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              style={{ '--card-color': service.color }}
            >
              <div className="service-image">
                <img src={service.image} alt={service.title} />
                <div className="service-overlay">
                  <div className="service-icon">{service.icon}</div>
                </div>
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-features">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">{feature}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionServices;
