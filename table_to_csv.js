$(document).ready(function(){
    
    function table_to_csv($table, filename)
    {
        // The string of the CSV
        var result = "";
        // Get an array of rows from the table
        var rows = $table.find('tr');
        // For each of the rows in the array, do the following
        $.each(rows, function(i, row) {
            // Get all the data/header cells in the row and put them in an array
            var data = row.children;
            // For each data cell do the following
            $.each(data, function(j, cell) {
                // Append the text of the cell surrounded by double quotes
                result += '"' + cell.textContent + '"';
                // If it's not the last cell in the row, throw on a comma
                if(j < data.length - 1)
                {
                    result += ',';
                }
            });
            // At the end of each row, tag on a newline for good measure
            result += '\r\n';
        });
        // Encode the URI so the browser is still cool with it
        var output = 'data:application/csv;charset=utf-8,' + encodeURIComponent(result);
        //this just makes it a downloadable file
        $(this).attr({
            'download': filename
                ,'href': output
        });
    }
    
    // The class of the button must be csv-download
    $(".csv-download").click(function (event) {
        // replace #mytable with the name of the table
        // replace table_output with whatever you want to name the file
        table_to_csv.apply(this, [$('#mytable'), "table_output.csv"]);
    });

});
