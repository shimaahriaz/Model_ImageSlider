const itemsImage = Array.from(document.querySelectorAll(".items img"));
console.log(itemsImage)
const lightSliderContainer = document.getElementById("lightslidercontainer");
const lightItem = document.querySelector(".lightitem");
const arrowRight = document.querySelector(".arrow-right")
const arrowLeft = document.querySelector(".arrow-left")
const xMark = document.querySelector(".xmark")


let currentindex;
itemsImage.forEach(ele =>{
    ele.addEventListener("click", ()=>{
        let getImagSrc = ele.getAttribute("src");
        currentindex = itemsImage.indexOf(ele);
        console.log(currentindex);
        lightSliderContainer.classList.replace("d-none", "d-flex");
        lightItem.style.backgroundImage = `url(${getImagSrc})`;
        
    })
})

arrowRight.addEventListener("click", nextSlider);
arrowLeft.addEventListener("click", prevSlider)
xMark.addEventListener("click", close)


function nextSlider(e){
    currentindex++;
    if(currentindex == itemsImage.length){
        currentindex = 0;
    }
    let currentImag = itemsImage[currentindex].getAttribute("src")
    lightItem.style.backgroundImage = `url(${currentImag})`;
}

function prevSlider(e){
    currentindex--;
    if(currentindex < 0){
        currentindex = itemsImage.length -1;
    }
    let currentImag = itemsImage[currentindex].getAttribute("src")
    lightItem.style.backgroundImage = `url(${currentImag})`;
}

function close(){
    lightSliderContainer.classList.replace("d-flex", "d-none");
}

document.addEventListener("keyup", function(event){
    if(lightSliderContainer.classList.contains("d-flex")){
       if(event.key == "ArrowRight"){
            nextSlider();
          }else if(event.key == "ArrowLeft"){
            prevSlider()
          }else if(event.key == "Escape"){
            close()
          }
    }
});
 
  
