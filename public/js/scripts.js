// const cardList = [
//     {
//         title: "Pic2",
//         image: "images/2.png",
//         link: "About Pic 2",
//         description: "Demo description about Picture 2"
//     },
//     {
//         title: "Pic3",
//         image: "images/3.jpg",
//         link: "About Pic3",
//         desciption: "Demo desciption about Picture 3"
//     }
// ]

// const getProjects = () => {
//     $.get('/api/projects',(response) => {
//         if(response.statusCode==200){
//             addCards(response.data);
//         }
//     })
// }
const getProjects = () => {
    $.get('/api/projects',(response) => {
        if(response.statusCode==200){
            addCards(response.data);
        }
    })
}

const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!")
}

const submitForm = () => {
    let formData = {};
    formData.title = $('#title').val();
    formData.image = $('#image').val();
    formData.link = $('#link').val();
    formData.desciption = $('#description').val();

    console.log("Form Data Submitted: ", formData);
    addProjectToApp(formData);
}

//ajax
const addProjectToApp =(project) =>{
    $.ajax({
        url: '/api/projects',
        data: project,
        type: 'POST',
        success: (result) => {
            alert(result.message);
            location.reload(); //it automatically reloads the page
        }
    })
}

const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">'+
    '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.image+'">'+
    '</div><div class="card-content">'+
    '<span class="card-title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right">more_vert</i></span><p><a href="#">'+item.link+'</a></p></div>'+
    '<div class="card-reveal">'+
        '<span class="card-title grey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span>'+
        '<p class="card-text">'+item.desciption+'</p>'+
      '</div></div></div>';
      $("#card-section").append(itemToAppend)
    });
}



$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#formSubmit').click(()=>{
        submitForm();
    })
    getProjects();
    $('.modal').modal();
  });
