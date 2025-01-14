const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
const container = document.querySelector('.container');

for (let i = 0; i < posts.length; i++) {
    const postHTML = `
        <section class="post">
            <div class="info">
                <img class="avatar" src="${posts[i].avatar}" alt="User avatar">
                <div class="text-container">
                    <p class="name">${posts[i].name}</p>
                    <p class="location">${posts[i].location}</p>
                </div>
            </div>
            <img class="post-image" src="${posts[i].post}" alt="Post image">
            <div class="icons">
                <img id="heart" src="images/icon-heart.png" alt="Like icon">
                <img id="bubble" src="images/icon-comment.png" alt="Comment icon">
                <img id="share" src="images/icon-dm.png" alt="Share icon">
            </div>
            <p class="likes">${posts[i].likes} likes</p>
            <p class="comments"><span class="user-highlight">${posts[i].username}</span> ${posts[i].comment}</p>
        </section>
    `;
    container.innerHTML += postHTML;
}

const heart = document.querySelectorAll('#heart');
const imagePost = document.querySelectorAll('.post-image');
const likesCounter = document.querySelectorAll('.likes');

for (let i = 0; i < posts.length; i++) {
    let liked = false;
    let totalLikes = posts[i].likes;

    heart[i].addEventListener('click', () => {
        if (!liked) {
            totalLikes += 1;
            liked = true;
        } else {
            totalLikes -= 1;
            liked = false;
        }
        likesCounter[i].textContent = `${totalLikes} likes`;
    });

    imagePost[i].addEventListener('dblclick', () => {
        if (!liked) {
            totalLikes += 1;
            liked = true;
        }else {
            totalLikes -= 1;
            liked = false;
        }
        likesCounter[i].textContent = `${totalLikes} likes`;
    });
}


