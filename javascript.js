async function  GetGiffy() {
    let Search = document.getElementById("Search").value
    let GetUrl = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${Key}v&q=${Search}&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
    let SearchResponseHolder = await GetUrl.json();
    let SearchDataHolder= await SearchResponseHolder.data;

    let ImageHolder= document.getElementById("Images");
    ImageHolder.innerHTML = ""
    ;


    for (let index = 0; index < SearchDataHolder.length; index++){
        let image = document.createElement("img");
        image.src=SearchDataHolder[index].images.original.url;
        ImageHolder.append(image);
        console.log(SearchDataHolder[index].images.original.url);

        

        
    }
}



async function  GetGiffyRandom() {
    let GetUrl = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${KeyRandom}&tag=&rating=g`)
    let RandomResponseHolder = await GetUrl.json();
    let RandomDataHolder= await RandomResponseHolder.data;

    let RandomImageHolder= document.getElementById("RandomImages");

    for (let index = 0; index < RandomDataHolder.length; index++){
        let newElement = document.createElement("img");
        newElement.src = RandomDataHolder [index].images.original.url;
        newElement.ClassName = "profileImage";
        document.getElementById("RandomImages").append(newElement);
        console.log(RandomDataHolder[index].images.original.url);
    }

}


function addElements(){
    let newElement = document.createAttribute("img")
    newElement.src = RandomDataHolder [index].images.original.url;
    newElement.ClassName = "profileImage"
    document.getElementById("section_image").append(newElement)
    console.log(RandomDataHolder[index].images.original.url);
}

function deleteElements () {
    let arrElements = document.getElementsByTagName("img")
    for (let index=0; index < arrElements.length; index++){
        arrElements[index].remove()
    }

}


GetGiffy();
GetGiffyRandom();


document.getElementById("GiffButton").addEventListener("click",GetGiffy)
document.getElementById("Random").addEventListener("click",GetGiffyRandom)

