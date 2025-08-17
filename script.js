function createTable() {
    //Write your code here
	let rn=prompt("number of rows");
	let cn = prompt("number of columns");

	rn = parseInt(rn);
	cn = parseInt(cn);

	if(isNaN(rn) || isNaN(cn)){
		alert("please enter valid numbers!");
		return;
	}
	if(rn<=0 || cn<=0){
		alert("rows and columns must be greater than 0!");
		return;
	}

	const table = document.getElementById("myTable");
	table.innerHTML = "";

	for(let i=0;i<rn;i++){
		const row = document.createElement("tr");
		for(let j=0;j<cn;j++){
			const cell = document.createElement("td");
			cell.textContent = `Row-${i}  Column-${j}`;
			row.appendChild(cell);
		}
		table.appendChild(row);
	}
	
  
}

