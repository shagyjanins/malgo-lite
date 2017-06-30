
var obj;

$.getJSON("./data_public/test.json", function (data) {
  obj = data;
});

$(document).ready(function () {
  var data_map = jQuery.map(obj, function (el, i) {
    return [[el['Symbol'], el['Series'], el['Date'], el['Prev Close'],
      el['Open Price'], el['High Price'], el['Low Price'], el['Last Price'],
      el['Close Price'], el['Average Price'], el['Total Traded Quantity'], el['Turnover'],
      el['No. of Trades'], el['Deliverable Qty'], el['% Dly Qt to Traded Qty']]];
  });
  $('#example').DataTable({
    data: data_map, columns: [
      {title: "Symbol"},
      {title: "Series"},
      {title: "Date"},
      {title: "Prev Close" },
      {title: "Open Price" },
      {title: "High Price" },
      {title: "Low Price" },
      {title: "Last Price" },
      {title: "Close Price" },
      {title: "Average Price" },
      {title: "Total Traded Quantity" },
      {title: "Turnover" },
      {title: "No. of Trades" },
      {title: "Deliverable Qty" },
      {title: "% Dly Qt to Traded Qty" }
    ]
  });
});




