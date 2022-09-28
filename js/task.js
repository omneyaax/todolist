let addbutton = document.querySelector('#add')
let newt = document.querySelector('#nt')
let list = document.querySelector('#list')


addbutton.onclick = function(){
    if(document.querySelector('#nt input').value.length == 0){
      
    }

    else{
        list.innerHTML += `
            <div class="lsst">
                <span id="taskname">
                    ${document.querySelector('#nt input').value}
                </span>
                <button class="delete">
                <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
        `;

        let current_tasks = document.querySelectorAll(".delete");
        for(let i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}


// done.onclick = function(){

//     document.querySelector('.lsst').classList.add('checked')

// }