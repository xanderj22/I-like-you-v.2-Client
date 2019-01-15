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

// const onShowUserLikesSuccess = function (data) {
//   console.log(data)
//   const template = `<table style="width:100%">
//     <tr>
//       <th>Interests</th>
//       <th>5 Fave Things</th>
//       <th>Personality Types</th>
//       <th>Gender Prefs</th>
//       <th>Searching For</th>
//
//     </tr>
//     <tr>
//       <td>${data.user.interests}</td>
//       <td>${data.user.fiveFaves}</td>
//       <td>${data.user.personalityTypes}</td>
//       <td>${data.user.genderPrefs}</td>
//       <td>${data.user.searchingFor}</td>
//     </tr>
//   </table>`
//
//   $('#user-profile-info').html(template)
//   $('#message').html('Thanks for sharing!')
//   // reset form
//   $('#show-user-likes').trigger('reset')
// }

const onFailure = function (response) {
  // log the error
  console.error(response)

  // display error to user
  $('#message').html('Something went wrong, please try again.')
}

module.exports = {
  onCreateLikesSuccess,
  // onShowUserLikesSuccess,
  onFailure
}
