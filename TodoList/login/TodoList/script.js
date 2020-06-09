$(document).ready(()=>{
    $.getJSON("https://jsonplaceholder.typicode.com/todos",function(data){
        var output='';
        $.each(data,function(key,value){
            if(value.completed==true){
                output += `<div class="border-bottom" style="padding:10px;"><input type="checkbox" name="tech" value=true>` + value.title + `</div>`

            }
            else{
                output += `<div class="border-bottom" style="padding:10px;"><input type="checkbox" checked disabled>` + value.title + `</div>`
            }

        });
        $("form").append(output);
    });

});

let prom = new Promise((resolve,reject)=>{
    var cnt=0;
    $('form').change((e)=>{
        var tab = e.target;
        console.log(tab);
        if(tab.checked==true){
            cnt=cnt+1;
            console.log(cnt);
            if (cnt >= 5) {
                $(this).prop("checked=true");
               alert('you need to select maximum of 5 boxes');
               resolve('5 task is done')

            }
            // else{
            //     reject('5 boxes are to be selected')
            // }
        }     
        else{
            cnt=cnt-1;
            console.log(cnt);
           
        }

    })
   
}) 
prom.then((message)=>{
    console.log('your '+message)
})
// .catch((message1)=>{
//     console.log(message1)
// })


