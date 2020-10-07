(function(){

//CREATING HOTEL OBJECT AND WRITING OUT OFFER DETAILS

var hotel = {
    name: 'Park',
    roomRate: 240,
    discount: 15,
    offerPrice: function(){
        var offerRate = this.roomRate * ((100 - this.discount) / 100);
        return offerRate;
    }
};

var hotelName, roomRate, specialRate;
hotelName = document.getElementById("hotelName");
roomRate = document.getElementById("roomRate");
specialRate = document.getElementById("specialRate");

hotelName.textContent = hotel.name;
roomRate.textContent = "$" + hotel.roomRate.toFixed(2);
specialRate.textContent = "$" + hotel.offerPrice();
console.log("I am here");


})();