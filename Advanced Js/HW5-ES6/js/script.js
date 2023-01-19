
class Card  {
    constructor(obj, user) {
        const {body, title, id} = obj;
        const {name, email} = user;
        this.id = id;
        this.body = body;
        this.title = title;
        this.name = name;
        this.email = email;
        this.twitter = document.querySelector('.twitter')
    }
     createCards () {

     this.twitter.insertAdjacentHTML('beforeend',`
          <section class="user__gogi">
          <div class='user' id="userId=${this.id}"
          <div class="user__avatar-info">
          <img class="user__avatar-item" src="http://surl.li/elrie" alt="1"/>
          <div class="user__body-header-info">
          <h3 class="user__body-header-info-fullName">${this.name}</h3>
          <p class="user__header-info-status">online</p>
          <span class="user__header-info-mail">${this.email}</span>
          </div>
          </div>
          <div class ="user__post">
          <p class="user__tittle">${this.title}</p>
          <img class="user__img" src="http://surl.li/elwhg" alt="2"/>
          <p class="user__body-text">${this.body}</p>
          </div>
          </div>
          <button class="user__deleteButton-item" id="${this.id}">Delete post</button>
          </section>
      `)}
}



async function fetchAsyncTodos() {
    try {
        let response = await fetch('https://ajax.test-danit.com/api/json/users')
        let data = await response.json()
        let responsePost = await fetch('https://ajax.test-danit.com/api/json/posts')
        let dataPost = await responsePost.json()
        await data.forEach(post => {
            dataPost.forEach(user => {
                user.userId === post.id ? new Card(user, post).createCards() : false;
            })
        })
        let bth = document.querySelectorAll('.user__deleteButton-item').forEach(e => {
            e.addEventListener("click", () => {
                fetch(`https://ajax.test-danit.com/api/json/posts/${e.id}`, {
                    method: 'DELETE',
                })
                    .then(response => response.status && response.ok ?  document.querySelector('.user__gogi').remove() : false)
            })
        })
    } catch (e) {
        console.error(e)
    }
}

fetchAsyncTodos()

