const courses = [
    { id: 1, title: "Web Development", description: "Learn HTML, CSS, and JavaScript in this beginner-friendly course." },
    { id: 2, title: "UI/UX Design", description: "Master the art of designing user-friendly interfaces and experiences." },
    { id: 3, title: "React Mastery", description: "Become an expert in React and build modern web applications." },
    { id: 4, title: "Node.js Backend", description: "Learn backend development with Node.js and Express." }
  ];

  // Generate course cards dynamically
  const courseContainer = document.getElementById('course-container');

  courses.forEach(course => {
    const courseCard = document.createElement('div');
    courseCard.classList.add('course-card');
    courseCard.innerHTML = `
      <h2>${course.title}</h2>
      <p>${course.description}</p>
      <button class="add-to-cart" onclick="addToCart('${course.title}', ${course.id})">Add to Cart</button>
    `;
    courseContainer.appendChild(courseCard);
  });

  // Cart functionality
  const cartItems = document.getElementById('cart-items');

  function addToCart(courseTitle, courseId) {
    // Check if item already in cart
    if (document.getElementById(`cart-item-${courseId}`)) {
      alert(`${courseTitle} is already in the cart!`);
      return;
    }

    // Add new item to cart
    const listItem = document.createElement('li');
    listItem.id = `cart-item-${courseId}`;
    listItem.innerHTML = `
      ${courseTitle}
      <button onclick="removeFromCart(${courseId})">Remove</button>
    `;
    cartItems.appendChild(listItem);
  }

  function removeFromCart(courseId) {
    const item = document.getElementById(`cart-item-${courseId}`);
    if (item) {
      cartItems.removeChild(item);
    }
  }