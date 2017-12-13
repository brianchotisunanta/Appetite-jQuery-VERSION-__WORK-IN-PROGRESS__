var restaurantId = null;

var indexOfRestaurantList = null;

var Restaurant = function(id, name, address1, address2, city, state, zipcode,phoneNumber, website) {
  this.id = id;
  this.name = name;
  this.address1 = address1;
  this.address2 = address2;
  this.city = city;
  this.state = state;
  this.zipcode = zipcode;
  this.phoneNumber = phoneNumber;
  this.website = website;
}

var restaurantList = [];

// restaurantList.push(new Restaurant(restaurantId++, "name", "address1", "address2", "city", "state", zipcode, "phoneNumber", "website"))

restaurantList.push(new Restaurant(restaurantId++, "Thai Dishes on Broadway", "123 Broadway", "", "Santa Monica", "CA", 90401, "(310) 394-6189", "thaidishessantamonica.com"));

restaurantList.push(new Restaurant(restaurantId++, "BCD Tofu House", "3575 Wilshire Blvd", "", "Los Angeles", "CA", 90010, "(213) 382-6677", "bcdtofu.com"));

restaurantList.push(new Restaurant(restaurantId++, "Archi’s Thai Kitchen", "6360 W Flamingo Rd", "", "Las Vegas", "NV", 89103, "(702) 880-5550", "archithai.com"));

restaurantList.push(new Restaurant(restaurantId++, "Pinoy Pinay Filipino Fastfood", "11900 South St", "#107-108", "Cerritos", "CA", 90703, "(562) 402-6682", "pinoypinayrestaurant.com"));

restaurantList.push(new Restaurant(restaurantId++, "Blaze Pizza", "103 W Imperial Hwy", "", "Brea", "CA", 92821, "(714) 783-9843", "blazepizza.com"));

restaurantList.push(new Restaurant(restaurantId++, "Panda Express", "101 W. Imperial Hwy", "Unit G", "Brea", "CA", 92821, "(714) 674-0036", "pandaexpress.com"));

restaurantList.push(new Restaurant(restaurantId++, "Olive Pit Grill", "2445 E. Imperial Hwy", "Suite F", "Brea", "CA", 92821, "(714) 529-3200", "olivepitgrill.com"));

restaurantList.push(new Restaurant(restaurantId++, "The Cheesecake Factory", "120 Brea Mall Way", "", "Brea", "CA", "92821", "(714) 255-0115", "thecheesecakefactory.com"))

restaurantList.push(new Restaurant(restaurantId++, "Kula Revolving Sushi Bar", "1065 Brea Mall", "Ste 2050A", "Brea", "CA", 92821, "(714) 582-5898", "kurausa.com"))

restaurantList.push(new Restaurant(restaurantId++, "Charleys Philly Steaks", "1065 Brea Mall", "Food Court", "Brea", "CA", 92821, "(714) 674-0115", "charleys.com"))

restaurantList.push(new Restaurant(restaurantId++, "California Fish Grill", "419 S Associated Rd", "", "Brea", "CA", 92821, "(714) 482-2151", "cafishgrill.com"))

// Hiding the missing name message:
$("#missing-name").hide()

// Hiding the save button:
$("#save-button").hide()

//************************************ CRUD functionalities ************************************

//******************************* SUBMIT Button: *******************************
// Will show "fill in missing name" if input field name is submitted blank:
$("#submit-button").click(function() {
  if( $("name").val() == " ") {
    $("#missing-name").show()
  }
  else {
    $("#missing-name").hide()

//CREATE new Restaurant:
  restaurantList.push(new Restaurant(
    $("#name").val(),
    $("#address1").
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

//******************************* UPDATE Button: *******************************
$("update-button").click(function() {
  if( $("#name").val() == " " ) {
    $("#missing-name").show()
  }
  else {
    $("#missing-name").hide()

// Updating the Restaurant info:
    restaurantList.splice(indexOfRestaurantList, 1, new Restaurant(
      $("#name").val(),
      $("#address1").val(),
      $("#address2").val(),
      $("#city").val(),
      $("#state").val(),
      $("#zipcode").val(),
      $("#phoneNumber").val(),
      $("#website").val(),
    ))

    //Hide the UPDATE button AND Show the SUBMIT button:
    $("#update-button").hide();
    $("#submit-button").show();

    //Clearing out the input fields after updating the Restaurant info:
    $("#name").val(" "):
    $("#address1").val(" "):
    $("#address2").val(" "):
    $("#city").val(" "):
    $("#state").val(" "):
    $("#zipcode").val(" "):
    $("#phoneNumber").val(" "):
    $("#website").val(" "):

    showRestaurantInfo();
  }
})



// showRestaurantInfo() = shows the list of restaurants in the view:
var showRestaurantInfo = function() {
  $(".restaurant-list-content col-md-12").html(" ")

// Restaurant heading:
  var $restaurantHeading = $("<div class="restaurants-heading text-center"></div>");
  var $restaurantTitle = $("<h1 class="restaurant-title">Favorite Restaurants</h1>");

// Restaurant Info:
  var $restaurantContent = $(".restaurant-list-content");

  for (var i = 0; i < restaurantList.length; i++) {
    // Instantiating the HTML element in the DOM with jQuery:
    var $restaurantInfo = $("<div class="restaurant-info clearfix col-md-6 col-md-offset-3"</div>");
    var $restaurantId = $("<h3 class="col-md-12" id="restaurant-id"><span>id: </span>{{restaurantList[i].id}}</h3>");
    var $restaurantName = $("<h2 class="col-md-12">{{restaurantList[i].name}} </h2>");
    var $restaurantAddress1 = $("<p class="col-md-12"><span>Address 1: </span>{{restaurantList[i].address1}}</p>");
    var $restaurantAddress2 = $("<p class="col-md-12"><span>Address 2: </span>{{restaurantList[i].address2}}</p>");
    var $restaurantCity = $("<p class="col-md-12"><span>City: </span>{{restaurantList[i].city}}</p>");
    var $restaurantState = $("<p class="col-md-12"><span>State: </span>{{restaurantList[i].state}}</p>");
    var $restaurantZipcode = $("<p class="col-md-12"><span>Zipcode: </span>{{restaurantList[i].zipcode}}</p>");
    var $restaurantPhoneNumber = $("<p class="col-md-12"><span>Phone Number: </span> {{restaurantList[i].phoneNumber}}</p>");
    var $restaurantWebsite = $("<p class="col-md-12"><span>Website: </span>{{restaurantList[i].website}}</p>");

    // UPDATE And DELETE Buttons:
    var $buttonsUpdateAndDelete = $("<div class="buttons-update-delete col-md-12"></div>")
    var $update = $("<button type="button" class='btn btn-info col-md-4' data=" + i + "> Update</button>")
    var $delete = $("<button type="button" class='btn btn-info col-md-4' data=" + i + "> Delete</button>")

    // Building the restaurant Content to display to the view:
    $restaurantHeading.append($restaurantTitle);

    $restaurantInfo.append($restaurantId);
    $restaurantInfo.append($restaurantName);
    $restaurantInfo.append($restaurantAddress1)
    $restaurantInfo.append($restaurantAddress2)
    $restaurantInfo.append($restaurantCity);
    $restaurantInfo.append($restaurantState);
    $restaurantInfo.append($restaurantZipcode);
    $restaurantInfo.append($restaurantPhoneNumber);
    $restaurantInfo.append($restaurantWebsite);

    $buttonsUpdateAndDelete.append($update);
    $buttonsUpdateAndDelete.append($delete);
    $restaurantInfo.append($buttonsUpdateAndDelete);

    $restaurantContent.append($restaurantHeading);
    $restaurantContent.append($restaurantInfo);
  }

















}
