var _       = require('lodash')
  , request = require('./superbird')
  , React   = require('react')

var ju = {
  username: 'jugoncalves'
}

var baseUserURL = 'https://api.github.com/users/'

var Projects = React.createClass({
  render: function(){

    var projects = this.props.projects.map(function(item){
      console.log(item)

      return (
        <li className="me-profile_page--item">
          <a href={item.html_url}>{item.name}</a>
          : <span>{item.description}</span>
        </li>
      )
    })


    return (
      <p className="me-profile_descr--text">
      And here's a list of my personal projects you can check it out:
        <ul className="me-profile_page--list">
          {projects}
        </ul>
      </p>
    )
  }
})


request
  .get(baseUserURL + ju.username + '/starred')
  .end()
  .then(function(res){
    ju.projects = res.body.filter(function(repo){
      return repo.owner.login == ju.username
    })

    React.render(
      <Projects projects={ju.projects} />,
      document.querySelector('#projects')
    )

  })
