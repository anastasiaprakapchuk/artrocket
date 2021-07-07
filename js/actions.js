"use strict";
window.onload=init;


function init (){
    
    // Запуск функций, таймеров, обработчиков событий:

    //1.запуск таймера для header:
    let timerId=setInterval(updateFon,5000);

    //2.добавляем обработчик наведения мыши на картинку в class='about_us_person':
    let imgsAboutUs=document.getElementsByClassName('about_us_person');
    for(let i=0;i<imgsAboutUs.length;i++){
        imgsAboutUs[i].addEventListener('mouseenter',mouseenterAboutUs);
    }

    //3.добавляем обработчик клика правой кнопки мыши на стрелки вперед-назад в class='result':
    let resultPrev=document.querySelector('.result .result_prev');
    let resultNext=document.querySelector('.result .result_next');
    resultPrev.addEventListener('click',clickResultPrev);
    resultNext.addEventListener('click',clickResultNext);

    //4. добавляем обработчик клика на стрелки вверх-вниз для фона:
    let headerUp=document.getElementsByClassName('header_up')[0];
    let headerDown=document.getElementsByClassName('header_down')[0];
    headerUp.addEventListener('click',updateFonClickUp);
    headerDown.addEventListener('click',updateFonClickDown);

    //5. добавляем обработчик scroll для различных элементов:
    showVisibleForm();
    showVisibleSharpener();
    showVisiblePen();
    showVisiblePenBlack();
    showVisibleBallon();
    showVisibleBrush();
    showVisibleBrush1();
    showVisibleBrush2();
    showVisibleWaterColors();
    showVisiblePencils();

    window.addEventListener('scroll',showVisibleForm);
    window.addEventListener('scroll',showVisibleSharpener);
    window.addEventListener('scroll',showVisiblePen);
    window.addEventListener('scroll',showVisiblePenBlack);
    window.addEventListener('scroll',showVisibleBallon);
    window.addEventListener('scroll',showVisibleBrush);
    window.addEventListener('scroll',showVisibleBrush1);
    window.addEventListener('scroll',showVisibleBrush2);
    window.addEventListener('scroll',showVisibleWaterColors);
    window.addEventListener('scroll',showVisiblePencils);

    //6.Работа с баром (мобильная версия)
    let bars=document.querySelector('.header_content-inner .bars');
    bars.addEventListener('click',clickBars);

    //7.Работа с палитрой (мобильная версия)
    let excellenceСolorsNext=document.querySelector('.excellence .result_next');
    let excellenceСolorsPrev=document.querySelector('.excellence .result_prev');
    excellenceСolorsNext.addEventListener('click',clickExcellenceСolorsNext);
    excellenceСolorsPrev.addEventListener('click',clickExcellenceСolorsPrev);

    //8.Обработчик при нажатии на кнопку 'заказать'
    let footer=document.getElementById('footer');
    let buttonOrders=document.getElementsByClassName('button_order');
    for(let i=0;i<buttonOrders.length;i++){
        buttonOrders[i].addEventListener('click', clickButtonOrder);
    }

    //----------------------------
    
    // Описание функций:

    //1.таймер для header:
    function updateFon() {
        let header=document.getElementById('header');
        let imgPerson=document.getElementById('img_person');
        let button=header.querySelector('header .description_text .button_order');
        let buttonA=header.querySelector('.menu .button_order a');
        let namePerson=header.querySelector('.header_vertical_text');
        let color_orange='rgb(255, 102, 51)';
        let color_blue='rgb(29, 96, 196)';
        let color_pink='rgb(238, 81, 111)';
        
        switch(header.style.backgroundColor){
            case(color_orange)://оранжевый 
            header.style.backgroundColor=color_blue;//синий
            header.style.transitionDuration='1s';
            imgPerson.src='img/man.png';            
            imgPerson.style.transitionDuration='.5s';
            imgPerson.style.width='105%';
            button.style.backgroundColor=color_orange; 
            button.style.transitionDuration='.5s';
            buttonA.style.color=color_blue; 
            buttonA.style.transitionDuration='.5s'; 
            namePerson.innerHTML='аэрографист';   
            break;

            case(color_blue)://синий
            header.style.backgroundColor=color_pink;//розовый
            header.style.transitionDuration='1s';
            imgPerson.src='img/girl_two.png';
            imgPerson.style.transitionDuration='.5s';           
            imgPerson.style.width='130%';
            button.style.backgroundColor=color_blue; 
            button.style.transitionDuration='.5s';
            buttonA.style.color=color_pink; 
            buttonA.style.transitionDuration='.5s';
            namePerson.innerHTML='граффитист';                         
            break;

            case(color_pink)://розовый
            header.style.backgroundColor=color_orange;//оранжевый
            header.style.transitionDuration='1s';           
            imgPerson.src='img/girl_one.png';
            imgPerson.style.transitionDuration='.5s';
            imgPerson.style.width='100%';
            button.style.backgroundColor=color_pink;
            button.style.transitionDuration='.5s';
            buttonA.style.color=color_orange; 
            buttonA.style.transitionDuration='.5s';
            namePerson.innerHTML='художник';
            break;

            default:
            header.style.backgroundColor=color_orange;//оранжевый
            header.style.transitionDuration='1s';           
            imgPerson.src='img/girl_one.png';
            imgPerson.style.transitionDuration='.5s';
            imgPerson.style.width='100%';
            button.style.backgroundColor=color_pink;
            button.style.transitionDuration='.5s';
            buttonA.style.color=color_orange; 
            buttonA.style.transitionDuration='.5s';
            namePerson.innerHTML='художник';
        } 
    }

    //2.обработчик наведения мыши на картинку в class='about_us_person':
    function mouseenterAboutUs (EO){
        let nameImage=EO.target.firstElementChild.src.replace('.png','');
        EO.target.firstElementChild.src=nameImage+'_back.png';

        let buttonTeg=EO.target.getElementsByTagName('button')[0];
        buttonTeg.style.visibility='visible';
       
        EO.target.addEventListener('mouseleave',mouseleaveAboutUs);

        function mouseleaveAboutUs (EO){
            EO.target.firstElementChild.src=nameImage+'.png';
            buttonTeg.style.visibility='hidden';
        }
    }

    //3.обработчики клика правой кнопки мыши на стрелки вперед-назад в class='result':
    
    function clickResultNext (){
        let resultWorks=document.getElementsByClassName('result_works')[0];
        let massivImg=resultWorks.getElementsByTagName('img');
        let nextChange=false;
        
        for(let i=0;i<massivImg.length;i++){
            if(nextChange){                           
                    massivImg[i].style.zIndex='1';
                    nextChange=false;           
            }
            else if(!nextChange&&massivImg[i].style.zIndex==='1'){
                massivImg[i].style.zIndex='0';
                nextChange=true;
                if(i===massivImg.length-1){
                    massivImg[0].style.zIndex='1';
                }
            };           
        }    
    }

    function clickResultPrev (){
        let resultWorks=document.getElementsByClassName('result_works')[0];
        let massivImg=resultWorks.getElementsByTagName('img');
       
        for(let i=0;i<massivImg.length;i++){
            
            if(massivImg[i].style.zIndex==='1'){
                massivImg[i].style.zIndex='0';                
                if(i===0){
                    massivImg[massivImg.length-1].style.zIndex='1';
                    break;
                }
                else{
                    massivImg[i-1].style.zIndex='1';
                }
            }           
        }        
    }

    //4.обработчики клика правой кнопки мыши на стрелки вниз-вверх header:
    
    function updateFonClickDown() {
        clearInterval(timerId);
        updateFon();
        timerId=setInterval(updateFon,5000);       
    }


    function updateFonClickUp() {
        clearInterval(timerId);
        let header=document.getElementById('header');
        let imgPerson=document.getElementById('img_person');
        let button=header.querySelector('header .description_text .button_order');
        let buttonA=header.querySelector('.menu .button_order a');
        let namePerson=header.querySelector('.header_vertical_text');
        let color_orange='rgb(255, 102, 51)';
        let color_blue='rgb(29, 96, 196)';
        let color_pink='rgb(238, 81, 111)';
        
        switch(header.style.backgroundColor){
            case(color_orange)://оранжевый 
            header.style.backgroundColor=color_blue;//синий
            header.style.transitionDuration='1s';
            imgPerson.src='img/man.png';            
            imgPerson.style.transitionDuration='.5s';
            imgPerson.style.width='105%';
            button.style.backgroundColor=color_orange; 
            button.style.transitionDuration='.5s';
            buttonA.style.color=color_blue; 
            buttonA.style.transitionDuration='.5s'; 
            namePerson.innerHTML='аэрографист';   
            break;

            case(color_blue)://синий
            header.style.backgroundColor=color_pink;//розовый
            header.style.transitionDuration='1s';
            imgPerson.src='img/girl_two.png';
            imgPerson.style.transitionDuration='.5s';           
            imgPerson.style.width='130%';
            button.style.backgroundColor=color_blue; 
            button.style.transitionDuration='.5s';
            buttonA.style.color=color_pink; 
            buttonA.style.transitionDuration='.5s';
            namePerson.innerHTML='граффитист';                         
            break;

            case(color_pink)://розовый
            header.style.backgroundColor=color_orange;//оранжевый
            header.style.transitionDuration='1s';           
            imgPerson.src='img/girl_one.png';
            imgPerson.style.transitionDuration='.5s';
            imgPerson.style.width='100%';
            button.style.backgroundColor=color_pink;
            button.style.transitionDuration='.5s';
            buttonA.style.color=color_orange; 
            buttonA.style.transitionDuration='.5s';
            namePerson.innerHTML='художник';
            break;

            default:
            header.style.backgroundColor=color_orange;//оранжевый
            header.style.transitionDuration='1s';           
            imgPerson.src='img/girl_one.png';
            imgPerson.style.transitionDuration='.5s';
            imgPerson.style.width='100%';
            button.style.backgroundColor=color_pink;
            button.style.transitionDuration='.5s';
            buttonA.style.color=color_orange; 
            buttonA.style.transitionDuration='.5s';
            namePerson.innerHTML='художник';
        } 
        timerId=setInterval(updateFon,5000);       
    }


    //5.1. обработчик события scroll для формы:

    function showVisibleForm() {
        let form=document.querySelector('.footer_form');  
        if(window.innerWidth>769) {
            if (isVisible(form)) {
                form.style.transform = 'translateY(0%)';      
            }
            else if(!isVisible(form)){
                form.style.transform = 'translateY(40%)'; 
            }           
        }
        else{
            if (isVisible(form)) {
                form.style.transform = 'translateY(0%)';      
            }
        }
    }

    //5.2.обработчик события scroll для карандашей и точилки возле формы:

    function showVisiblePen() {
        let el=document.querySelector('.footer_pen');   
        if (isVisible(el)) {
            el.style.transform = 'translateY(0%)';      
        }else if(!isVisible(el)){
            el.style.transform = 'translateY(30%)'; 
        }   
    }

    function showVisiblePenBlack() {
        let el=document.querySelector('.footer_pen_black');   
        if (isVisible(el)) {
            el.style.transform = 'translateY(0%)';      
        }else if(!isVisible(el)){
            el.style.transform = 'translateY(30%)'; 
        }   
    }

    function showVisibleSharpener() {
        let el=document.querySelector('.footer_sharpener');   
        if (isVisible(el)) {
            el.style.transform = 'translateY(0%)';      
        }else if(!isVisible(el)){
            el.style.transform = 'translateY(30%)'; 
        }   
    }

    //5.3.обработчик события scroll для баллона:

    function showVisibleBallon() {
        let el=document.querySelector('.about_us_balloon');   
        if (isVisibleMiddle(el)) {
            el.style.opacity = '1';      
        }else if(!isVisible(el)){
            el.style.opacity = '0'; 
        }   
    }

    //5.4.обработчик события scroll для кисти:

    function showVisibleBrush() {
        let el=document.querySelector('.header_brush');   
        if (isVisibleMiddle(el)) {
            el.style.transform = 'translateY(0%)';
            el.style.opacity='1';      
        }else if(!isVisible(el)){
            el.style.transform = 'translateY(-20%)';
            el.style.opacity='0'; 
        }   
    }

    //5.5.обработчик события scroll для кистей и красок возле преимуществ:

    function showVisibleBrush1() {
        let el=document.querySelector('.excellence_brush_small_1');   
        if (isVisible(el)) {
            el.style.transform = 'translateX(0%)';      
        }else if(!isVisible(el)){
            el.style.transform = 'translateX(-100%)'; 
        }   
    }

    function showVisibleBrush2() {
        let el=document.querySelector('.excellence_brush_small_2');   
        if (isVisible(el)) {
            el.style.transform = 'translateX(0%)';      
        }else if(!isVisible(el)){
            el.style.transform = 'translateX(-100%)'; 
        }   
    }

    function showVisibleWaterColors() {
        let el=document.querySelector('.excellence_water_colors');   
        if (isVisible(el)) {
            el.style.transform = 'translateX(0%)';      
        }else if(!isVisible(el)){
            el.style.transform = 'translateX(-100%)'; 
        }   
    }

    //5.6.обработчик события scroll для result:

    function showVisiblePencils() {
        let el=document.querySelector('.result_pencils');   
        if (isVisibleMiddle(el)) {
            el.style.transform = 'translateX(0%)';       
        }else if(!isVisible(el)){
            el.style.transform = 'translateX(30%)';
        }   
    }
    
    function isVisible(elem) {    
        let coords = elem.getBoundingClientRect();      
        let windowHeight = document.documentElement.clientHeight;
      
        // верхний край элемента виден?
        let topVisible = coords.top > 0 && coords.top < windowHeight;
      
        // нижний край элемента виден?
        let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
              
        return topVisible || bottomVisible;
    }

    function isVisibleMiddle(elem) {    
        let coords = elem.getBoundingClientRect();
        let heightElem = elem.offsetHeight;     
        let windowHeight = document.documentElement.clientHeight;

        // середина элемента видна?
        let middleVisible = coords.top + heightElem/2 > 0 && coords.top + heightElem/2 < windowHeight;
      
        return middleVisible;
    }

    //6. обработчик для bars (для мобильной версии)
    function clickBars(){
        let barsMenu=document.querySelector('.header_content-inner .menu ul');
        barsMenu.style.transform='translateX(0%)';
        bars.style.display='none';

        let backArrow=document.querySelector('header .backArrow');
        backArrow.style.display='block';

        backArrow.addEventListener('click',clickBackArrowBars);

        function clickBackArrowBars(){
            barsMenu.style.transform='translateX(100%)';
            bars.style.display='block';
            backArrow.style.display='none'; 
        }

        window.onresize=()=>{
            if(window.innerWidth>960){
                bars.style.display='';
                backArrow.style.display='';
                barsMenu.style.transform='translateX(0%)'; 
            }
            if(window.innerWidth<=960){               
                barsMenu.style.transform='translateX(100%)'; 
            }
        }
    }

    //7. обработчик для палитры (мобильная версия)

    let imgExcellenceСolors=document.querySelector('.excellence_colors img');
       
    let massivPositions=[
        {top: '-3%',left: '-90%'},
        {top:'-31%',left:'-186%'},
        {top:'-133%',left:'-207%'},
        {top:'-201%',left:'-131%'},
        {top: '-170%',left: '-32%'},
        {top: '-70%',left: '-13%'}
    ];

    function clickExcellenceСolorsNext(){
        var strTransformTop=window.getComputedStyle(imgExcellenceСolors).top;
        var strTransformLeft=window.getComputedStyle(imgExcellenceСolors).left;
        for(let i=0;i<massivPositions.length;i++){
            imgExcellenceСolors.style.top=massivPositions[i].top;
            imgExcellenceСolors.style.left=massivPositions[i].left;

            let strTransformTopNext=window.getComputedStyle(imgExcellenceСolors).top;
            let strTransformLeftNext=window.getComputedStyle(imgExcellenceСolors).left;

            if(strTransformTop===strTransformTopNext&&strTransformLeft===strTransformLeftNext){
                if(i<massivPositions.length-1){
                    imgExcellenceСolors.style.top=massivPositions[i+1].top;
                    imgExcellenceСolors.style.left=massivPositions[i+1].left;
                    break;
                }else if(i===massivPositions.length-1){
                    imgExcellenceСolors.style.top=massivPositions[0].top;
                    imgExcellenceСolors.style.left=massivPositions[0].left;
                    break;
                }
            }else{
                continue;
            }
        }         
    }

    function clickExcellenceСolorsPrev(){
        var strTransformTop=window.getComputedStyle(imgExcellenceСolors).top;
        var strTransformLeft=window.getComputedStyle(imgExcellenceСolors).left;
        for(let i=massivPositions.length-1;i>=0;i--){
            imgExcellenceСolors.style.top=massivPositions[i].top;
            imgExcellenceСolors.style.left=massivPositions[i].left;

            let strTransformTopNext=window.getComputedStyle(imgExcellenceСolors).top;
            let strTransformLeftNext=window.getComputedStyle(imgExcellenceСolors).left;

            if(strTransformTop===strTransformTopNext&&strTransformLeft===strTransformLeftNext){
                if(i===0){
                    imgExcellenceСolors.style.top=massivPositions[massivPositions.length-1].top;
                    imgExcellenceСolors.style.left=massivPositions[massivPositions.length-1].left;
                    break;
                }else if(i>0){
                    imgExcellenceСolors.style.top=massivPositions[i-1].top;
                    imgExcellenceСolors.style.left=massivPositions[i-1].left;
                    break;
                }
            }else{
                continue;
            }
        }         
    }

    //8. Обработчик нажатия на кнопку 'button_order'
    function clickButtonOrder(EO){
        EO.preventDefault();
        footer.scrollIntoView(); 
    }

} 
