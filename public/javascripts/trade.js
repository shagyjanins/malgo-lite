function tradeIt(txt) {
  var symbol = document.getElementById("symbol").value.toUpperCase();
  var target_price = document.getElementById("target-price").value;
  var stop_loss = document.getElementById("stop-loss").value;
  var quantity = document.getElementById("order-quantity").value;

  KiteConnect.ready(function () {
    var kite1 = new KiteConnect("8jfyed7jyimgbf1t");

    console.log(txt + " for " + symbol);

    kite1.add({
      "exchange": "NSE",
      "tradingsymbol": symbol,
      "quantity": quantity,
      "transaction_type": "SELL",
      "order_type": "MARKET",
      "product": "MIS"
    });
    kite1.add({
      "exchange": "NSE",
      "tradingsymbol": symbol,
      "quantity": quantity,
      "transaction_type": "BUY",
      "order_type": "LIMIT",
      "price": target_price,
      "product": "MIS"
    });
    kite1.add({
      "exchange": "NSE",
      "tradingsymbol": symbol,
      "quantity": quantity,
      "order_type": "SL-M",
      "transaction_type": "BUY",
      "trigger_price": stop_loss,
      "price": stop_loss,
      "product": "MIS"
    });
    kite1.finished(function (status, request_token) {
      alert("Finished. Status is " + status);
    });
    kite1.link("#trademe"); // linking button here
  });
  $('#trademe').trigger('click');
}
