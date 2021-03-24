// Start at top on refresh
$(document).ready(scrollToPage("home"));

//load initial random quote
changeQuote()

// change quote after every minute
var quoteRefreshTimer = quoteRefreshInterval()

// change quote when clicked
blockQuote.on("click", e => {

  clearInterval(quoteRefreshTimer)

  changeQuoteWithFade(100)

  globalThis.quoteRefreshTimer = quoteRefreshInterval()

})

// prevent double tap highlighting on quotes for a nicer feel
$('blockquote').mousedown(function(e){
  e.preventDefault()
})

// highlight quote on mouseover
$('#quote, #author').on('mouseover', function(){
  $('#quote, #author').css({
    color: "var(--nav-grey)"
  })
})

$('#quote, #author').on('mouseout', function(){
  $('#quote, #author').css({
    color: "var(--body-grey)"
  })
})

// reload page on nav logo click
$("#nav-logo").on("click", function(e){
  e.preventDefault();
  location.reload(true);
})

// current user time logic for greeting message
$.getJSON("http://worldtimeapi.org/api/ip", function(ip){
  const seconds = ip.unixtime
  const days = seconds/86400
  const current_hour = days % 1 * 24

  $("#heading-intro").text(function(){
    if (current_hour >= 4 && current_hour < 12) {
      var opening = "Good Morning"
    } else if (current_hour >= 12 && current_hour < 18) {
      var opening = "Good Afternoon"
    } else {
      var opening = "Good Evening"
    } return opening + ". My name is"
  })
})
