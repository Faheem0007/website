const btn = document.getElementById('submit-btn');

btn.addEventListener('click',(e)=>{
    e.preventDefault()
    const formValue = {
        image : document.forms['form']['file'].files[0],
        topic : document.forms['form']['topic'].value,
        title : document.forms['form']['title'].value,
        article : document.forms['form']['article'].value
    }
     console.log(formValue)
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4){
            if(this.status == 200){
                console.log(Res)
            }
        }
    }
    xhr.open('POST','/blogpost')
    xhr.send(JSON.stringify(formValue))
})