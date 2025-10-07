"use client";

import React, { useState } from "react";
import { ProductContent } from "./Content";
import PageHeader from "../component/PageHeader";
import StatsCards from "../component/StatsCards";
import ProductSection from "../component/ProductSection";
import ProductModal from "../component/ProductModal";
import { useTheme } from "../../context/ThemeContext";
import { Toolbar } from "@mui/material";

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

const ViewProduct: React.FC = () => {
  const { themeColors, isDarkMode } = useTheme();
  const [products, setProducts] = useState<Product[]>(ProductContent);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'add' | 'edit'>('add');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Calculate accurate summary statistics
  const totalProducts = products.length;
  const totalValue = products.reduce((sum, product) => sum + product.amount, 0);
  const uniqueLocations = new Set(products.map(p => `${p.location.street}, ${p.location.city}, ${p.location.province} ${p.location.postal_code}`)).size;
  const averagePrice = totalValue / totalProducts;

  const handleCreateProduct = () => {
    console.log('Create product clicked');
    setModalMode('add');
    setSelectedProduct(null);
    setIsModalOpen(true);
    console.log('Modal should be open:', true);
  };

  const handleEditProduct = (product: Product) => {
    setModalMode('edit');
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleSaveProduct = (productData: Product) => {
    if (modalMode === 'add') {
      // Add new product
      setProducts(prev => [...prev, productData]);
    } else {
      // Update existing product
      setProducts(prev => prev.map(p => 
        p.product_id === productData.product_id ? productData : p
      ));
    }
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div 
      className="min-h-screen p-6"
      style={{
        backgroundImage: isDarkMode
          ? "linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%), radial-gradient(ellipse at 30% 20%, rgba(22, 163, 74, 0.2) 0%, transparent 70%), radial-gradient(ellipse at 70% 80%, rgba(34, 197, 94, 0.15) 0%, transparent 70%)"
          : "linear-gradient(135deg, #ffffff 0%, #f0fdf4 30%, #ecfdf5 70%, #f8fafc 100%), radial-gradient(ellipse at top, rgba(22, 163, 74, 0.08) 0%, transparent 70%), radial-gradient(ellipse at bottom, rgba(34, 197, 94, 0.06) 0%, transparent 70%)",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <Toolbar />
      <div className="max-w-7xl mx-auto">
        <PageHeader
          title="Product Inventory"
          subtitle="Manage your product inventory and locations"
          onCreateClick={handleCreateProduct}
        />

        <StatsCards
          totalProducts={totalProducts}
          totalValue={totalValue}
          uniqueLocations={uniqueLocations}
          averagePrice={averagePrice}
        />

        <ProductSection
          products={products}
          onEditProduct={handleEditProduct}
        />

        <ProductModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSave={handleSaveProduct}
          product={selectedProduct}
          mode={modalMode}
        />
      </div>
    </div>
  );
};

export default ViewProduct;
