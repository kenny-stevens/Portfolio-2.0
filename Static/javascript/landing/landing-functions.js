// ================= Scroll logic (including navs) =================

// Function to find the distance from the top to the top of any page
function TopOfPage(page){
  return document.querySelector("#" + page + "-page").offsetTop
}

// function to determine the distance of a page from the top of the website
function page_range(page){
  return TopOfPage(page) - window.innerHeight/2
}

// array of each page distance
var pages = [
  page_range("home"),
  page_range("aboutme"),
  page_range("skills"),
  page_range("projects"),
  page_range("contact")
]

// Function to scroll to a certain page
function scrollToPage(page){

  const page_distance = TopOfPage(page)

    // Code to animate scrolling in a certain amount of seconds
		$('html, body').animate({
			scrollTop: page_distance
		}, 700
		)
}

// function to find the current page
function current_page_finder(pages, current_distance) {
  for (i = pages.length - 1; i >= 0; i--){
    if (current_distance > pages[i]) {
      return i
    } else {
      continue;
    }
  }
}

// vaiable that determines the initial current page
var current_page = current_page_finder(pages, window.scrollY);


// scoll event listener to change page and nav animations on scroll
$(document).scroll(function () {
  var current_page = current_page_finder(pages, window.scrollY);
  $(".nav-item.menu a").slice(1).each( function(){
    $(this).toggleClass('is-selected', current_page == $(".nav-item.menu a").slice(1).index($(this)))
  })
})

// scroll to page on nav icon click
$.each($(".nav-item.menu a").slice(1),function(){
  $(this).on('click', function(e){

    // prevent nav button from using href
    e.preventDefault()
    var specific_page = $(this).closest('li').attr('id')

    scrollToPage(specific_page)

  })
})

// toggle original nav button
$(".nav-item.menu a").slice(1).each( e => {
  $(this).toggleClass('is-selected', current_page == $(".nav-item.menu a").slice(1).index($(this)))
})

// ===================== Quotes logic ==============================
var blockQuote = $('#quote, #author')

function randomQuoteIndex() {
  return Math.floor(Math.random() * quotes.length)
}

function changeQuote() {

  newQuoteIndex = randomQuoteIndex()

  document.querySelector("#quote").textContent = "\"" + quotes[newQuoteIndex]["quote"] + "\""
  document.querySelector("#author").textContent = quotes[newQuoteIndex]["author"]
}

function changeQuoteWithFade(speed = 'slow'){
  blockQuote.fadeOut(speed, e=>{
    changeQuote()
  })

  blockQuote.fadeIn(speed)
}

function quoteRefreshInterval(seconds = 60){

  var quoteRefreshTimer = setInterval( event =>
  changeQuoteWithFade(), seconds * 1000)

  return quoteRefreshTimer
}
// =================== splash/intro logic ======================

// function to hide home page (or section) contents
function hide_homepage() {

  // hide site contents
  menu_logo_left.hide()

  // hide home elements
  $('#heading-intro').hide()
  $('#heading').hide()
  $('#subheading').hide()
  $('.blockquote').hide()
}

// function to reveal hopepage elements in timed intervals
function reveal_homepage() {

  setTimeout(function(){
    $('#heading-intro').fadeIn("")
  }, 800)

  setTimeout(function(){
    $('#heading').fadeIn(2000)
  }, 1300)

  setTimeout(function(){
    $('#subheading').fadeIn()
  }, 2000)

  setTimeout(function(){
    $('.blockquote').fadeIn()
  }, 2800)

  // Top nav slide from the top, behind the logo


  // Header content animate in with aos


  // Quote fade in

  // Bottom nav, fade in

  // Bottom nav slide from the bottom

  //left logo piece fade in
  setTimeout(function(){
    menu_logo_left.fadeIn("slow")
  }, 4100)

}

// splash variables
let splash = $(".splash")
let splash_pieces = $(".splash-logo")
let left_piece = $(".splash-logo#left")
let right_piece = $(".splash-logo#right")
let menu_logo_left = $('#Artwork_1 path#left')

hide_homepage()

// splash intro js
window.addEventListener('load', function(){

  setTimeout(function(){

    // Bring in splash logo piece
    $.each(splash_pieces, function(){
      splash_pieces.animate({
        top: "50%",
        opacity: 1
      }, 1000)
    })

    setTimeout(function(){

      // animate left piece out
      right_piece.animate({top: "0%", opacity: "0"})

      // animate right piece out
      left_piece.animate({"top": "100%", "opacity": "0"})

      //add scrolling
      $('body').css({"overflow": "visible"})

    }, 2000)

    setTimeout(function(){
      $(".splash-logo svg").hide()
      splash.animate({top: "-100vh"})
      reveal_homepage()

    }, 2300)

  }, 500)
})

  // hide navs


  //==============

  // Quote object
    // .change()
    // .changewithFade()

    // .refreshTimer.start()
    // .refreshTimer.stop()
    // .refreshTimer.reset()



  //Page class

    //Page objects

      //Top Page Attribute

      // Page.Next()

      //navbutton object

        //selected selected area

    //Scroll to page


      //Page height

//SplashEvents class
  // Splash Event
  // Event.next()
