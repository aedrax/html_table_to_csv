# HTML Table to CSV

## README

This will let you generate a CSV file based on the information from an HTML table element. After I've had to rewrite the same code to generate a CSV file from html table data the third time in my life , I've decided to actually store it somewhere! It is inspired by [this guy's](https://gist.github.com/adilapapaya/9787842) version but not enough to fork it and this way is significantly faster. 

## USAGE

Just make sure to include jQuery of course and create some button that has a class of 'csv-download'
You will want to change line 32 and replace #mytable with the id of your table

```
table_to_csv.apply(this, [$('#mytable'), outputFile]);
```


