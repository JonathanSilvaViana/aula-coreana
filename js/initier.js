document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, {});
        });

$(document).ready(function(){
                M.AutoInit();
                $('.sidenav').sidenav().on('click tap', 'li a', () => {
                $('.sidenav').sidenav('close');
                });
    
    //$('select').formSelect();
            });



        