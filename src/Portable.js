import React from 'react';
import InfoPageTemplate from './InfoPageTemplate';
import './App.css'
const Portable = () => {
  const title = 'Portable Offices';
  const content = (
    <div>
      <p>
      Portable Offices in Containers for Rentals:

Welcome to Our Portable Office Solutions

At HES, we provide innovative portable office solutions housed within containers, available for rental. Our container offices offer a flexible, convenient, and cost-effective way to establish functional workspaces in various locations. These portable offices are designed to meet your immediate office space needs while maintaining the quality and standards that define our brand.

Why Choose Our Portable Offices:

Flexibility: Our container offices are designed to be easily transported and set up, allowing you to establish a workspace where it's needed most.

Cost-Effective: Renting a container office eliminates the need for expensive and time-consuming construction projects, saving you money and resources.

Quality: Just like our other products, our container offices are built with quality materials and craftsmanship to ensure a comfortable and functional workspace.

Customization: We offer customization options to tailor the container office to your specific requirements, ensuring it meets your operational needs perfectly.

Rapid Deployment: Whether it's a construction site, remote project location, or temporary workspace, our container offices can be quickly deployed to provide a practical and efficient solution.

Applications:

Our portable container offices find applications in a wide range of industries and scenarios, including:

Construction Sites: Create an on-site administrative center or project management office.

Events and Exhibitions: Set up ticket booths, registration centers, or information kiosks at events and exhibitions.

Remote Locations: Establish functional offices in remote areas where traditional infrastructure might be lacking.

Temporary Workspaces: Accommodate short-term office needs during renovations, expansions, or special projects.

Features:

Climate Control: Keep your workspace comfortable year-round with heating and cooling options.

Security: Our container offices are secure and can be equipped with locks and other security measures.

Electrical and IT Infrastructure: Wiring and outlets can be installed to support your office equipment and technology needs.

Furniture and Layout: Choose from a variety of furniture and layout options to optimize your workspace.

Branding: Customize the container with your branding and company colors for a professional appearance.

Get in Touch:

Ready to enhance your operations with our portable office solutions? Contact us today to discuss your requirements, request a quote, or learn more about how our container offices can benefit your business.

Feel free to use this content as a starting point for your "Portable Offices in Containers for Rentals" page. Customize it to reflect your company's branding, values, and any additional information you'd like to highlight.</p>
      {/* Add more content */}
    </div>
  );
  const images = ['/image/portable1.jpg','/image/portable2.jpg','/image/portable3.jpg'];
 
  const subMenus = [
    { label: 'Rental Offices', path: '/portable/rental' },
    { label: 'Purchase', path: '/portable/purchase' },
    // Add more submenu items if needed
  ];
  return (
   <div className='content'> <InfoPageTemplate title={title} content={content} images={images}  mainPath='/portable' /></div>
  );
};

export default Portable;