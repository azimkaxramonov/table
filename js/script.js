let tbody = document.querySelector('tbody')
let form = document.querySelector('form')
let inputname = document.querySelector('.nameinp')
let inputage = document.querySelector('.ageinp')
let modal = document.querySelector('.modal_window')
let forms_edit = document.forms.get
let edit_name = forms_edit.querySelector('.edit_name')
let edit_age = forms_edit.querySelector('.edit_age')
let edit_close = document.querySelector('#edit_img')



let mass = []
function reload() {
    let tr = document.createElement('tr')
    let thnum = document.createElement('td')
    let thname = document.createElement('td')
    let thage = document.createElement('td')
    let thaction = document.createElement('td')
    let thimgone = document.createElement('img')
    let thimgtwo = document.createElement('img')



    thimgone.src = "img/edit-svgrepo-com.svg"
    thimgtwo.src = "img/delete-svgrepo-com.svg"
    thname.innerHTML = inputname.value
    thage.innerHTML = inputage.value


    tbody.append(tr)
    tr.append(thnum, thname, thage, thaction)
    thaction.append(thimgone, thimgtwo)


    thimgtwo.onclick = () => {
        tr.remove()
    }
    thimgone.onclick = () => {
        modal.style.display = 'flex'
    }
    edit_close.onclick = () => {

        modal.style.display = 'none'

    }

    forms_edit.onsubmit = (event) => {
        event.preventDefault();
        if (edit_name.value.length === 0) {
            err = true
        }
        if (err === false) {

            let newTitle = edit_name.value
            mass = newTitle
            thname.innerHTML = newTitle


        }
        if (edit_age.value.length === 0) {
            err = true
        }
        if (err === false) {

            let newage = edit_age.value
            mass = newage
            thage.innerHTML = newage


        }

    }

}
let err = false

form.onsubmit = (event) => {
    event.preventDefault();
    if (inputage.value === Number) {

    }
    if (err === false) {
        submit()
    }
}




function submit() {
    reload()
    mass = {
        id: Math.random(),

    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        mass[key] = value
    })

    console.log(mass);
}
console.log(inputname);