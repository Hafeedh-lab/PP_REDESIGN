import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Users, Mail, BookOpen, Calculator, Package } from 'lucide-react';

const Navigation = () => {
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  
  // State for scroll behavior
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // State to hold the timer IDs for dropdowns
  const [companyCloseTimer, setCompanyCloseTimer] = useState(null);
  const [productCloseTimer, setProductCloseTimer] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Handles the shrinking effect
      setIsScrolled(currentScrollY > 20);

      // Handles the retracting (show/hide) effect
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      // Update the last scroll position
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleCompanyMouseEnter = () => {
    clearTimeout(companyCloseTimer);
    clearTimeout(productCloseTimer);
    setIsCompanyDropdownOpen(true);
    setIsProductDropdownOpen(false);
  };

  const handleCompanyMouseLeave = () => {
    const timer = setTimeout(() => {
      setIsCompanyDropdownOpen(false);
    }, 250); 
    setCompanyCloseTimer(timer);
  };

  const handleProductMouseEnter = () => {
    clearTimeout(productCloseTimer);
    clearTimeout(companyCloseTimer);
    setIsProductDropdownOpen(true);
    setIsCompanyDropdownOpen(false);
  };

  const handleProductMouseLeave = () => {
    const timer = setTimeout(() => {
      setIsProductDropdownOpen(false);
    }, 250);
    setProductCloseTimer(timer);
  };


  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'py-2' : 'py-4'
    } ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-4xl mx-auto px-4">
        <div className={`bg-white/95 backdrop-blur-md rounded-full shadow-lg border border-white/20 transition-all duration-300 ${
          isScrolled ? 'shadow-xl' : 'shadow-lg'
        }`}>
          <div className="flex justify-between items-center px-6 py-3">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  src="/BendingWaters-8.png"
                  alt="Ploutos Page"
                  className="h-8 w-auto"
                />
              </Link>
            </div>

            {/* Navigation Items */}
            <div className="flex items-center space-x-2">
              {/* Company Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleCompanyMouseEnter}
                onMouseLeave={handleCompanyMouseLeave}
              >
                <button
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-blue-50"
                >
                  <span>COMPANY</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    isCompanyDropdownOpen ? 'rotate-180' : ''
                  }`} />
                </button>

                {isCompanyDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 z-50 animate-in slide-in-from-top-2 duration-200">
                    <div className="px-2">
                      <Link to="/about-us" className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 rounded-xl transition-all duration-200 hover:text-blue-600">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center icon-hover-lift">
                          <Users className="w-4 h-4 text-blue-600 transition-transform duration-300" />
                        </div>
                        <span className="font-medium">About us</span>
                      </Link>
                      <Link to="/contact" className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 rounded-xl transition-all duration-200 hover:text-blue-600">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center icon-hover-lift">
                          <Mail className="w-4 h-4 text-blue-600 transition-transform duration-300" />
                        </div>
                        <span className="font-medium">Contact Us</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Product Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleProductMouseEnter}
                onMouseLeave={handleProductMouseLeave}
              >
                <button
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-blue-50"
                >
                  <span>PRODUCT</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    isProductDropdownOpen ? 'rotate-180' : ''
                  }`} />
                </button>

                {isProductDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-96 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 z-50 animate-in slide-in-from-top-2 duration-200">
                    <div className="flex gap-4">
                      {/* Other Services - Left side */}
                      <div className="flex-1 space-y-2">
                        <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                          Other Services
                        </div>
                        <Link to="/bookkeeping-services" className="flex items-center space-x-3 px-3 py-3 text-sm text-gray-700 hover:bg-blue-50 rounded-xl transition-all duration-200 hover:text-blue-600">
                          <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 icon-hover-lift">
                            <BookOpen className="w-3 h-3 text-blue-600 transition-transform duration-300" />
                          </div>
                          <span className="font-medium">Book-keeping Services</span>
                        </Link>
                        <Link to="/tax-services" className="flex items-center space-x-3 px-3 py-3 text-sm text-gray-700 hover:bg-blue-50 rounded-xl transition-all duration-200 hover:text-blue-600">
                          <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 icon-hover-lift">
                            <Calculator className="w-3 h-3 text-blue-600 transition-transform duration-300" />
                          </div>
                          <span className="font-medium">Tax Services</span>
                        </Link>
                        <Link to="/inventory-management" className="flex items-center space-x-3 px-3 py-3 text-sm text-gray-700 hover:bg-blue-50 rounded-xl transition-all duration-200 hover:text-blue-600">
                          <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 icon-hover-lift">
                            <Package className="w-3 h-3 text-blue-600 transition-transform duration-300" />
                          </div>
                          <span className="font-medium">Inventory Management</span>
                        </Link>
                      </div>

                      {/* Main Products - Right side cards */}
                      <div className="w-56 space-y-2">
                        <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                          Main Products
                        </div>

                        {/* PEPCODE */}
                        <a href="https://pepcodeinc.com/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 hover:bg-blue-50 rounded-xl transition-all duration-200">
                          <img src="/images/pepcode logo.webp" alt="PEPCODE Logo" className="w-8 h-8 mr-3 object-contain"/>
                          <div>
                              <div className="font-semibold text-blue-900">PEPCODE</div>
                              <div className="text-xs text-blue-700 mt-1">Bookkeeping Software</div>
                          </div>
                        </a>

                        {/* AUDITME */}
                        <a href="https://auditme.com.ng/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 hover:bg-blue-50 rounded-xl transition-all duration-200">
                            <img src="/images/auditme.webp" alt="AUDITME Logo" className="w-8 h-8 mr-3 object-contain"/>
                            <div>
                                <div className="font-semibold text-blue-900">AUDITME</div>
                                <div className="text-xs text-blue-700 mt-1">Audit Platform</div>
                            </div>
                        </a>

                        {/* OWA by PEPCODE */}
                        <a href="https://owabypepcode.com.ng/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 hover:bg-blue-50 rounded-xl transition-all duration-200">
                            <img src="/images/7.png" alt="OWA by PEPCODE Logo" className="w-8 h-8 mr-3 object-contain"/>
                            <div>
                                <div className="font-semibold text-blue-900">OWA by PEPCODE</div>
                                <div className="text-xs text-blue-700 mt-1">Paperless Bookkeeping</div>
                            </div>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
