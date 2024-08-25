
const mean = document.querySelector('.mean');
const toggle = document.getElementById('toggle');

toggle.onclick = function () {
    mean.classList.toggle('active');
}


// start img

function chanenImg(img) {
    var singleImg = document.querySelector('#singleImg');
    singleImg.setAttribute('src', img)
}

// End img

