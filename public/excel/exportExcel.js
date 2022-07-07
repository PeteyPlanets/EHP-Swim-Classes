function exportData() {
  /* Get the HTML data using Element by Id */
  var table = document.getElementById("tblStocks");

  /* Declaring array variable */
  var rows = [];

  //iterate through rows of table
  for (var i = 0, row; (row = table.rows[i]); i++) {
    //Get each cell value/column from the row
    column1 = row.cells[0].innerText;
    column2 = row.cells[1].innerText;

    rows.push([column1, column2]);
  }
  csvContent = "data:text/csv;charset=utf-8,";
  /* add the column delimiter as comma(,) and each row splitted by new line character (\n) */
  rows.forEach(function (rowArray) {
    row = rowArray.join(",");
    csvContent += row + "\r\n";
  });

  /* create a hidden <a> DOM node and set its download attribute */
  var encodedUri = encodeURI(csvContent);
  var link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "Email_List.csv");
  document.body.appendChild(link);
  /* download the data file named "Stock_Price_Report.csv" */
  link.click();
}
