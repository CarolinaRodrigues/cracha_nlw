const LinksSocialMedia = {
  github: 'CarolinaRodrigues',
  youtube: 'channel/UCwhwl5Qz3bbo6CYPWY0qJ5Q',
  facebook: 'iamcarolinar',
  instagram: 'iamcarolinar',
  twitter: 'iamcarolinarr'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json()) //.then e uma promesses
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
//crias os codigos em inglês
//cameCase ---> linksRedesSocial
//PascalCase ---> LinksRdesSocial
//snake_case ---> links_redes_social

//usando craze
//alert(li.children[0].href)

//document.getElementById('userName').textContent = 'Carolina Leite'
//userName.textContent = 'Carol'
// na programação conta numero -1,se numero = 10 então (0 ao 9)

//ARROW FUNCTIONS
