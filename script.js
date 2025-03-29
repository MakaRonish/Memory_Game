const item = document.getElementsByClassName('item')
console.log(item)

function showpicture(number) {
    const imgele = document.getElementById(`item${number}`

    )
    console.log(`item${number}`)
    imgele.style.backgroundImage = "url('images/test.jpg')";
    imgele.style.backgroundSize = "contain";
    console.log('clicked 1')

}


for (let i = 0; i < item.length; i++) {
    item[i].addEventListener("click", function (e) {
        showpicture(i + 1);
        console.log('clicked')
    });
}