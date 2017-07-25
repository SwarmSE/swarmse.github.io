function top_stories(o) {
    var items = o.query.results.item;
    var output = '';
    var no_items = items.length;  
    for (var i=0; i < no_items; i++){  
      var title = items[i].title;  
      var link = items[i].link;  
      var desc = items[i].description;  
      output += '<h3><a href="' + link + '" target="_blank" class="newsLink">'+title+'</a></h3>' + desc + '<hr/>';
    }  
    document.getElementById('results').innerHTML = output;
}