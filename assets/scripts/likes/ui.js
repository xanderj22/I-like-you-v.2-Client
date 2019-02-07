'use strict'

// const store = require('../store.js')

const onCreateLikesSuccess = function () {
  $('#message').html('Thanks for sharing!')
  // reset form
  $('#likes-form').trigger('reset')
  $('#userinterests').val('')
  $('#userfaves').val('')
  $('#personalities').val('')
  $('#genderprefs').val('')
  $('#usersearch').val('')
}

const onShowUserLikesSuccess = function (data) {
  // console.log('user show likes success', data)
  const template = `<table style="width:100%">
    <tr>
      <th>  Interests  </th>
      <th> 5 Fave Things </th>
      <th>Personality Types</th>
      <th> Gender Prefs </th>
      <th> Searching For </th>

    </tr>
    <tr>
      <td>${data.like.interests}</td>
      <td>${data.like.fiveFaves}</td>
      <td>${data.like.personalityTypes}</td>
      <td>${data.like.genderPrefs}</td>
      <td>${data.like.searchingFor}</td>
    </tr>
  </table>`

  $('#user-likes-info').html(template)
  $('#message').html('Thanks for sharing!')
  // reset form
  $('#show-user-likes').trigger('reset')
}

const onFailure = function (response) {
  // log the error
  console.error(response)

  // display error to user
  $('#message').html('Please share your likes and interests')
}

module.exports = {
  onCreateLikesSuccess,
  onShowUserLikesSuccess,
  onFailure
}
