import {databaseRef} from '../firebase'

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

