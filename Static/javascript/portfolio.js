// Function to find the distance from the top to the top of any page
function page_distance_finder(page){
  return document.querySelector("#" + page + "-page").offsetTop
}

// Function to find the range that is classified as the current page

function page_range(page){
  return page_distance_finder(page) - window.innerHeight/2
}


var pages = [
        page_range("home"),
        page_range("aboutme"),
        page_range("projects"),
        page_range("contact")
        ]


// Function to scroll to a certain scroll to a certain scroll to a certain page
function scrollToPage(page){

  const page_distance = page_distance_finder(page)

    // Code to animate scrolling in a certain amount of seconds
		$('html, body').animate({
			scrollTop: page_distance
		}, 700
		)
}

document.querySelectorAll(".nav-item.menu").forEach(menu_button => {
  menu_button.addEventListener('click', event => {
    event.preventDefault()
    var specific_page = menu_button.id

    // global

    scrollToPage(specific_page)

  })
})

// Start at top on refresh
$(document).ready(function(){
    $(this).scrollTop(0);
});

var current_page = current_page_finder(pages, window.scrollY);
$(".nav-item.menu a").each( function(){
  $(this).toggleClass('is-selected', current_page == $(".nav-item.menu a").index($(this)))
})


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


$(function () {
  $(document).scroll(function () {

    var current_page = current_page_finder(pages, window.scrollY);
    $(".nav-item.menu a").each( function(){
      $(this).toggleClass('is-selected', current_page == $(".nav-item.menu a").index($(this)))
    })

  })
})
