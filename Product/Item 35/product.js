// Nav bar active Start 

// Function to remove 'active' class from all links
function removeActiveClass() {
    const links = document.querySelectorAll('#navbar a');
    links.forEach(link => {
        link.classList.remove('active');
    });
}

// Function to add 'active' class to the current link
function addActiveClass(linkId) {
    const link = document.getElementById(linkId);
    link.classList.add('active');
}

// Get the current page's URL
const currentPage = window.location.pathname;

// Compare the current page with the links and add the 'active' class accordingly
if (currentPage.includes('home.html')) {
    removeActiveClass();
    addActiveClass('homeLink');
} else if (currentPage.includes('shop.html')) {
    removeActiveClass();
    addActiveClass('shopLink');
} else if (currentPage.includes('contact.html')) {
    removeActiveClass();
    addActiveClass('contactLink');
} else if (currentPage.includes('cart.html')) {
    removeActiveClass();
    addActiveClass('cartLink');
} else if (currentPage.includes('product.html')) {
    removeActiveClass();
    addActiveClass('shopLink');
}

// Nav bar active End


var MainImg = document.getElementById("MainImg");
var smallImg = document.getElementsByClassName(" small-img");
smallImg[0].onclick = function () {
    MainImg.src = smallImg[0].src;
}
smallImg[1].onclick = function () {
    MainImg.src = smallImg[1].src;
}
smallImg[2].onclick = function () {
    MainImg.src = smallImg[2].src;
}
smallImg[3].onclick = function () {
    MainImg.src = smallImg[3].src;
}

smallImg[4].onclick = function () {
  MainImg.src = smallImg[4].src;
}

smallImg[5].onclick = function () {
  MainImg.src = smallImg[5].src;
}

smallImg[6].onclick = function () {
  MainImg.src = smallImg[6].src;
}

smallImg[7].onclick = function () {
  MainImg.src = smallImg[7].src;
}

smallImg[8].onclick = function () {
  MainImg.src = smallImg[8].src;
}

smallImg[9].onclick = function () {
  MainImg.src = smallImg[9].src;
}

smallImg[10].onclick = function () {
  MainImg.src = smallImg[10].src;
}

smallImg[11].onclick = function () {
  MainImg.src = smallImg[11].src;
}

















































// Function to change the main image when a thumbnail is clicked
function changeImage(imagePath) {
    document.getElementById("MainImg").src = imagePath;
  }
  
  // Function to handle increase quantity
  function increaseValue() {
    const quantity = document.getElementById("numberInput");
    quantity.value = parseInt(quantity.value) + 1;
  }
  
  // Function to handle decrease quantity
  function decreaseValue() {
    const quantity = document.getElementById("numberInput");
    if (quantity.value > 1) {
      quantity.value = parseInt(quantity.value) - 1;
    }
  }
  
  // Add to cart logic
  document.getElementById("addToCart").addEventListener("click", function() {
    const productName = document.getElementById("productName").innerText;
    const productPrice = document.getElementById("productPrice").innerText;
    const mainImage = document.getElementById("MainImg").src;
    const productSize = document.getElementById("productSize").value;
    const quantity = document.getElementById("numberInput").value;
  
    // Ensure a valid size is selected
    if (productSize === "Select Size") {
      alert("Please select a size.");
      return;
    }
  
    // Retrieve existing cart from localStorage or initialize a new cart
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    // Check if the product already exists in the cart
    const existingProductIndex = cart.findIndex(item => item.name === productName && item.size === productSize);
  
    if (existingProductIndex !== -1) {
      // Update the quantity of the existing product
      cart[existingProductIndex].quantity = parseInt(cart[existingProductIndex].quantity) + parseInt(quantity);
    } else {
      // Add new item to the cart
      cart.push({
        name: productName,
        price: productPrice,
        image: mainImage,
        size: productSize,
        quantity: quantity,
      });
    }
  
    // Save updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
  
    // Show notification
    document.getElementById("notification").style.display = "block";
  });
  
  // Function to show the cart and allow modifying items
  function viewCart() {
    // Retrieve cart items from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    if (cart.length === 0) {
      document.getElementById("cartDisplay").innerHTML = "<p>Your cart is empty.</p>";
      return;
    }
  
    let cartContent = "<table><tr><th>Image</th><th>Product</th><th>Price</th><th>Size</th><th>Quantity</th><th>Actions</th></tr>";
  
    cart.forEach(item => {
      cartContent += `
        <tr>
          <td><img src="${item.image}" width="50" /></td>
          <td>${item.name}</td>
          <td>${item.price}</td>
          <td>${item.size}</td>
          <td>
            <button onclick="decreaseItemQuantity('${item.name}', '${item.size}')">-</button>
            ${item.quantity}
            <button onclick="increaseItemQuantity('${item.name}', '${item.size}')">+</button>
          </td>
          <td><button onclick="removeItemFromCart('${item.name}', '${item.size}')">Remove</button></td>
        </tr>
      `;
    });
  
    cartContent += "</table>";
  
    // Show cart content on the page
    document.getElementById("cartDisplay").innerHTML = cartContent;
  }
  
  // Function to decrease item quantity
  function decreaseItemQuantity(name, size) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    const itemIndex = cart.findIndex(item => item.name === name && item.size === size);
    if (cart[itemIndex].quantity > 1) {
      cart[itemIndex].quantity--;
      localStorage.setItem("cart", JSON.stringify(cart));
      viewCart();
    }
  }
  
  // Function to increase item quantity
  function increaseItemQuantity(name, size) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    const itemIndex = cart.findIndex(item => item.name === name && item.size === size);
    cart[itemIndex].quantity++;
    localStorage.setItem("cart", JSON.stringify(cart));
    viewCart();
  }
  
  // Function to remove item from cart
  function removeItemFromCart(name, size) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart = cart.filter(item => !(item.name === name && item.size === size));
    localStorage.setItem("cart", JSON.stringify(cart));
    viewCart();
  }
  