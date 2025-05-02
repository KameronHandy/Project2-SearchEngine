async function  GetGiffy() {
    let Search = document.getElementById("Search").value
    let GetUrl = fetch(`https://api.giphy.com/v1/gifs/search?api_key=${Key}v&q=${Search}&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
    let SearchResponseHolder = respone.json()
    let SearchDataHolder= SearchResponseHolder.data()

    let ImageHolder= document.getElementById(Images);
    ImageHolder.innerHTML


    for (let index = 0; index < ImageHolder.length; index++)
        image = document.CreateElement("img");
        image.src=SearchResponseHolder[index].images.original.url;
        container.append;
        console.log(image.src=SearchResponseHolder[index].images.original.url);

}




