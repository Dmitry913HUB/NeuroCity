document.body.onload = function(){
    setTimeout(function(){
        var preloder = document.getElementById('page-preloder');
        if(!preloder.classList.contains('done')){
            preloder.classList.add('done');
        }
    }, 2500)
}