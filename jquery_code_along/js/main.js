// PART 1 - Functions review
// 1. Write a function and name it addMagic
	// Inside the function, log "Magic!" to the console using console.log()



function addMagic(){
  // console.log("Magic!");
  // $("h1").fadeOut(5000);
  $("button").on("click", function(){
    // $("h1").fadeOut(5000);
    $("h1").text("I'm learning a new method");
    $("h2").css("background-color","#ffd700");
    $("img").attr("src","images/fun.jpg");
    $("h6").addClass("footer");
    $("h1").slideToggle(700);
  })
}

// 2. Call the addMagic function.
addMagic();
