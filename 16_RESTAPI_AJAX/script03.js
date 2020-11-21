document.querySelector('#getEmployee').addEventListener('click',loadEmployee);

function loadEmployee(){

    var loadImage = document.querySelector('#loading');
    loadImage.style.display = 'block';

    const xhr = new XMLHttpRequest();
    xhr.open('GET','employees.json',true);

    setTimeout(()=>{

         //bize sorgunun sonlandığını söylüyor
        xhr.onload = function(){

            loadImage.style.display = 'none';

        if(this.status === 200){

            //return string
            console.log(this.responseText);
            //return object
            console.log(JSON.parse(this.responseText));

            

            let employees = JSON.parse(this.responseText);

            let html;
            
            employees.forEach(employee => {
                html +=`<tr>

                    <td>${employee.firstname}</td>
                    <td>${employee.lastname}</td>
                    <td>${employee.age}</td>
                    <td>${employee.retired}</td>

                </tr>`;
            });

            ;

            document.querySelector('#employees').innerHTML = html;
        }
    }

    xhr.send();
        
    },1500);

    

   
}