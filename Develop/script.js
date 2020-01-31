
$(document).ready(function(){

    let currentTime = new Date();
    document.getElementById("currentDay").innerHTML = currentTime.toLocaleString();

    let currentHour = currentTime.getHours();


    let savedText = JSON.parse(localStorage.getItem('data')) || {}

    $(document).on("click", ".saveBtn", function(){
        let textid = $(this).attr('id').replace('save', 'text')
        let text = $(`#${textid}`).val().trim()
        console.log(text)
        savedText[textid] = text;
        localStorage.setItem('data', JSON.stringify(savedText))
    });


    for (let i=9; i < 18; i++) {
    
        let textAreaColor = "red";

        if (i < currentHour) {
            textAreaColor = "gray";
        } else if (i === currentHour) {
            textAreaColor = "red";
        } else {
            textAreaColor= "green";
        }

    $(".time-block").append(`<div class='row'><div class='input-group'><div class ='input-group-prepend'>
    <span class= 'input-group-text hour hour${i}'>${i}:00</span></div>
    <textarea class='form-control col-sm-10' style="background: ${textAreaColor}" id="text${i}" aria-label='With textarea'>${savedText[`text${i}`] || ''}
    </textarea><button type='button' id='save${i}' class='btn btn-primary col-sm-1 saveBtn'>Save</button>
    </div></div>`)

    };




    // let textArea = document.querySelector(`#text${i}`)
    
    //if the hour is less than currentHour then the text area should be gray

    // if ($(`.hour${i}`) < currentHour) {
    //     textArea.style.background.color = "gray";
    // }

    //if the hour is equal to currentHour then the text area should be red

    //if the hour is greater than currentHour then the text area should be green

});


