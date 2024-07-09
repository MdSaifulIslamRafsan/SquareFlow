// Define an asynchronous function to fetch car data
async function carsData () {
    const res = await fetch('/cars.json');
    const data = await res.json();
     // Call the displayCarData function, passing the cars array from the JSON data
   
    displayCarData (data?.cars);
    displaySpecialsCarsData(data?.cars);
}
carsData ();

// Define a function to display car data
function displayCarData (cars)  {
    const Tab = document.getElementById('Tab');
   
    Tab.innerHTML = ``;
    cars?.slice(0,8).forEach(car => {
        const carDiv = document.createElement('div');
        carDiv.innerHTML = `<div class="car_card">
        <div class="car_card_img_header">
            <img src=${car?.img} alt="" />
            <div class="flex-between absolute">
                <p class="${car?.remarks === 'Great Price' ? 'bg-green' : car?.remarks === 'Low Mileage' ? 'bg-blue' : ''}">${car?.remarks ? car?.remarks :  ''}</p>
                    <i class="fi fi-ss-circle-bookmark font-25"></i>
            </div>
        </div>
        <div class="p-10">
        
        <h3>${car?.make} - ${car?.year}</h3>
        <p>Model: ${car.model}</p>
       <div class="flex-between mt-10 text-center">
            <div>
            <i class="fi fi-br-tachometer"></i>
            <p>${car?.mileage} mile</p>
            </div>
            <div>
            <i class="fi fi-bs-gas-pump-alt"></i>
            <p>${car?.fuel_type}</p>
            </div>
            <div>
            <i class="fi fi-br-braille"></i>
            <p>${car?.transmission}</p>
            </div>
       </div>
       <div class="flex-between mt-10">
        <h4>$${car?.price}</h4>
         <a href="">View All <i class="fi fi-rs-arrow-up-right"></i></a>
       </div>
        </div>
        </div>`
        Tab.appendChild(carDiv)
    });
   
}


function displaySpecialsCarsData(cars){
    const specials_section_header = document.getElementById('specials_section_header');
    console.log(specials_section_header);
   
    specials_section_header.innerHTML = ``;
    cars?.slice(7,12).forEach(car => {
        const specialCarDiv = document.createElement('swiper-slide');
        specialCarDiv.innerHTML = `
        
          <div class="car_card">
        <div class="car_card_img_header">
            <img src=${car?.img} alt="" />
            <div class="flex-between absolute">
                <p class=" ${car?.remarks === 'Great Price' ? 'bg-green' : car?.remarks === 'Low Mileage' ? 'bg-blue' : ''}">${car?.remarks ? car?.remarks : ''}</p>
                    <i class="fi fi-ss-circle-bookmark font-25"></i>
            </div>
        </div>
        <div class="p-10">
        
        <h3>${car?.make} - ${car?.year}</h3>
        <p>Model: ${car.model}</p>
       <div class="flex-between mt-10 text-center">
            <div>
            <i class="fi fi-br-tachometer"></i>
            <p>${car?.mileage} mile</p>
            </div>
            <div>
            <i class="fi fi-bs-gas-pump-alt"></i>
            <p>${car?.fuel_type}</p>
            </div>
            <div>
            <i class="fi fi-br-braille"></i>
            <p>${car?.transmission}</p>
            </div>
       </div>
       <div class="flex-between mt-10">
        <h4>$${car?.price}</h4>
         <a href="">View All <i class="fi fi-rs-arrow-up-right"></i></a>
       </div>
        </div>
        </div>
       
        
       `
       specials_section_header.appendChild(specialCarDiv)
    });
}
  