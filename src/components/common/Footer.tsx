import React from 'react';
import { Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: "Schedules",
      links: [
        "BLACKCAPS",
        "WHITE FERNS", 
        "Domestic Competitions",
        "National Tournaments",
        "Community Tournaments",
        "All Results"
      ]
    },
    {
      title: "International",
      links: [
        "News",
        "BLACKCAPS",
        "WHITE FERNS",
        "Matches and Tickets"
      ]
    },
    {
      title: "Domestic", 
      links: [
        "News",
        "Matches and Ticketing",
        "Domestic Competitions",
        "National Tournaments",
        "Competition Centres",
        "Domestic Cricket Teams",
        "Major Associations"
      ]
    },
    {
      title: "Community",
      links: [
        "Contact",
        "Social media",
        "NZC Board",
        "High Performance Centre",
        "Commercial Partners",
        "New Zealand Cricket Museum",
        "Publications",
        "Match Officials",
        "Accreditation",
        "Privacy Policy",
        "The NZC App",
        "NZC Governance",
        "Careers",
        "Integrity",
        "New Zealand Cricket Hall of Fame"
      ]
    },
    {
      title: "Corporate",
      links: [
        "Contact",
        "Social media", 
        "NZC Board",
        "High Performance Centre",
        "Commercial Partners",
        "New Zealand Cricket Museum",
        "Publications",
        "Match Officials",
        "Accreditation",
        "Privacy Policy",
        "The NZC App",
        "NZC Governance",
        "Careers",
        "Integrity",
        "New Zealand Cricket Hall of Fame"
      ]
    },
    {
      title: "Archive",
      links: [
        "Seasons",
        "Players",
        "Grounds",
        "Records"
      ]
    }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <span className="text-sm text-gray-300">News</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;