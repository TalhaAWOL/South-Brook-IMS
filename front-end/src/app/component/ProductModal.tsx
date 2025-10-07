"use client";

import React, { useState, useEffect } from "react";
import { X, Plus, Save, Tag, DollarSign, MapPin, Building, MapPin as Location } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { ProductContent } from "../product/Content";

interface Product {
  product_id: string;
  name: string;
  amount: number;
  location: {
    street: string;
    city: string;
    province: string;
    postal_code: string;
    country: string;
  };
}

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (product: Product) => void;
  product?: Product | null; // null for add mode, Product for edit mode
  mode: 'add' | 'edit';
}

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, onSave, product, mode }) => {
  const { themeColors } = useTheme();
  const [formData, setFormData] = useState<Product>({
    product_id: '',
    name: '',
    amount: 0,
    location: {
      street: '',
      city: '',
      province: '',
      postal_code: '',
      country: 'Canada'
    }
  });

  // Populate form when editing
  useEffect(() => {
    if (mode === 'edit' && product) {
      setFormData(product);
    } else {
      // Reset form for add mode
      setFormData({
        product_id: '',
        name: '',
        amount: 0,
        location: {
          street: '',
          city: '',
          province: '',
          postal_code: '',
          country: 'Canada'
        }
      });
    }
  }, [mode, product]);

  const generateNextProductId = () => {
    // Find the highest existing product ID and increment
    const existingIds = ProductContent.map(p => {
      const idNum = parseInt(p.product_id.replace('P', ''));
      return isNaN(idNum) ? 0 : idNum;
    });
    const maxId = Math.max(...existingIds, 25); // Start from P026 if no existing products
    return `P${String(maxId + 1).padStart(3, '0')}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'add') {
      // Generate new product ID starting from P026
      const newProduct = {
        ...formData,
        product_id: generateNextProductId()
      };
      onSave(newProduct);
    } else {
      onSave(formData);
    }
    onClose();
  };

  const handleInputChange = (field: string, value: string | number) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent as keyof Product],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  if (!isOpen) return null;

  console.log('ProductModal rendering, isOpen:', isOpen, 'mode:', mode);

  return (
    <div
      className="fixed inset-0 z-[50] flex items-center justify-center p-4 backdrop-blur-sm"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div 
        className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl"
        style={{
          backgroundColor: themeColors.background.card,
          borderColor: themeColors.border.primary,
        }}
      >
        {/* Header */}
        <div 
          className="flex items-center justify-between p-4 md:p-6 border-b"
          style={{ borderColor: themeColors.border.primary }}
        >
          <div>
            <h2 
              className="text-xl md:text-2xl font-semibold tracking-tight flex items-center gap-2"
              style={{ color: themeColors.text.primary }}
            >
              {mode === 'add' ? (
                <>
                  <Tag className="h-4 w-4" style={{ color: themeColors.text.secondary }} />
                  Add New Product
                </>
              ) : (
                <>
                  <Save className="h-4 w-4" style={{ color: themeColors.text.secondary }} />
                  Edit Product
                </>
              )}
            </h2>
            <p 
              className="text-sm mt-1"
              style={{ color: themeColors.text.secondary }}
            >
              {mode === 'add' ? 'Create a new product in your inventory' : 'Update product information'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="hover:bg-opacity-10 rounded-lg p-2 transition-colors"
            style={{ color: themeColors.text.secondary }}
            aria-label="Close modal"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="max-h-[70vh] overflow-y-auto">
          <div className="p-4 md:p-6 space-y-4">
            {/* Product Details Section */}
            <div className="space-y-3">
              <h3 
                className="text-sm font-medium flex items-center gap-2"
                style={{ color: themeColors.text.secondary }}
              >
                <Tag className="h-4 w-4" />
                Product Details
              </h3>
              
              {/* Product Name */}
              <div className="space-y-1.5">
                <label 
                  className="text-sm font-medium"
                  style={{ color: themeColors.text.primary }}
                >
                  Product Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="h-11 w-full rounded-xl border px-3 text-sm focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: themeColors.background.primary,
                    borderColor: themeColors.border.primary,
                    color: themeColors.text.primary,
                    focusRingColor: 'rgba(22, 163, 74, 0.3)',
                  }}
                  placeholder="Enter product name"
                />
              </div>

              {/* Price */}
              <div className="space-y-1.5">
                <label 
                  className="text-sm font-medium flex items-center gap-2"
                  style={{ color: themeColors.text.primary }}
                >
                  <DollarSign className="h-4 w-4" style={{ color: themeColors.text.secondary }} />
                  Price (CAD) *
                </label>
                <div 
                  className="inline-flex items-center gap-2 h-11 w-full rounded-xl border px-3 text-sm"
                  style={{
                    backgroundColor: themeColors.background.primary,
                    borderColor: themeColors.border.primary,
                  }}
                >
                  <span style={{ color: themeColors.text.secondary }}>$</span>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    required
                    value={formData.amount}
                    onChange={(e) => handleInputChange('amount', parseFloat(e.target.value) || 0)}
                    className="flex-1 bg-transparent focus:outline-none"
                    style={{ color: themeColors.text.primary }}
                    placeholder="0.00"
                  />
                </div>
              </div>
            </div>

            {/* Location Section */}
            <div 
              className="border-t pt-4 space-y-3"
              style={{ borderColor: themeColors.border.primary }}
            >
              <h3 
                className="text-sm font-medium flex items-center gap-2"
                style={{ color: themeColors.text.secondary }}
              >
                <MapPin className="h-4 w-4" />
                Location Details
              </h3>

              {/* Street Address - Full Width */}
              <div className="space-y-1.5">
                <label 
                  className="text-sm font-medium"
                  style={{ color: themeColors.text.primary }}
                >
                  Street Address *
                </label>
                <input
                  type="text"
                  required
                  value={formData.location.street}
                  onChange={(e) => handleInputChange('location.street', e.target.value)}
                  className="h-11 w-full rounded-xl border px-3 text-sm focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: themeColors.background.primary,
                    borderColor: themeColors.border.primary,
                    color: themeColors.text.primary,
                    focusRingColor: 'rgba(22, 163, 74, 0.3)',
                  }}
                  placeholder="e.g., 123 Main St"
                />
              </div>

              {/* City and Province - Two Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label 
                    className="text-sm font-medium"
                    style={{ color: themeColors.text.primary }}
                  >
                    City *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.location.city}
                    onChange={(e) => handleInputChange('location.city', e.target.value)}
                    className="h-11 w-full rounded-xl border px-3 text-sm focus:outline-none focus:ring-2"
                    style={{
                      backgroundColor: themeColors.background.primary,
                      borderColor: themeColors.border.primary,
                      color: themeColors.text.primary,
                      focusRingColor: 'rgba(22, 163, 74, 0.3)',
                    }}
                    placeholder="e.g., Toronto"
                  />
                </div>

                <div className="space-y-1.5">
                  <label 
                    className="text-sm font-medium"
                    style={{ color: themeColors.text.primary }}
                  >
                    Province *
                  </label>
                  <div className="relative">
                    <select
                      required
                      value={formData.location.province}
                      onChange={(e) => handleInputChange('location.province', e.target.value)}
                      className="h-11 w-full rounded-xl border px-3 pr-10 text-sm appearance-none focus:outline-none focus:ring-2"
                      style={{
                        backgroundColor: themeColors.background.primary,
                        borderColor: themeColors.border.primary,
                        color: themeColors.text.primary,
                        focusRingColor: 'rgba(22, 163, 74, 0.3)',
                      }}
                    >
                      <option value="">Select Province</option>
                      <option value="ON">Ontario</option>
                      <option value="BC">British Columbia</option>
                      <option value="AB">Alberta</option>
                      <option value="QC">Quebec</option>
                      <option value="MB">Manitoba</option>
                      <option value="SK">Saskatchewan</option>
                      <option value="NS">Nova Scotia</option>
                      <option value="NB">New Brunswick</option>
                      <option value="NL">Newfoundland and Labrador</option>
                      <option value="PE">Prince Edward Island</option>
                      <option value="NT">Northwest Territories</option>
                      <option value="YT">Yukon</option>
                      <option value="NU">Nunavut</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Postal Code and Country - Two Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label 
                    className="text-sm font-medium"
                    style={{ color: themeColors.text.primary }}
                  >
                    Postal Code *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.location.postal_code}
                    onChange={(e) => handleInputChange('location.postal_code', e.target.value.toUpperCase())}
                    className="h-11 w-full rounded-xl border px-3 text-sm focus:outline-none focus:ring-2"
                    style={{
                      backgroundColor: themeColors.background.primary,
                      borderColor: themeColors.border.primary,
                      color: themeColors.text.primary,
                      focusRingColor: 'rgba(22, 163, 74, 0.3)',
                    }}
                    placeholder="e.g., A1A 1A1"
                    pattern="[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d"
                    title="Canadian Postal Code (e.g., A1A 1A1)"
                  />
                </div>

                <div className="space-y-1.5">
                  <label 
                    className="text-sm font-medium"
                    style={{ color: themeColors.text.primary }}
                  >
                    Country *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.location.country}
                    onChange={(e) => handleInputChange('location.country', e.target.value)}
                    className="h-11 w-full rounded-xl border px-3 text-sm focus:outline-none focus:ring-2"
                    style={{
                      backgroundColor: themeColors.background.primary,
                      borderColor: themeColors.border.primary,
                      color: themeColors.text.primary,
                      focusRingColor: 'rgba(22, 163, 74, 0.3)',
                    }}
                    placeholder="e.g., Canada"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Footer - Sticky */}
          <div 
            className="sticky bottom-0 backdrop-blur border-t p-4 md:p-6"
            style={{ 
              backgroundColor: `${themeColors.background.card}80`,
              borderColor: themeColors.border.primary,
            }}
          >
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="h-10 rounded-xl border px-4 text-sm font-medium transition-colors"
                style={{
                  backgroundColor: themeColors.interactive.secondary.bg,
                  borderColor: themeColors.interactive.secondary.border,
                  color: themeColors.interactive.secondary.text,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = themeColors.interactive.secondary.bgHover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = themeColors.interactive.secondary.bg;
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="h-10 rounded-xl px-5 font-medium transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: themeColors.interactive.primary.bg,
                  color: themeColors.interactive.primary.text,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = themeColors.interactive.primary.bgHover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = themeColors.interactive.primary.bg;
                }}
              >
                {mode === 'add' ? 'Add Product' : 'Save Changes'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductModal;
