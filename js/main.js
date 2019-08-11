/*
document.querySelector('#add-skill').addEventListener('click', addInput);

$("#add-skill").on('click', function() {
});

$("#add-skill").click( () => {
})

function addInput(){
    
}

*/


$("#add-skill").on('click', function() {
    //let skill = document.querySelector("#skill-input").value;
    let skill = $("#skill-input").val();
    let $skillElement = $(`<div class="skill"><button>X</button><span>${skill}</span></div>`);
    $("#skill-list").append($skillElement);
});

$("#skill-list").on('click', "button", function() {
    $(this).closest('.skill').remove();
})







