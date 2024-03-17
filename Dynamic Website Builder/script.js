function createCard(thumbnail, duration, title, channelName, numberOfViews, uploadedAgo) {

    //     let container = document.querySelector('.container')

    //     let card = document.createElement('div')
    //     card.className = 'card';

    //     let left = document.createElement('div')
    //     left.className = 'left';
    //     card.appendChild(left)

    //     let image = document.createElement('img')
    //     image.className = 'thumbnail'
    //     image.src = thumbnail;
    //     left.appendChild(image)

    //     let timeDuration = document.createElement('span')
    //     timeDuration.className = 'duration'
    //     timeDuration.innerText = duration;
    //     left.appendChild(timeDuration)

    //     let right = document.createElement('div')
    //     right.className = 'right';
    //     card.appendChild(right)

    //     let heading = document.createElement('h3')
    //     heading.className = 'title'
    //     heading.innerText = title;
    //     right.appendChild(heading)

    //     let content = document.createElement('div')
    //     content.className = 'content';
    //     right.appendChild(content)

    //     let channel = document.createElement('span')
    //     channel.className = 'channelName'
    //     channel.innerText = channelName;
    //     content.appendChild(channel)

    //     let bullet = document.createElement('span')
    //     bullet.className = 'bullet'
    //     bullet.innerText = '•';
    //     content.appendChild(bullet)

    //     let views = document.createElement('span')
    //     views.className = 'views'
    //     views.innerText = numberOfViews + ' ' + 'views';
    //     content.appendChild(views)

    //     bullet = document.createElement('span')
    //     bullet.className = 'bullet'
    //     bullet.innerText = '•';
    //     content.appendChild(bullet)

    //     let uploadTime = document.createElement('span')
    //     uploadTime.className = 'uploadedAgo'
    //     uploadTime.innerText = uploadedAgo + ' ' + 'months ago'
    //     content.appendChild(uploadTime)

    //     container.appendChild(card);
    // }

    let container = document.querySelector('.container');
    let viewsCount;
    if (numberOfViews < 1000) {
        viewsCount = numberOfViews;
    }

    else if (numberOfViews >= 1000 && numberOfViews < 1000000) {
        viewsCount = numberOfViews / 1000 + 'K';
    }

    else {
        viewsCount = numberOfViews / 1000000 + 'M';
    }

    let html = `
    <div class="container">
        <div class="card">
            <div class="left">
                <img src=${thumbnail}
                    class="thumbnail" alt=${title}>
                <span class="duration">${duration}</span>
            </div>

            <div class="right">
                <h3 class="title">${title}</h3>
                <div class="content">
                    <span class="channelName">${channelName}</span>
                    <span class="bullet">•</span>
                    <span class="views">${viewsCount}</span>
                    <span class="bullet">•</span>
                    <span class="uploadedAgo">${uploadedAgo} months ago</span>
                </div>
            </div>
        </div>
    </div>
    `
    container.innerHTML = container.innerHTML + html
}

createCard("https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw", "31:20", "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1", "CodeWithHarry", "1300000", "5")

createCard("https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBTa4i6NuryzZhcPo7BkCK1G6PqGg", "28:31", "Your First HTML Website | Sigma Web Development Course - Tutorial #2", "CodeWithHarry", "606000", "5")