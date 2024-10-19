import React, { useEffect } from 'react';

const CustomCursor: React.FC = () => {
  useEffect(() => {
    // Create a new div element to be used as the custom cursor
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    // Function to update the cursor position
    const updateCursorPosition = (event: MouseEvent) => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    };

    // Function to update the cursor size based on document height
    const updateCursorSize = () => {
      cursor.style.width = '100px'; // Adjust width as needed
      cursor.style.height = '50px'; // Set the desired height
    };

    // Initial cursor size update
    updateCursorSize();

    // Update cursor size on window resize
    window.addEventListener('resize', updateCursorSize);

    // Update cursor size on document content change (e.g., dynamic content)
    new MutationObserver(updateCursorSize).observe(document.body, { childList: true, subtree: true });

    // Add mousemove event listener to update cursor position
    document.addEventListener('mousemove', updateCursorPosition);

    // Clean up event listeners and remove cursor element on component unmount
    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('resize', updateCursorSize);
      document.body.removeChild(cursor);
    };
  }, []);

  return null; 
};

export default CustomCursor;
