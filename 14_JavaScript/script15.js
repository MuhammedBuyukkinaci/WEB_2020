var models = [
    {name:'AUDI',
    image:'img/audi.jpg',
    link:'https://www.audi.com.tr/tr/web/tr.html'
},
{name:'BMW',
    image:'img/bmw.jpeg',
    link:'https://www.bmw.com.tr/tr/index.html'
},
{name:'MERCEDES',
    image:'img/mercedes.jpeg',
    link:'https://www.mercedes-benz.com.tr/passengercars.html'
},
{   name:'SKODA',
    image:'img/skoda.jpeg',
    link:'https://www.skoda.com.tr/'
},
{   name:'VW',
    image:'img/vw.jpg',
    link:'https://www.vw.com.tr/'
}
];

var index = 2;
var slaycount = models.length;
var interval;
var settings = {
    duration:'500',
    random: false,
}

init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){
    index--;
    showSlide(index);

    console.log(index);
});

document.querySelector('.fa-arrow-circle-right').addEventListener('click',function(){
    index++;
    showSlide(index);
    //console.log(index);
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    });
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
})

function init(settings){

    var prev;
    interval = setInterval(function(){
        if(settings.random){

            do{
                index = Math.floor(Math.random() * slaycount);

            }while(index == prev) {
                prev = index;
            }

            //random index
        }
        else{

            if(slaycount == index+ 1){
                index=-1;
            }

            showSlide(index);
            //console.log(index);
            index++;

        }
        showSlide(index);

    },settings.duration)
}

function showSlide(i){

    index = i

    if (i < 0){
        index = slaycount - 1;
    }
    if(i >= slaycount){
        index = 0;
    }


    document.querySelector('.card-img-top').setAttribute('src',models[index].image);

    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector('.card-link').setAttribute('href',models[index].link);
};

