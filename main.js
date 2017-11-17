var restaurantId = null;

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
