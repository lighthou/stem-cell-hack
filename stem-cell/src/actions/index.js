import {databaseRef} from '../firebase'

export var data = [];

export function populateData() {
    data = fetchData();
    return data;
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
                //console.log(listOfData);
                listOfData.push({
                    "name": String(childSnapshot.val()["name"]),
                    "number": String(childSnapshot.val()["number"]),
                    "age": String(childSnapshot.val()["age"]),
                    "weight": String(childSnapshot.val()["weight"]),
                    "calcium": String(childSnapshot.val()["calcium"]),

                })
            });
        })
        console.log(listOfData);
        return listOfData;
}


