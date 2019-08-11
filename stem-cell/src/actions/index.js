import {databaseRef} from '../firebase'

export var data = [];

export function populateData() {
    data = fetchData();
    return data;
}

export function updateUCE(name, uce) {
    var query = databaseRef.orderByChild('name').equalTo(name)
    query.once("child_added", function(snapshot) {
        snapshot.ref.update({'uce': uce})
    })
}

export function updateBSCL(name, bscl) {
    var query = databaseRef.orderByChild('name').equalTo(name)
    query.once("child_added", function(snapshot) {
        snapshot.ref.update({'bscl': bscl})
    })
}

export function addData(newData) {
  databaseRef.push().set(newData,
    function(error) {
        if (error) {
            console.log(error)
        } else {
            console.log("Submit Okay")
        }
    });
};  

export function fetchData() {
    var listOfData = []
    databaseRef.on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            console.log(childSnapshot.key);
            listOfData.push({
                "name": String(childSnapshot.val()["name"]),
                "number": String(childSnapshot.val()["number"]),
                "age": String(childSnapshot.val()["age"]),
                "weight": String(childSnapshot.val()["weight"]),
                "calcium": String(childSnapshot.val()["calcium"]),
                "uce": String(childSnapshot.val()["uce"]),
                "bscl": String(childSnapshot.val()["bscl"])
            })
        });
    })
    console.log(listOfData);
    return listOfData;
}


