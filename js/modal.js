 // A custom class for the Modal
 class Modal{
    // Takes the html element for the modal
    constructor(){
        this.modal = document.querySelector(".js-modal");
    }

    // The open function. When it's called will dispaly the modal
    open(){
        this.modal.style.display = 'block';
    }

    // The close function. When it's called will close the modal
    close(){
        this.modal.style.display = 'none';
    }
}

// Takes the button elemeents from HTML
const openBtn = document.querySelector(".js-btn");
const closeBtn = document.querySelector(".js-close-button");
// Creates an object from the class
const modal = new Modal();

// Adds an event listener that will call the open function when
// the user clicks the open button
openBtn.addEventListener('click', function(e){
    modal.open();
})

//Adds an event listener that will call the close function
// when the user clicks the close modal button
closeBtn.addEventListener('click',function(e){
    modal.close();
})

