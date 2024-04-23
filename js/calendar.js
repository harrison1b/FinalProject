const days = document.querySelectorAll('.day');

days.forEach(day => {
  day.addEventListener('click', function() {
    // Allow user to directly edit the content within the clicked day element
    const currentContent = day.textContent;
    day.contentEditable = true; // Make the content editable
    day.focus(); // Set focus for immediate editing

    day.addEventListener('blur', function() { // Handle blur event (clicking outside)
      day.contentEditable = false; // Disable editing
      // Optionally, you can store the modified content here (implementation not included)
    });
  });
});