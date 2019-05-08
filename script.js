window.onload = function(){
    var isProjectsShown = false;

    document.getElementById("projects_button").addEventListener('click', function(){
        if(!isProjectsShown)
        {
            document.getElementById("projects").style.display = "block";
            document.getElementById('projects_button').innerHTML = "Hide HTML Projects";
            isProjectsShown = true;
        }
        else
        {
            document.getElementById("projects").style.display = "none";
            document.getElementById('projects_button').innerHTML = "Show HTML Projects";
            isProjectsShown = false;
        }


    })


    var isWorkShown = false;

    document.getElementById("work_title").addEventListener('click', function(){
        if(!isWorkShown)
        {
            document.getElementById("work_list").style.display = "block";
            document.getElementById('work_title').innerHTML = "Hide Work Experience";
            isWorkShown = true;
        }
        else
        {
            document.getElementById("work_list").style.display = "none";
            document.getElementById('work_title').innerHTML = "Show Work Experience";
            isWorkShown = false;
        }


    })



}


