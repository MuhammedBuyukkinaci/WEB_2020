//ES5

//Course Constructor
function Course(title,instructor,image){
    this.title = title;
    this.instructor = instructor;
    this.image = image;
}

//UI constructor
function UI(){

}

UI.prototype.addCourseToList = function(course){
    const list = document.getElementById('course-list');
    var used_html = `
        <tr>
        <td> <img src = "img/${course.image}" > </td>
        <td> ${course.title} </td>
        <td> ${course.instructor} </td>
        <td> <a href ="#" class = "btn btn-danger btn-sm delete"> Delete </a> </td>
        </tr>
    `;

    list.innerHTML += used_html;

}

UI.prototype.clearControls = function(){
    const title = document.getElementById('title').value="";
    const instructor = document.getElementById('instructor').value="";
    const image = document.getElementById('image').value="";
}

UI.prototype.deleteCourse = function(element){
    if(element.classList.contains('delete')){
        element.parentElement.parentElement.remove();
    }
}

UI.prototype.showAlert = function(message,className){
    var alert = `
    <div class ="alert alert-${className}">
        ${message}
    </div>
    `;

    const row = document.querySelector('.row');
    //beforebegin, afterbegin, beforeend, afterend
    row.insertAdjacentHTML('beforeBegin',alert);

    setTimeout( () =>{
        document.querySelector('.alert').remove();
    },3000);
}


//Formun submit butonuna tıklandığında
document.getElementById('new-course').addEventListener('submit',function(e){

    const title = document.getElementById('title').value;
    const instructor = document.getElementById('instructor').value;
    const image = document.getElementById('image').value;

    //console.log(title,instructor,image);

    //create course object
    const course = new Course(title,instructor,image);

    //create UI

    const ui = new UI();

    if(title ==='' || instructor ==='' || image ===''){
        ui.showAlert('Please complete the form ! ','warning');
    }

    else{
        ui.addCourseToList(course);

        //save to DB
    
        //add course to list
    
    
    
        //clear controls
        ui.clearControls();

        ui.showAlert('Course has been added successfully ','success');
    }

    e.preventDefault();
})

document.getElementById('course-list').addEventListener('click',function(e){
    const ui = new UI();

    ui.deleteCourse(e.target);
    ui.showAlert('the course has been deleted','danger');
})