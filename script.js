function createTable() {
  // Prompt user for rows and columns
  let rn = prompt("Input number of rows");
  let cn = prompt("Input number of columns");

  // Convert to integers
  rn = parseInt(rn);
  cn = parseInt(cn);

  // Validate input
  if (isNaN(rn) || isNaN(cn) || rn <= 0 || cn <= 0) {
    alert("Invalid input! Please enter positive numbers.");
    return;
  }

  // Get table and clear previous content
  const table = document.getElementById("myTable");
  table.innerHTML = "";

  // Create table dynamically
  for (let i = 0; i < rn; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < cn; j++) {
      const cell = document.createElement("td");
      cell.textContent = `Row-${i} Column-${j}`;
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
}

