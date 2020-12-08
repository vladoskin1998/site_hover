//////////////////AnimationNavBar

let navBar = document.getElementsByClassName('heder__link')


    for(let i = 0; i < navBar.length; i++){
        navBar[i].addEventListener("mouseover", function( event ) {
            navBar[i].insertAdjacentHTML('beforeend',
            '<div  id = "underline" style = "position:absolute; bottom: -3px; left: -4px; width:15px; height:1px; background: #0300ff;"></div> ');
        })

        navBar[i].addEventListener("mouseout", function( event ) {
            document.getElementById('underline').remove();
        }) 
    }

//////////////////////////// AnimationScroll

let elScroll = document.getElementsByClassName('scroll__circus');
let scrollTouch = document.getElementsByClassName('scroll__touch');
let startfieldScroll = document.getElementById('scroll__item').getBoundingClientRect().top;
let heightBlockScroll = document.getElementById('scroll__item').getBoundingClientRect().bottom - startfieldScroll;

let stateBigCircle = 0; 
let stepOnePixel = 2;
let step = 20;

let linkPosition = [
    'headId',
    'advantageId',
    'modeId',
    'forwhomId'];


let timer = 0;
 
function animationScroll(position,indexDirection){
   
     timer = timer + (indexDirection * stepOnePixel);
     stateBigCircle = position;

        for(let index = 0; index < elScroll.length; index++){
            elScroll[index].style = `top: ${ (heightBlockScroll + (elScroll[index].getBoundingClientRect().top - startfieldScroll) + indexDirection*stepOnePixel)%heightBlockScroll}px;`
        }
        
        if(timer === step*position ) return location.href = `#${linkPosition[stateBigCircle]}`;
        else setTimeout(() => animationScroll(position,indexDirection), 20);
}


for(let i = 0; i < elScroll.length; i++){
    elScroll[i].style = `top: ${(step*i)}px;`;
    scrollTouch[i].style = `top: ${(step*i)}px;`;
}

for(let position = 0; position < scrollTouch.length; position++){
    scrollTouch[position].addEventListener("click", function(){
                let indexDirection;
                    if(stateBigCircle < position) indexDirection = 1;
                    else if (stateBigCircle > position) indexDirection = -1;
                    else return 0;
                        setTimeout(() => animationScroll(position,indexDirection),20);          
            }
        )
}




//////////////////slider


let slider = document.getElementsByClassName('advantage__colorItem')
let styleLine = '<div  id = "sliderLine" style = "position:absolute; top: 30px; left: 6px; width:5px; height:50px; background-image: url(images/sliderImg.png);"></div> '
    
    slider[4].insertAdjacentHTML('beforeend',styleLine);

        for(let i = 0; i < slider.length; i++){
            slider[i].addEventListener("click", function(){
                document.getElementById('sliderLine').remove();
                    slider[i].insertAdjacentHTML('beforeend', styleLine);
            })
        }


