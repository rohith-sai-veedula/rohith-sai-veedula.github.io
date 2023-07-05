document.addEventListener("DOMContentLoaded", function() {
  // Get the elements
  var valueElement = document.getElementById("value");
  var historyElement = document.getElementById("history");
  var btn12 = document.getElementById("btn12");
  var btn16 = document.getElementById("btn16");
  var btn20 = document.getElementById("btn20");
  var btn24 = document.getElementById("btn24");
  var btn1 = document.getElementById("btn1");

  var value = 0;
  var history = [];

  // Function to update the value and display it
  function updateValue() {
    valueElement.textContent = value;
  }

  // Function to update the history and display it
  function updateHistory() {
    historyElement.innerHTML = ""; // Clear the history list

    // Add each value in the history array as a list item
    for (var i = 0; i < history.length; i++) {
      var listItem = document.createElement("li");
      listItem.textContent = history[i];
      historyElement.appendChild(listItem);
    }
  }

  // Function to handle button click events
  function handleButtonClick(buttonValue) {
    value += buttonValue;
    history.push(buttonValue);
    updateValue();
    updateHistory();
  }

  // Add event listeners to the buttons
  btn12.addEventListener("click", function() {
    handleButtonClick(12);
  });

  btn20.addEventListener("click", function() {
    handleButtonClick(20);
  });

  btn16.addEventListener("click", function() {
    handleButtonClick(16);
  });

  btn24.addEventListener("click", function() {
    handleButtonClick(24);
  });

  btn1.addEventListener("click", function() {
    handleButtonClick(1);
  });
});
