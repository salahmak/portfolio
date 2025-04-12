import { jsPDF } from 'jspdf';
import type { PortfolioData } from '../hooks/usePortfolioData';

export const generateCV = (data: PortfolioData) => {
  const doc = new jsPDF();
  let yOffset = 20;
  const lineHeight = 7;
  const margin = 20;
  const pageHeight = doc.internal.pageSize.height;
  const maxWidth = doc.internal.pageSize.width - 2 * margin;
  
  // Define colors
  const primaryColor = [41, 128, 185]; // Blue color for headers
  const secondaryColor = [52, 73, 94]; // Dark blue for text
  const lightGray = [236, 240, 241]; // Light gray for backgrounds
  
  // Helper function to add text with line breaks and page management
  const addText = (text: string, y: number, fontSize = 12, color = secondaryColor) => {
    doc.setFontSize(fontSize);
    doc.setTextColor(color[0], color[1], color[2]);
    const lines = doc.splitTextToSize(text, maxWidth);
    
    // Check if we need a new page
    if (y + (lines.length * lineHeight) > pageHeight - margin) {
      doc.addPage();
      y = margin;
    }
    
    doc.text(lines, margin, y);
    return y + (lines.length * lineHeight);
  };

  // Helper function to add a section header
  const addSectionHeader = (text: string, y: number) => {
    // Check if we need a new page
    if (y + lineHeight * 3 > pageHeight - margin) {
      doc.addPage();
      y = margin;
    }
    
    // Add a light gray background for the header
    doc.setFillColor(lightGray[0], lightGray[1], lightGray[2]);
    doc.rect(margin - 5, y - 5, maxWidth + 10, lineHeight * 2, 'F');
    
    // Add the header text
    doc.setFontSize(16);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setFont('helvetica', 'bold');
    doc.text(text, margin, y + lineHeight);
    
    // Reset font
    doc.setFont('helvetica', 'normal');
    
    return y + lineHeight * 2;
  };
  
  // Helper function to add a divider line
  const addDivider = (y: number) => {
    doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setLineWidth(0.5);
    doc.line(margin, y, margin + maxWidth, y);
    return y + lineHeight;
  };
  


  // Header with styling
  doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.rect(0, 0, doc.internal.pageSize.width, 30, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text(data.about.name, margin, 20);
  
  yOffset = 40;
  
  // Title
  doc.setFontSize(14);
  doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
  doc.setFont('helvetica', 'italic');
  doc.text(data.about.title, margin, yOffset);
  yOffset += lineHeight * 2;
  
  // Contact Information in a grid
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  
  const labelWidth = 35;
  const rightColumnStart = margin + (maxWidth * 0.6); // Adjust right column position
  
  // Email
  doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
  doc.text('Email:', margin, yOffset);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text(data.contact.email, margin + labelWidth, yOffset);
  
  // Phone
  doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
  doc.text('Phone:', rightColumnStart, yOffset);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text(data.contact.phone, rightColumnStart + labelWidth, yOffset);
  
  yOffset += lineHeight * 1.5;
  
  // Location
  doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
  doc.text('Location:', margin, yOffset);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text(data.contact.address, margin + labelWidth, yOffset);
  
  // Social links
  doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
  doc.text('GitHub:', rightColumnStart, yOffset);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text(data.about.social.github, rightColumnStart + labelWidth, yOffset);
  
  yOffset += lineHeight * 2;
  
  // Add a divider
  yOffset = addDivider(yOffset);
  
  // Bio
  doc.setFontSize(12);
  doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
  doc.setFont('helvetica', 'bold');
  doc.text('Professional Summary', margin, yOffset);
  yOffset += lineHeight;
  
  doc.setFont('helvetica', 'normal');
  yOffset = addText(data.about.bio, yOffset);
  yOffset += lineHeight;

  // Skills
  yOffset = addSectionHeader('Skills', yOffset);
  
  // Calculate column widths
  const numColumns = 2;
  const columnWidth = (maxWidth) / numColumns;
  
  // Filter and organize skills into desired columns
  const column1Skills = data.skills.filter(skill => 
    skill.category === 'Tools & Technologies' || skill.category === 'Areas of Expertise'
  );
  
  const column2Skills = data.skills.filter(skill => 
    skill.category === 'Frameworks & Libraries'
  );

  // Track the maximum y-offset for both columns
  let maxYOffset = yOffset;

  // Helper function to render a skill column
  const renderSkillColumn = (skills: typeof data.skills, xOffset: number, startY: number) => {
    let currentY = startY;

    skills.forEach((skill) => {
      // Check if we need a new page
      if (currentY + lineHeight * 3 > pageHeight - margin) {
        doc.addPage();
        currentY = margin;
        maxYOffset = margin;
      }

      // Add category header
      doc.setFontSize(14);
      doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
      doc.setFont('helvetica', 'bold');
      doc.text(skill.category, xOffset, currentY);
      currentY += lineHeight * 1.5;

      // Add skills as bullet points
      doc.setFontSize(11);
      doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
      doc.setFont('helvetica', 'normal');

      skill.items.forEach((item) => {
        if (currentY + lineHeight > pageHeight - margin) {
          doc.addPage();
          currentY = margin;
          maxYOffset = Math.max(maxYOffset, margin);
        }

        // Add bullet point
        doc.text('•', xOffset, currentY);
        
        // Add skill text with proper wrapping
        const availableWidth = columnWidth - 15; // Account for bullet point and padding
        const lines = doc.splitTextToSize(item, availableWidth);
        doc.text(lines, xOffset + 8, currentY);
        
        currentY += lineHeight * lines.length;
      });

      currentY += lineHeight; // Add space between skill categories
      maxYOffset = Math.max(maxYOffset, currentY);
    });

    return currentY;
  };

  // Render left column (Tools & Technologies and Areas of Expertise)
  renderSkillColumn(column1Skills, margin, yOffset);

  // Render right column (Frameworks & Libraries)
  renderSkillColumn(column2Skills, margin + columnWidth, yOffset);

  yOffset = maxYOffset + lineHeight;

  // Experience
  yOffset = addSectionHeader('Experience', yOffset);

  data.experience.forEach((exp, index) => {
    // Check if we need a new page
    if (yOffset + lineHeight * 5 > pageHeight - margin) {
      doc.addPage();
      yOffset = margin;
    }

    // Add separator line if not first item
    if (index > 0) {
      doc.setDrawColor(lightGray[0], lightGray[1], lightGray[2]);
      doc.setLineWidth(0.5);
      doc.line(margin, yOffset - lineHeight, margin + maxWidth, yOffset - lineHeight);
      yOffset += lineHeight;
    }
    
    // Title and company
    doc.setFontSize(14);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setFont('helvetica', 'bold');
    doc.text(exp.title, margin, yOffset);
    yOffset += lineHeight;
    
    // Company and location
    doc.setFontSize(12);
    doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
    doc.setFont('helvetica', 'italic');
    doc.text(`${exp.company} - ${exp.location}`, margin, yOffset);
    yOffset += lineHeight;
    
    // Date
    doc.setFont('helvetica', 'normal');
    doc.text(`${exp.startDate} - ${exp.endDate}`, margin, yOffset);
    yOffset += lineHeight;
    
    // Description
    yOffset = addText(exp.description, yOffset);
    yOffset += lineHeight * 1.5;
  });

  // Force a new page before Education section
  doc.addPage();
  yOffset = margin;

  // Education
  yOffset = addSectionHeader('Education', yOffset);

  data.education.forEach((edu, index) => {
    // Check if we need a new page
    if (yOffset + lineHeight * 5 > pageHeight - margin) {
      doc.addPage();
      yOffset = margin;
    }

    // Add separator line if not first item
    if (index > 0) {
      doc.setDrawColor(lightGray[0], lightGray[1], lightGray[2]);
      doc.setLineWidth(0.5);
      doc.line(margin, yOffset - lineHeight, margin + maxWidth, yOffset - lineHeight);
      yOffset += lineHeight;
    }
    
    // Degree
    doc.setFontSize(14);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setFont('helvetica', 'bold');
    doc.text(edu.degree, margin, yOffset);
    yOffset += lineHeight;
    
    // Institution and location
    doc.setFontSize(12);
    doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
    doc.setFont('helvetica', 'italic');
    doc.text(`${edu.institution} - ${edu.location}`, margin, yOffset);
    yOffset += lineHeight;
    
    // Date
    doc.setFont('helvetica', 'normal');
    doc.text(`${edu.startDate} - ${edu.endDate}`, margin, yOffset);
    yOffset += lineHeight;
    
    // Description
    yOffset = addText(edu.description, yOffset);
    yOffset += lineHeight * 1.5;
  });

  // Projects
  yOffset = addSectionHeader('Projects', yOffset);

  data.projects.forEach((project, index) => {
    // Check if we need a new page
    if (yOffset + lineHeight * 5 > pageHeight - margin) {
      doc.addPage();
      yOffset = margin;
    }

    // Add separator line if not first item
    if (index > 0) {
      doc.setDrawColor(lightGray[0], lightGray[1], lightGray[2]);
      doc.setLineWidth(0.5);
      doc.line(margin, yOffset - lineHeight, margin + maxWidth, yOffset - lineHeight);
      yOffset += lineHeight;
    }
    
    // Title
    doc.setFontSize(14);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setFont('helvetica', 'bold');
    doc.text(project.title, margin, yOffset);
    yOffset += lineHeight;
    
    // Description
    doc.setFontSize(12);
    doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
    doc.setFont('helvetica', 'normal');
    yOffset = addText(project.description, yOffset);
    yOffset += lineHeight;
    
    // Technologies
    doc.setFont('helvetica', 'italic');
    const techText = `Technologies: ${project.technologies.join(', ')}`;
    yOffset = addText(techText, yOffset);
    yOffset += lineHeight * 1.5;
  });

  // Save the PDF
  doc.save(`${data.about.name.replace(/\s+/g, '_')}_CV.pdf`);
}; 