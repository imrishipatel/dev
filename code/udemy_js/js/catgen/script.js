function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "sleepy-cat.jpeg";
    image.height = 120;
    div.appendChild(image);
}