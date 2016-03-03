document.addEventListener('DOMContentLoaded', function() {
    var btn = document.createElement('button');
    var text = document.createTextNode('TouchMe');
    btn.className = 'touche';           
    btn.appendChild(text);
    document.body.appendChild(btn);

    btn.onclick = function myBox() {
        var boxxx = document.getElementsByClassName('funny');
        var boxy = document.createElement('div');
        boxy.className = 'funny';
        boxy.id = String(boxxx.length);
        document.body.appendChild(boxy); 

        
        
        boxy.addEventListener("mouseover", function() {
            boxy.innerHTML = boxy.id;
        })
        
        
        boxy.onmouseout = function() {
        boxy.innerHTML = '';

    
        }

        boxy.addEventListener('click', function() {
            var pretty = ['#374f0f', '#52a373', '#1f40a0', '#8791c9', '#41abb8', '#1daa9b'];
            boxy.style.backgroundColor = 
            pretty[Math.floor(Math.random() * pretty.length)];
        })

        boxy.addEventListener('dblclick', function(e) {
            var selectedElem = e.target;
            var eat = parseInt(boxy.id);
            if (eat % 2 == 0){
                 if (selectedElem.nextElementSibling == null) {
                    alert('no element to remove');
                    return;
                 } else {
                     selectedElem.nextElementSibling.remove();  
                 }
                //selectedElem.nextElementSibling.remove();     
            } 
            else if (eat % 2 !== 0) {
                var buttonCheck = selectedElem.previousElementSibling.className;
                if (buttonCheck === 'touche') {
                    alert('can\'t remove the button');
                    return;
                }
                selectedElem.previousElementSibling.remove();
                
            }
            else {
                alert('Nope Nope Nope.');
                
            }
        });
    }      
});


