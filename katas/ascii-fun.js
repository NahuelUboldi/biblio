function dot(n, m) {
let table = ""
for (let i = 0; i < m; i++) {
 table += drawLines(n) + "\n" + drawSpaces(n) + "\n";
 if (i=== m - 1) {table += drawLines(n)}
 }
 return table
}

const drawLines = (n) => {
 let line = "+";
 for (let i = 0; i < n; i++) {
  line += "---+"
 }
 return line;
}

const drawSpaces = (n) => {
 let spaces = "|"
 for (let i = 0; i < n; i++) {
  spaces += " o |"
 }
 return spaces;
}



console.log(dot(6,2));