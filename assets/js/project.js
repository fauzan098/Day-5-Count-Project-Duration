let projects = []

function addproject(event){
    event.preventDefault();

    // console.log("berhasil");

    let projectName = document.getElementById("project-name").value
    let startDate = document.getElementById("startDate").value
    let endDate = document.getElementById("endDate").value
    let description = document.getElementById("description").value
    let image = document.getElementById("projectimage")

    image = URL.createObjectURL(image.files[0])

    let project = {
        projectName,
        description,
        image,
        duration: countDuration(new Date(startDate), new Date(endDate)),
        technologies: filterChecboxChecked(),
    }
    projects.push(project)
    renderProjects()
}

function filterChecboxChecked() {
    // querry all checkbox inputs
    const checkboxChecked = document.querySelectorAll(
      ".checkbox input[type='checkbox']:checked"
    );
  
    // Array Container
    let cbValue = [];
  
    // turn nodelist into array
    for (let i = 0; i < checkboxChecked.length; i++) {
      cbValue.push(checkboxChecked[i].value);
    }
  
    return cbValue;
  }

function renderProjects(){
    console.log(projects)

    let containerProjects = document.getElementById("projectlist")

    containerProjects.innerHTML = ""

    for (let i = 0; i < projects.length; i++){
        const techs = projects[i].technologies;
        containerProjects.innerHTML +=`
        <div class="project-list-item">
        <a href="blog-detail.html">
            <img src="${projects[i].image}" alt="">
        </a>
        <h2>${projects[i].projectName}</h2>
        <span>durasi : ${projects[i].duration}</span>
        <div class="content-project">
            <p>${projects[i].description}</p>    
        </div>
        <div class="image-skills">
            ${techs[0] ? `<i class="fa-brands fa-${techs[0]}"></i>` : ""}
            ${techs[1] ? `<i class="fa-brands fa-${techs[1]}"></i>` : ""}
            ${techs[2] ? `<i class="fa-brands fa-${techs[2]}"></i>` : ""}
            ${techs[3] ? `<i class="fa-brands fa-${techs[3]}"></i>` : ""}
        </div>
        <div class="button-project">
            <button style="width: 50%;">Edit</button>
            <button style="width: 50%;">Delete</button>
        </div>
    </div>
        `
    }
}

// count time 
function countDuration(startDate, endDate) {
    const result =
      startDate.getMonth() -
      endDate.getMonth() +
      12 * (endDate.getFullYear() - startDate.getFullYear());
  
    return Math.abs(result);
  }
  