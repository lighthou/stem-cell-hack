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
                    "value1": String(childSnapshot.val()["value1"]),
                    "value2": String(childSnapshot.val()["value2"]),
                    "value3": String(childSnapshot.val()["value3"])
                })
            });
        })
        console.log(listOfData);
        return listOfData;
}


