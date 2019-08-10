import {databaseRef} from '../firebase'

export var data = [{"value1":"hello", "value2":"heyo", "value3":"wow"}];

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
        var listOfData = [{"value1": "hi","value2":"k","value3":"nn"}]
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
        listOfData = [{"value1":"hello", "value2":"heyo", "value3":"wow"}];
        return listOfData;
}


