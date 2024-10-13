let animal_list = [ true, true, true, false, true, true, true, 
    true, true, false, true, false, true, false, false, true, 
    true, true, true, true, false, false, true, true ]
let animal_list2 = [ false, false, false ]

function countSheep(list) { 
    let count = 0;

    for (let index = 0; index < list.length; index++) {
        if (list[index]) {
            count++;
        }
    }

    if (count > 0) {
        console.log(`There are ${count} sheep in total.`);
    } else {
        console.log("Oops!!! Wolves have eaten all the sheep.");
    }
}

countSheep(animal_list)
countSheep(animal_list2)

