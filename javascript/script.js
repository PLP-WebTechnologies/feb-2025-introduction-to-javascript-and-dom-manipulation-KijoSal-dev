// Change text content
document.getElementById("change-text-btn").addEventListener("click", function () {
    const text = document.getElementById("dynamic-text");
    text.textContent = "🎉 The text has been changed!";
  });
  
  // Modify CSS styles
  document.getElementById("change-style-btn").addEventListener("click", function () {
    const title = document.getElementById("main-title");
    title.style.color = "crimson";
    title.style.fontSize = "3rem";
  });
  
  // Add or remove an element
  document.getElementById("toggle-element-btn").addEventListener("click", function () {
    const container = document.getElementById("container");
    const existingElement = document.getElementById("dynamic-box");
  
    if (existingElement) {
      container.removeChild(existingElement);
    } else {
      const newBox = document.createElement("div");
      newBox.id = "dynamic-box";
      newBox.textContent = "I’m a new element!";
      newBox.style.padding = "10px";
      newBox.style.backgroundColor = "#eef";
      newBox.style.border = "1px solid #ccc";
      container.appendChild(newBox);
    }
  });
  