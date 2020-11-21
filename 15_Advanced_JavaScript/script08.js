//ES5

//Course Constructor
class Course{
    constructor(title,instructor,image){
        this.courseID = Math.floor(Math.random()*10000);
        this.title = title;
        this.instructor = instructor;
        this.image = image;
    }
}


//UI constructor
class UI{
    addCourseToList(course){
        const list = document.getElementById('course-list');
        var used_html = `
            <tr>
            <td> <img src = "img/${course.image}" > </td>
            <td> ${course.title} </td>
            <td> ${course.instructor} </td>
            <td> <a href ="#" data-id ="${course.courseID}" class = "btn btn-danger btn-sm delete"> Delete </a> </td>
            </tr>
        `;
    
        list.innerHTML += used_html;
    }
    clearControls(){
        const title = document.getElementById('title').value="";
        const instructor = document.getElementById('instructor').value="";
        const image = document.getElementById('image').value="";
    }
    deleteCourse(element){
        if(element.classList.contains('delete')){
            element.parentElement.parentElement.remove();
            return true;
        }

    }
    showAlert(message,className){
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
}

//Storage constructor
class Storage{
    static getCourses(){
        let courses;

        if(localStorage.getItem('courses') === null){
            courses = []
        }else{
            courses = JSON.parse( localStorage.getItem('courses') ) ;
        }

        return courses;
    }

    static displayCourses(){
        const courses = Storage.getCourses();

        courses.forEach(element => {
            const ui = new UI();
            ui.addCourseToList(element);
        });
    }

    static addCourse(course){
        const courses = Storage.getCourses();
        courses.push(course);
        localStorage.setItem('courses',JSON.stringify(courses));

    }

    static deleteCourse(element){
        if(element.classList.contains('delete')){
            const deleted_id = element.getAttribute('data-id');

            const courses = Storage.getCourses();

            courses.forEach((course,index) => {

                if(course.courseID == deleted_id){
                    courses.splice(index,1);
                }

            });

            localStorage.setItem('courses',JSON.stringify(courses));

        }
    }

}

document.addEventListener('DOMContentLoaded',Storage.displayCourses());


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
        //add course to list
        ui.addCourseToList(course);

        //save to LS

        Storage.addCourse(course);
    
        
    
    
    
        //clear controls
        ui.clearControls();

        ui.showAlert('Course has been added successfully ','success');
    }

    e.preventDefault();
})

document.getElementById('course-list').addEventListener('click',function(e){
    const ui = new UI();

    //Delete course
    if( ui.deleteCourse(e.target) ==true ){
        //Delete from LS
        Storage.deleteCourse(e.target);

        ui.showAlert('the course has been deleted','danger');
    };

    
})