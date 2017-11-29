var model = {
    currentCat: null,
    cats:[
        {
            clickCount : 0,
            name : 'Tabby',
            imgSrc : 'img/cat1.jpg',
            imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568'
        },
        {
            clickCount : 0,
            name : 'Tiger',
            imgSrc : 'img/cat2.jpg',
            imgAttribution : 'https://www.flickr.com/photos/xshamx/4154543904'
        },
        {
            clickCount : 0,
            name : 'Scaredy',
            imgSrc : 'img/cat3.jpg',
            imgAttribution : 'https://www.flickr.com/photos/kpjas/22252709'
        },
        {
            clickCount : 0,
            name : 'Shadow',
            imgSrc : 'img/cat4.jpg',
            imgAttribution : 'https://www.flickr.com/photos/malfet/1413379559'
        },
        {
            clickCount : 0,
            name : 'Sleepy',
            imgSrc : 'img/cat5.jpg',
            imgAttribution : 'https://www.flickr.com/photos/onesharp/9648464288'
        }
    ]
};

var octopus = {
    init: function(){
        model.currentCat = model.cats[0];
        catListView.init();
        catView.init();
    },
    
    getCurrentCat: function(){
        return model.currentCat;
    },
    
    getCats: function(){
        return model.cats;
    },
    
    setCurrentCat: function (cat) {
        model.currentCat = cat;
    },
    
    incrementCounter: function () {
        model.currentCat.clickCount++;
        catView.render();
    }
    
};


var catView = {
    init: function () {
        this.cat = document.getElementById('cat');
        this.catName = document.getElementById('cat-name');
        this.catImg = document.getElementById('cat-img');
        this.count = document.getElementById('cat-count');
        this.catImg.addEventListener('click', function(){
            octopus.incrementCounter();
        })
        this.render();
    },
    
    render: function () {
        var currentCat = octopus.getCurrentCat();
        this.catName.textContent = currentCat.name;
        this.catImg.src = currentCat.imgSrc;
        this.count.textContent = currentCat.clickCount;
    }
};

var catListView = {
    init: function () {
        this.catList = document.getElementById('cat-list');
        this.render();
    },
    
    render: function () {
        var cat;
        var elem;
        var cats = octopus.getCats();
        this.catList.innerHTML = '';
        for (var i = 0; i < cats.length; i++){
            cat = cats[i];
            elem = document.createElement('li');
            elem.textContent = cat.name;
            elem.addEventListener('click', (function(cat){
                return function() {
                    octopus.setCurrentCat(cat);
                    catView.render();
                }
            })(cat));
            this.catList.appendChild(elem);
        }
    }
}

octopus.init();