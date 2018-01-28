window.onload=function(){
    var selectClass = document.getElementById("selectClass");
    var course = selectClass.course;
    var teachers = selectClass.teachers;
    var accepts = selectClass.accepts;
    var submitButton = selectClass.submitButton;
    var show = document.getElementById("show");

    for(var i = 0; i < accepts.length; i++){
        // alert(accepts[i]);
        accepts[i].onclick = function(){
            // alert(this.value);
             submitButton.disabled = this.value === "no";
        }
    }
    submitButton.onclick = function(ev){
        ev.preventDefault();
        show.innerHTML="";
        var choosedCourse="The course you select is: ";
        for(var i = 0; i < course.length; i++){
            if(course[i].checked){
                choosedCourse += course[i].value +" ";
            }
        }
        var choosedTeacher = teachers.value;
        show.innerHTML += choosedCourse + "<br>" + choosedTeacher;
    };
};