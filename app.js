
const getItme = document.querySelector('#list-group');
const addBtn = document.querySelector('#button-addon2');
const ALERT = (type, title, description) =>
    `
            <div class="${type}" alert-dismissible fade show" role="alert">
            <strong>${title}</strong> ${description}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
            </div>
`
const alertDOM = document.querySelector('#alert')

addBtn.addEventListener('click', myFunc)

{/* <li class="list-group-item d-flex justify-content-between align-items-center">asdsd<span
class="close">&times;</li> */}
let liste = document.querySelector('#form')
function myFunc(event) {
    event.preventDefault()
    if (liste.value) {
        addList(liste.value)
        localStorage.setItem("Yapılcak", liste.value)
        liste.value = ""
        alertDOM.innerHTML = ALERT(
            'alert alert-success',
            'Success',
            'Listeye eklendi'
        );
    } else {
        alertDOM.innerHTML = ALERT(
            'alert alert-danger',
            'Error',
            'İşlem Başarısız'
        );
    }


}

// inputText.value = "";
// const close = document.querySelectorAll('span')

// /**
//  * 1. Yol 
// */
// // for (let i = 0; close.length; i++) {
// //     close[i].addEventListener('click', (e) => {
// //         e.preventDefault();
// //         e.target.parentElement.remove()

// //     })
// // }
// /*
// * 2. yol
// */

// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', () => {
//         close[i].parentElement.style.opacity = 0;
//         setTimeout(()=> {
//             close[i].parentElement.style.display = "none";
//             close[i].parentElement.remove()
//         }, 500)

//     })
// }


function addList(listname) {
    var li = document.createElement('li')
    li.innerHTML = `${listname}`
    getItme.appendChild(li)
    // console.log(getItme.lastElementChild.lastElementChild.innerHTML)
    const span = document.createElement('span')
    span.innerHTML = `<span class="close">&times;</span>`
    li.appendChild(span)

}

liste.value = "";
const close = document.querySelectorAll('span')

for (let i = 0; i < close.length; i++) {
    close[i].addEventListener('click', () => {
        close[i].parentElement.style.opacity = 0;
        setTimeout(()=> {
            close[i].parentElement.style.display = "none";
            close[i].parentElement.remove()
        }, 500)

    })
}


