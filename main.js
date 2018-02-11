// Array for Restaurant Objects:
var restaurantList = [];

// Use this in the UPDATE() and showRestaurantInfo():
var restaurantIndex = null;

var Restaurant = function(name, add1, add2, city, state, zip, number, website) {
  this.name = name;
  this.address1 = add1;
  this.address2 = add2;
  this.city = city;
  this.state = state;
  this.zipcode = zip;
  this.phoneNumber = number;
  this.website = website;
}

// restaurantList.push(new Restaurant("name", "add1", "add2", "city", "state", zip, "number", "website"))

restaurantList.push(new Restaurant("Thai Dishes on Broadway", "123 Broadway", "", "Santa Monica", "CA", 90401, "(310) 394-6189", "thaidishessantamonica.com"));

restaurantList.push(new Restaurant("BCD Tofu House", "3575 Wilshire Blvd", "", "Los Angeles", "CA", 90010, "(213) 382-6677", "bcdtofu.com"));

restaurantList.push(new Restaurant("Archi’s Thai Kitchen", "6360 W Flamingo Rd", "", "Las Vegas", "NV", 89103, "(702) 880-5550", "archithai.com"));

restaurantList.push(new Restaurant("Pinoy Pinay Filipino Fastfood", "11900 South St", "#107-108", "Cerritos", "CA", 90703, "(562) 402-6682", "pinoypinayrestaurant.com"));

restaurantList.push(new Restaurant("Blaze Pizza", "103 W Imperial Hwy", "", "Brea", "CA", 92821, "(714) 783-9843", "blazepizza.com"));

restaurantList.push(new Restaurant("Panda Express", "101 W. Imperial Hwy", "Unit G", "Brea", "CA", 92821, "(714) 674-0036", "pandaexpress.com"));

restaurantList.push(new Restaurant("Olive Pit Grill", "2445 E. Imperial Hwy", "Suite F", "Brea", "CA", 92821, "(714) 529-3200", "olivepitgrill.com"));

restaurantList.push(new Restaurant("The Cheesecake Factory", "120 Brea Mall Way", "", "Brea", "CA", "92821", "(714) 255-0115", "thecheesecakefactory.com"))

restaurantList.push(new Restaurant("Kula Revolving Sushi Bar", "1065 Brea Mall", "Ste 2050A", "Brea", "CA", 92821, "(714) 582-5898", "kurausa.com"))

restaurantList.push(new Restaurant("Charleys Philly Steaks", "1065 Brea Mall", "Food Court", "Brea", "CA", 92821, "(714) 674-0115", "charleys.com"))

restaurantList.push(new Restaurant("California Fish Grill", "419 S Associated Rd", "", "Brea", "CA", 92821, "(714) 482-2151", "cafishgrill.com"))

// Hiding the missing name message:
$("#missing-name").hide()

// Hiding the save button:
$("#save-button").hide()

//************************************ CRUD functionalities ************************************

//******************************* SUBMIT Button: *******************************
// Will show "fill in missing name" if input field name is submitted blank:
$("#submit-button").click(function() {
  console.log("SUBMIT Button");
  console.log(restaurantList);
  if( $("name").val() == " ") {
    $("#missing-name").show()
  }
  else {
    $("#missing-name").hide()

//CREATE new Restaurant:
  restaurantList.unshift(new Restaurant(
    $("#name").val(),
    $("#address1").val(),
    $("#address2").val(),
    $("#city").val(),
    $("#state").val(),
    $("#zipcode").val(),
    $("#phoneNumber").val(),
    $("#website").val()
  ))

// Emptying out the input fields:
    $("#name").val(" ");
    $("#address1").val(" ");
    $("#address2").val(" ");
    $("#city").val(" ");
    $("#state").val(" ");
    $("#zipcode").val(" ");
    $("#phoneNumber").val(" ");
    $("#website").val(" ");

    showRestaurantInfo();
  }
})

//******************************* SAVE Button: *******************************
$("save-button").click(function() {
  console.log("SAVE Button");
  if( $("#name").val() == " " ) {
    $("#missing-name").show()
  }
  else {
    $("#missing-name").hide()

// Updating the Restaurant info:
    restaurantList.splice(restaurantIndex, 1, new Restaurant(
      $("#name").val(),
      $("#address1").val(),
      $("#address2").val(),
      $("#city").val(),
      $("#state").val(),
      $("#zipcode").val(),
      $("#phoneNumber").val(),
      $("#website").val()
    ))

    //Hide the UPDATE button AND Show the SUBMIT button:
    $("#save-button").hide();
    $("#submit-button").show();

    //Clearing out the input fields after updating the Restaurant info:
    $("#name").val(" ")
    $("#address1").val(" ")
    $("#address2").val(" ")
    $("#city").val(" ")
    $("#state").val(" ")
    $("#zipcode").val(" ")
    $("#phoneNumber").val(" ")
    $("#website").val(" ")

    showRestaurantInfo();
    console.log(restaurantList);
  }
})



// showRestaurantInfo() = shows the list of restaurants in the view:
var showRestaurantInfo = function() {
  $(".restaurant-list-content").html("");

// Restaurant heading:
  // var $restaurantHeading = $("<div class='restaurants-heading'></div>");
  // var $restaurantTitle = $("<h1 class='restaurant-title'>Favorite Restaurants</h1>");

// Restaurant Info:
  var $restaurantContent = $(".restaurant-list-content");

  for (var i = 0; i < restaurantList.length; i++) {
    // Instantiating the HTML element in the DOM with jQuery:
    var $restaurantInfo = $("<div class='restaurant-info col-md-3'></div>")
    var $restaurantName = $("<h2 class='col-md-12 text-center'>" + restaurantList[i].name + "</h2>")
    var $restaurantAddress1 = $("<p class='col-md-12'><span>Address 1: </span>" + restaurantList[i].address1 + "</p>")
    var $restaurantAddress2 = $("<p class='col-md-12'><span>Address 2: </span>" + restaurantList[i].address2 + "</p>")
    var $restaurantCity = $("<p class='col-md-12'><span>City: </span>" + restaurantList[i].city + "</p>")
    var $restaurantState = $("<p class='col-md-12'><span>State: </span>" + restaurantList[i].state + "</p>")
    var $restaurantZipcode = $("<p class='col-md-12'><span>Zipcode: </span>" + restaurantList[i].zipcode + "</p>")
    var $restaurantPhoneNumber = $("<p class='col-md-12'><span>Phone Number: </span>"  + restaurantList[i].phoneNumber + "</p>")
    var $restaurantWebsite = $("<p class='col-md-12'><span>Website: </span>" + restaurantList[i].website + "</p>")

    // UPDATE And DELETE Buttons:
    var $buttonsUpdateAndDelete = $("<div class='buttons-update-delete col-md-12'></div>")
    var $update = $("<button type='button' class='btn btn-info col-md-4 pull-left' id='update-button' data=" + i + "> Update</button>")
    var $delete = $("<button type='button' class='btn btn-danger col-md-4 pull-right' id='delete-button' data=" + i + "> Delete</button>")

    // Building the restaurant Content to display to the view:
    // $restaurantHeading.append($restaurantTitle);

    $restaurantInfo.append($restaurantName);
    $restaurantInfo.append($restaurantAddress1);
    $restaurantInfo.append($restaurantAddress2);
    $restaurantInfo.append($restaurantCity);
    $restaurantInfo.append($restaurantState);
    $restaurantInfo.append($restaurantZipcode);
    $restaurantInfo.append($restaurantPhoneNumber);
    $restaurantInfo.append($restaurantWebsite);

    $buttonsUpdateAndDelete.append($update);
    $buttonsUpdateAndDelete.append($delete);
    $restaurantInfo.append($buttonsUpdateAndDelete);

    // $restaurantContent.append($restaurantHeading);
    $restaurantContent.append($restaurantInfo);
    }
    //****************************** UPDATE Button ******************************
    $("#update-button").click(function() {
      console.log("UPDATE Button");
      $("#save-button").show()      //Show the UPDATE button
      $("#submit-button").hide()      //Hide the SUBMIT button

      restaurantIndex = $(this).attr("data");
      $("#name").val(restaurantList[restaurantIndex].name)
      $("#address1").val(restaurantList[restaurantIndex].address1)
      $("#address2").val(restaurantList[restaurantIndex].address2)
      $("#city").val(restaurantList[restaurantIndex].city)
      $("#state").val(restaurantList[restaurantIndex].state)
      $("#zipcode").val(restaurantList[restaurantIndex].zipcode)
      $("#phoneNumber").val(restaurantList[restaurantIndex].phoneNumber)
      $("#website").val(restaurantList[restaurantIndex].website)
    })

    //****************************** DELETE Button ******************************
    $("#delete-button").click(function() {
      console.log("DELETE Button");
      console.log(restaurantList);
      console.log(restaurantIndex = $(this).attr("data"))
      restaurantList.splice($(this).attr("data"), 1)

      showRestaurantInfo()
    })
}
showRestaurantInfo()
