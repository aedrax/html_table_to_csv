$(document).ready(function(){
    
    function table_to_csv($table, filename)
    {
        var result = "";
        var rows = $table.find('tr');
        $.each(rows, function(i, row) {
            var data = row.children;
            $.each(data, function(j, cell) {
                result += '"' + cell.textContent + '"'; 
                if(j < data.length - 1)
                {
                    result += ',';
                }
            });
            result += '\r\n';
        });
        var output = 'data:application/csv;charset=utf-8,' + encodeURIComponent(result);
        $(this).attr({
            'download': filename
                ,'href': output
        });
    }
    
    // This must be a hyperlink
    $("csv-download").click(function (event) {
        // var outputFile = 'export'
        var outputFile = window.prompt("What do you want to name your output file (Note: This won't have any effect on Safari)") || 'export';
        outputFile = outputFile.replace('.csv','') + '.csv'
         
        // CSV
        table_to_csv.apply(this, [$('#mytable'), outputFile]);
        
        // IF CSV, don't do event.preventDefault() or return false
        // We actually need this to be a typical hyperlink
    });

});