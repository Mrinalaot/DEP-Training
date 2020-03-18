document.addEventListener("DOMContentLoaded", function() {
    var input = document.getElementById("search-input");
    var inputBtn = document.getElementById("search-btn");

    input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("search-btn").click();
        }
    });
    inputBtn.addEventListener("click", function() {
        doSearch();
    });
});

window.addEventListener("load", function() { document.getElementById("search-btn").click(); });

document.addEventListener("DOMContentLoaded", loadFooter);

function loadFooter() {
    var $footerdiv = document.querySelector(".footer");
    var $footer = document.createElement("footer");
    var $h4 = document.createElement("h4");
    var h4text = document.createTextNode("Developed by: Mrinal Kanti Ghosh");
    var $ptag = document.createElement("p");
    $ptag.innerHTML = `Contact information : <a href="mailto:ghosh.mrinalkanti382@gmail.com "> ghosh.mrinalkanti382@gmail.com</a>`
    $h4.appendChild(h4text);
    $footer.appendChild($h4);
    $footer.appendChild($ptag);
    $footerdiv.appendChild($footer);
}
var pagecount = 0;
var nextPageToken = "";

function nextPage() {
    pagecount++;
    doSearch();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

}


function doSearch() {
    var searchedText = document.getElementById("search-input");
    var key = "AIzaSyBCnKXDJl3SLRxPj3ib1WH0s2U6hxM8rdY";
    var maxResults = 6;
    let url = ""

    if (pagecount) {
        url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBWLFBi-JmwYv2JnqUsrcDd4vKQYct2vdg&type=video&part=snippet&&maxResults=${maxResults}&q=${searchedText.value}&pageToken=${nextPageToken}`;
    } else {
        url = `https://www.googleapis.com/youtube/v3/search?key=${key}&type=video&part=snippet&maxResults=${maxResults}&q=${searchedText.value}`;
    }

    fetch(url, {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(response => response.json())
        .then(data => {
            displayResult(data);
        });
}

function displayResult(data) {
    nextPageToken = data.nextPageToken;
    var mainNode = document.getElementById("main");
    mainNode.innerHTML = "";
    console.log(data.items);

    data.items.forEach(element => {
        var thumb = element.snippet.thumbnails.medium.url;
        var title = element.snippet.title;
        var desc = element.snippet.description.substring(0, 200);
        var vid = element.id.videoId;
        var videoLink = `https://www.youtube.com/watch?v=${vid}`
        var publishDate = element.snippet.publishedAt.substring(0, 10);
        var channelName = element.snippet.channelTitle;

        mainNode.innerHTML += ` <article class="item" data-key="${vid}">
                                    <a href="${videoLink}"  target="_blank"> 
                                       <img src="${thumb}" alt="video icon" class="thumb">
                                    </a>
        							<div class="details">
                                        <h4><a href="${videoLink}" target="_blank">${title}</a></h4>
                                        <p>Published on ${publishDate} by ${channelName}<p>
        								<p>${desc}</p>
        							</div>
                                </article>
                            `;

    });



}