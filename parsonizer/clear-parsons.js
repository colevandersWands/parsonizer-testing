function clear_parsons() {
  var div = document.getElementById('parsons-zone');
  while(div.firstChild){
      div.removeChild(div.firstChild);
  };

  var sortable_trash = document.createElement("div");
  sortable_trash.className = "sortable-code";
  sortable_trash.id = "sortableTrash";

  var sortable = document.createElement("div");
  sortable.className = "sortable-code";
  sortable.id = "sortable";

  var clear_both = document.createElement("div");
  clear_both.style = "clear:both;";

  div.appendChild(sortable_trash);
  div.appendChild(sortable);
  div.appendChild(clear_both);
};