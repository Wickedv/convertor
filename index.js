/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let z = document.getElementById("len")
let x = document.getElementById("vol")
let c = document.getElementById("ma")

let input = document.getElementById("numbers")

z.innerHTML=`<h3>0 meters = 0 feet
              | 0 feet = 0 meters`

x.innerHTML=`<h3>0 liters = 0 gallons
              | 0 gallons = 0 liters`
              
c.innerHTML=`<h3>0 kilograms = 0 pounds
              | 0 pounds = 0 kilograms`
              
abc.addEventListener("click", function()
{
let value = input.value

z.innerHTML=`<h3>${input.value} meters = ${meter_feet(input.value)} feet
              | ${input.value} feet = ${feet_meter(value)} meters`


x.innerHTML=`<h3>${input.value} liters = ${li_gal(input.value)} gallons
              | ${input.value} gallons = ${gal_li(value)} liters`
              
c.innerHTML=`<h3>${input.value} kilograms = ${kg_p(input.value)} pounds
              | ${input.value} pounds = ${p_kg(value)} kilograms`
              
})


function meter_feet(val)
{
     return val*3.281.toFixed(2)   
}

function feet_meter(val){
   return (val/3.281).toFixed(2)   
}

function li_gal(val){
    return (val*.264).toFixed(2)   
}

function gal_li(val){
    return (val/.264).toFixed(2)   
}

function kg_p(val){
    return (val*2.204).toFixed(2)   
}

function p_kg(val){
    return (val/2.204).toFixed(2)   
}
