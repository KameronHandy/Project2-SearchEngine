async function  GetGiffy() {
    let Search = document.getElementById("Search").value
    let GetUrl = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${Key}v&q=${Search}&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
    let SearchResponseHolder = await GetUrl.json();
    let SearchDataHolder= await SearchResponseHolder.data;

    let ImageHolder= document.getElementById("Images");
    ImageHolder.innerHTML = "";


    for (let index = 0; index < SearchDataHolder.length; index++){
        let image = document.createElement("img");
        image.src=SearchDataHolder[index].images.original.url;
        ImageHolder.append(image);
        console.log(SearchDataHolder[index].images.original.url);
    }
}

GetGiffy();


document.getElementById("GiffButton").addEventListener("click",GetGiffy)

