import React, { createContext, useState, useEffect, useContext } from 'react';

const defaultLinks = [
  {
    id: '1',
    name: 'Call Us',
    href: 'tel:0770271515',
    iconName: 'FaPhone',
    color: 'from-emerald-500 to-teal-500',
    hoverColor: 'hover:shadow-teal-500/30 hover:border-teal-200',
  },
  {
    id: '2',
    name: 'WhatsApp',
    href: 'https://wa.me/0770271515',
    iconName: 'FaWhatsapp',
    color: 'from-green-500 to-emerald-600',
    hoverColor: 'hover:shadow-green-500/30 hover:border-green-200',
  },
  {
    id: '3',
    name: 'Facebook',
    href: 'https://www.facebook.com/share/1EfrB54QwD/?mibextid=wwXIfr',
    iconName: 'FaFacebook',
    color: 'from-blue-600 to-indigo-600',
    hoverColor: 'hover:shadow-blue-500/30 hover:border-blue-200',
  },
  {
    id: '4',
    name: 'Instagram',
    href: 'https://instagram.com',
    iconName: 'FaInstagram',
    color: 'from-pink-500 via-red-500 to-yellow-500',
    hoverColor: 'hover:shadow-pink-500/30 hover:border-pink-200',
  },
  {
    id: '5',
    name: 'YouTube',
    href: 'https://youtube.com',
    iconName: 'FaYoutube',
    color: 'from-red-600 to-red-700',
    hoverColor: 'hover:shadow-red-500/30 hover:border-red-200',
  },
  {
    id: '6',
    name: 'Visit Us',
    href: 'https://maps.app.goo.gl/Q7L4gbg3xVnMU5yE8?g_st=iw',
    iconName: 'FaMapMarkerAlt',
    color: 'from-orange-500 to-amber-600',
    hoverColor: 'hover:shadow-orange-500/30 hover:border-orange-200',
  },
];

const ContactContext = createContext();

export function ContactProvider({ children }) {
  const [links, setLinks] = useState(() => {
    const saved = localStorage.getItem('contactLinks');
    return saved ? JSON.parse(saved) : defaultLinks;
  });

  useEffect(() => {
    localStorage.setItem('contactLinks', JSON.stringify(links));
  }, [links]);

  const addLink = (newLink) => {
    setLinks([...links, { ...newLink, id: Date.now().toString() }]);
  };

  const editLink = (id, updatedLink) => {
    setLinks(links.map((link) => (link.id === id ? { ...link, ...updatedLink } : link)));
  };

  const deleteLink = (id) => {
    setLinks(links.filter((link) => link.id !== id));
  };

  return (
    <ContactContext.Provider value={{ links, addLink, editLink, deleteLink }}>
      {children}
    </ContactContext.Provider>
  );
}

export function useContacts() {
  return useContext(ContactContext);
}
