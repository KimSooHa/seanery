const inpFile = document.getElementById("trans-img");
const previewImage = document.getElementById("preview-image");

inpFile.addEventListener("change", function(){
    console.log("1");
    const file = this.files[0];

    if(file){
        const reader = new FileReader();

        reader.addEventListener("load", function(){
            previewImage.setAttribute("src", this.result);
        });

        reader.readAsDataURL(file);
    } else {
        previewImage.setAttribute("src","");
    }
})