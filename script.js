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



}