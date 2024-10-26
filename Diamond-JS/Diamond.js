var n = parseInt(prompt("Choose number of rows: "), 10);

for (let i=0; i<n-1; i++){
    row="";
    for (let j=i; j<n-1; j++){
        row +=" ";
    }
    for (let j=0; j < i+1; j++){
        row += "*";
    }
    for (let j=0; j<i; j++){
        row+= "*";
    }
    console.log(row);
}

for (let i=0; i<n; i++){
    row="";
    for(let j=0; j<i; j++){
        row += " ";  
    }
    for (let j=i; j<n; j++){
        row += "*";
    }
    for (let j=i; j<n-1; j++){
        row += "*";
    }
    console.log(row);
}
