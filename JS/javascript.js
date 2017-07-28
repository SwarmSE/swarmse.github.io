function top_stories(o) {
    var items = o.query.results.item;
    var output = '';
    var no_items = items.length;  
    for (var i=0; i < no_items; i++){  
      var title = items[i].title;  
      var link = items[i].link;  
      var desc = items[i].description;  
      output += '<h3><a href="' + link + '" target="_blank" class="newsLink title">'+title+'</a></h3>' + desc + '<hr/>';
    }  
    document.getElementById('results').innerHTML = output;
}

$(document).ready(function(){
    var allImages = "";
    var img = [];
    img[0] = "<a href='/img/infoGraphic.jpg' target='_blank'><img src='/img/infoGraphic.jpg'></a>";
    img[1] = "<a href='/img/evSocialInfograph.jpg' target='_blank'><img src='/img/evSocialInfograph.jpg'></a>";
    img[2] = "<a href='/img/EV_pricePerKwH_infographic.jpg' target='_blank'><img src='/img/EV_pricePerKwH_infographic.jpg'></a>";
    img[3] = "<a href='/img/infographicBig.png' target='_blank'><img src='/img/infographicBig.png'></a>";
    // feel free to add links here. save your image in the img directory and use this code
    // this way you can add as many images here as you like! they will all be added into the image stack.
    /*
    img[...] = "<a href='/img/imagenamehere.img' target='_blank'><img src='/img/imagenamehere.img'></a>;
    */
    for(var i = 0; i<img.length; i++){
        $('#photos').append(img[i]);
    }
});