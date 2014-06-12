(function(){
      var item = document.querySelector('#item'),
          form = document.querySelector('form'),
          list = document.querySelector('#list');
      var date = new Date();
      var now = date.getHours();
      var time1 = 0;
      var time2 = 12;
      var time3 = 17;
        form.addEventListener('submit', function(ev) {
          if (list.classList.contains ("new")) {
          list.innerHTML += '<li class="new">' + item.value + '</li>';
        } else {
          list.innerHTML += '<li>' + item.value + '</li>';
        }
         if (now > time1 && now < time2) {
            li.setAttribute("class", "am")
          }
          else if (now > time2 && now < time3) {
            li.setAttribute("class", "noon")
          }
          else {
            li.setAttribute("class", "pm");
          }
          store();
          ev.preventDefault();
        }, false);
        list.addEventListener('click', function(ev) {
          var t = ev.target,
              classList = t.classList;
          if (classList.contains('done') && classList.contains('checked')) {
            t.parentNode.removeChild(t);
            store();
          } else {
            if (classList.contains('checked')) {
              classList.add('done');
            } else {
              classList.add('checked');
            }
          }
          store();
        ev.preventDefault();
      }, false);
      function store (){
        window.localStorage.setItem("myitems","");
        window.localStorage.myitems = list.innerHTML;
      }
      function retrieve(){
        list.innerHTML = window.localStorage.myitems;
      }
      if(window.localStorage.length > 0){ retrieve();}
      $(function() {
        $( "#list" ).sortable({
          stop: function stop (){
            store();
          }
        });
      $( "#list" ).disableSelection();
      store();
    });

    $("button").click(function(){
      $("*").toggleClass("new");
    });
})();
