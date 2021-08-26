function storyToggle() {
    let readMore = document.querySelector('.read-more');
    let moreText = document.querySelector('.more-text');

    readMore.addEventListener('click', ()=>{
        moreText.style.display = "block";
        readMore.style.display = "none";
    })
}

function productScroll() {
    let leftScroll = document.querySelector(".left-scroll");
    let rightScroll = document.querySelector(".right-scroll");
    let products = document.querySelector('.products');
    let current = 0;

    leftScroll.addEventListener('click', ()=>{
        current = current - 300;
        products.scrollTo({
            left: current,
            behavior: "smooth",
        });
    })
    rightScroll.addEventListener('click', ()=>{
        current = current + 300;
        products.scrollTo({
            left: current,
            behavior: "smooth",
        });
    })
}

async function newsExtract() {
    fetch('../assets/json/news.json')
        .then((res) => res.json())
        .then((data)=>{
            let counter = 0;
            let rightArrow = document.querySelector('.news-right');
            let leftArrow = document.querySelector('.news-left');
            let newsImage = document.getElementById('news-image');
            let newsTitle = document.getElementById('news-title');
            let newsDesc = document.getElementById('news-desc');
            let newsSource = document.getElementById('news-source');

            leftArrow.addEventListener('click', () => {
                if (counter < 0){
                    newsImage.src = data[0].urlToImage;
                    newsTitle.innerHTML = data[0].title;
                    newsTitle.href = data[0].url;
                    newsDesc.innerHTML = data[0].description;
                    newsSource.innerHTML = `~ ${data[0].source.name}`;
                    counter = 0;                   
                }
                else{
                    newsImage.src = data[counter].urlToImage;
                    newsTitle.innerHTML = data[counter].title;
                    newsTitle.href = data[counter].url;
                    newsDesc.innerHTML = data[counter].description;
                    newsSource.innerHTML = `~ ${data[counter].source.name}`;
                    counter = counter - 1;
                }
            })
            rightArrow.addEventListener('click', () => {
                if (counter >= data.length){
                    newsImage.src = data[0].urlToImage;
                    newsTitle.innerHTML = data[0].title;
                    newsTitle.href = data[0].url;
                    newsDesc.innerHTML = data[0].description;
                    newsSource.innerHTML = `~ ${data[0].source.name}`;
                    counter = 0;
                }
                else if (counter < 0){
                    newsImage.src = data[0].urlToImage;
                    newsTitle.innerHTML = data[0].title;
                    newsTitle.href = data[0].url;
                    newsDesc.innerHTML = data[0].description;
                    newsSource.innerHTML = `~ ${data[0].source.name}`;
                    counter = 0;
                }
                else{
                    newsImage.src = data[counter].urlToImage;
                    newsTitle.innerHTML = data[counter].title;
                    newsTitle.href = data[counter].url;
                    newsDesc.innerHTML = data[counter].description;
                    newsSource.innerHTML = `~ ${data[counter].source.name}`;
                    counter = counter + 1;
                }
            })
        })
        .catch((err)=>{console.log(err)})
}


// functions call
(function() {
    storyToggle();
    productScroll();
    newsExtract();
})();

