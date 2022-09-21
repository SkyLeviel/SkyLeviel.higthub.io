var tblUsers = document.getElementById('tbl_users_list');
  var databaseRef = firebase.database().ref('clock-actie/');
  var rowIndex = 1;
  
  databaseRef.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
   var childKey = childSnapshot.key;
   var childData = childSnapshot.val();
   
   var row = tblUsers.insertRow(rowIndex);
   var cellName = row.insertCell(0);
   var cellTijd = row.insertCell(1);
		var celldate = row.insertCell(2);
		var cellactie = row.insertCell(3);
		var cellId = row.insertCell(4);
	cellName.appendChild(document.createTextNode(childData.Naam));	cellTijd.appendChild(document.createTextNode(childData.Tijd));
    celldate.appendChild(document.createTextNode(childData.date));
    cellactie.appendChild(document.createTextNode(childData.actie));
		cellId.appendChild(document.createTextNode(childKey));
   rowIndex = rowIndex + 1;
    });
  });
   
  function delete_user(){
   var user_id = document.getElementById('user_id').value;
  //////////////////////////
   firebase.database().ref().child('clock-actie/' + user_id).remove();
   // Show alert
 
   reload_page(5000);
  }
  
  function reload_page(){
   window.location.reload();
  }
  

