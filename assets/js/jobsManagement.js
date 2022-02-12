
/*-----------------------------------------------------------------
    Since the bookmark is nested inside the anchor tag, we're going
    to write a script the distinguishes between the two elements
    through the path and:
    a- Sends the user to the job page if the card is clicked
    b- bookmarks the job link if the bookmark is tapped
    
-----------------------------------------------------------------*/

const jobPostsLinks = document.querySelectorAll(".job-link");

const bookmarkPostBtns = document.querySelectorAll("span.bookmark-post");



jobPostsLinks.forEach(linkCard => {
    linkCard.addEventListener("click", (e) => {
      
    //if the image inside the bookmark btn or the bookmark btn were clicked
    let image = e.target.parentElement.classList.contains("bookmark-post");
    let bookMarkBtn = e.target.classList.contains("bookmark-post");
        
        if (image || bookMarkBtn) {
        //don't act upon the anchor tag and just bookmark it
        e.stopPropagation();
        e.preventDefault();
        let selectedBookmarkBtn = linkCard.querySelector("span.bookmark-post img");
        toggleClass(selectedBookmarkBtn, "bookmarked");
        }
    })
})


/*-----------------------------------------------------------------
    Creating a job post
-----------------------------------------------------------------*/

const holder = document.querySelector("div.jobPosts");

function checkEmpty(textField) {
    return !textField;
}

function insertPost(holder, field, position, location, workHours, level) {
    // if (checkEmpty(holder) || checkEmpty(field) || checkEmpty(position) || checkEmpty(location)
    //     || checkEmpty(workHours) || checkEmpty(level)) {
    //     throw Error("Can't Allow Empty Text Fields");
    // }
    
    const div = document.createElement("div");
    div.classList = ("col-xl-4 col-lg-6");
    div.innerHTML = `
      <a class="job-link" href="#">
                <div class="card px-2 pt-2 pb-5">
                  <div class="card-body">
                    <h1 class="card-title mb-4 postHeader">
                      ${field}
                      <span class="bookmark-post rounded"
                        ><img
                          src="images/main/bookmarks.svg"
                          alt="bookmark this post"
                      /></span>
                    </h1>
                    <h1 class="mb-2 position">${position}</h1>

                    <h6 class="card-subtitle mb-4 text-muted date">
                     ${location}
                    </h6>
                    <h5 class="card-subtitle mt-2 text-muted requireing">
                      ${workHours} <span class="circle"></span> ${level}
                    </h5>
                  </div>
                </div>
              </a>
    `;
    return holder.appendChild(div);
}

