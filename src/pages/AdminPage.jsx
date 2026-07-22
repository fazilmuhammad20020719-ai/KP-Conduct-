import React, { useState } from 'react';
import { useContacts } from '../context/ContactContext';
import { Link } from 'react-router-dom';
import { FaPhone, FaWhatsapp, FaFacebook, FaInstagram, FaYoutube, FaMapMarkerAlt, FaTrash, FaEdit, FaPlus, FaArrowLeft } from 'react-icons/fa';

const iconOptions = [
  { value: 'FaPhone', label: 'Phone', component: <FaPhone /> },
  { value: 'FaWhatsapp', label: 'WhatsApp', component: <FaWhatsapp /> },
  { value: 'FaFacebook', label: 'Facebook', component: <FaFacebook /> },
  { value: 'FaInstagram', label: 'Instagram', component: <FaInstagram /> },
  { value: 'FaYoutube', label: 'YouTube', component: <FaYoutube /> },
  { value: 'FaMapMarkerAlt', label: 'Location', component: <FaMapMarkerAlt /> },
];

const colorThemes = [
  { label: 'Emerald (Green)', color: 'from-emerald-500 to-teal-500', hoverColor: 'hover:shadow-teal-500/30 hover:border-teal-200' },
  { label: 'WhatsApp Green', color: 'from-green-500 to-emerald-600', hoverColor: 'hover:shadow-green-500/30 hover:border-green-200' },
  { label: 'Facebook Blue', color: 'from-blue-600 to-indigo-600', hoverColor: 'hover:shadow-blue-500/30 hover:border-blue-200' },
  { label: 'Instagram Gradient', color: 'from-pink-500 via-red-500 to-yellow-500', hoverColor: 'hover:shadow-pink-500/30 hover:border-pink-200' },
  { label: 'YouTube Red', color: 'from-red-600 to-red-700', hoverColor: 'hover:shadow-red-500/30 hover:border-red-200' },
  { label: 'Amber Orange', color: 'from-orange-500 to-amber-600', hoverColor: 'hover:shadow-orange-500/30 hover:border-orange-200' },
];

function AdminPage() {
  const { links, addLink, deleteLink, editLink } = useContacts();
  const [editingId, setEditingId] = useState(null);
  
  const [formData, setFormData] = useState({
    name: '',
    href: '',
    iconName: 'FaPhone',
    themeIndex: 0,
  });

  const handleEditClick = (link) => {
    setEditingId(link.id);
    const themeIndex = colorThemes.findIndex(t => t.color === link.color);
    setFormData({
      name: link.name,
      href: link.href,
      iconName: link.iconName,
      themeIndex: themeIndex >= 0 ? themeIndex : 0,
    });
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData({ name: '', href: '', iconName: 'FaPhone', themeIndex: 0 });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedTheme = colorThemes[formData.themeIndex];
    
    const newLinkData = {
      name: formData.name,
      href: formData.href,
      iconName: formData.iconName,
      color: selectedTheme.color,
      hoverColor: selectedTheme.hoverColor,
    };

    if (editingId) {
      editLink(editingId, newLinkData);
    } else {
      addLink(newLinkData);
    }
    
    handleCancel();
  };

  return (
    <div className="min-h-screen bg-neutral-100 p-8">
      <div className="max-w-4xl mx-auto">
        
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-neutral-800">Manage Contact Links</h1>
          <Link to="/" className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium">
            <FaArrowLeft /> Back to Website
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">{editingId ? 'Edit Link' : 'Add New Link'}</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">Display Name</label>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                placeholder="e.g. Call Us"
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">URL or Phone (e.g. tel:+123 or https://...)</label>
              <input 
                type="text" 
                required
                value={formData.href}
                onChange={e => setFormData({...formData, href: e.target.value})}
                placeholder="https://wa.me/..."
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">Icon</label>
              <select 
                value={formData.iconName}
                onChange={e => setFormData({...formData, iconName: e.target.value})}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
              >
                {iconOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">Color Theme</label>
              <select 
                value={formData.themeIndex}
                onChange={e => setFormData({...formData, themeIndex: Number(e.target.value)})}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
              >
                {colorThemes.map((theme, idx) => (
                  <option key={idx} value={idx}>{theme.label}</option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2 flex justify-end gap-3 mt-2">
              {editingId && (
                <button 
                  type="button" 
                  onClick={handleCancel}
                  className="px-6 py-2 border border-neutral-300 text-neutral-700 rounded-lg hover:bg-neutral-50 font-medium transition"
                >
                  Cancel
                </button>
              )}
              <button 
                type="submit" 
                className="flex items-center gap-2 px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-medium transition"
              >
                {editingId ? <><FaEdit /> Update Link</> : <><FaPlus /> Add Link</>}
              </button>
            </div>
          </form>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-neutral-200 bg-neutral-50">
            <h2 className="text-lg font-semibold text-neutral-800">Current Links</h2>
          </div>
          <ul className="divide-y divide-neutral-200">
            {links.length === 0 && (
              <li className="p-6 text-center text-neutral-500">No links found. Add one above!</li>
            )}
            {links.map(link => {
              const IconObj = iconOptions.find(opt => opt.value === link.iconName);
              return (
                <li key={link.id} className="p-6 flex items-center justify-between hover:bg-neutral-50 transition">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${link.color} text-white shadow-sm`}>
                      {IconObj ? IconObj.component : <FaPhone />}
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-800">{link.name}</h3>
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:underline break-all">
                        {link.href}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => handleEditClick(link)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                      title="Edit"
                    >
                      <FaEdit className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={() => deleteLink(link.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                      title="Delete"
                    >
                      <FaTrash className="w-5 h-5" />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
