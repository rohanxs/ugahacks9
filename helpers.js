const snellingBreakfast = require('./hall-data/snelling/breakfast.json');


dining_hall_hours = {
    /*
    "dining hall": {
        "open" : [S, M, T, W, T, F, S],
        "close": [S, M, T, W, T, F, S],
        "breakfast": {
            open: [S, M, T, W, T, F, S],
            close: [S, M, T, W, T, F, S],
        }
        "lunch": {
            open: [S, M, T, W, T, F, S],
            close: [S, M, T, W, T, F, S],
        }
        "dinner": {
            open: [S, M, T, W, T, F, S],
            close: [S, M, T, W, T, F, S],
        }
    }
    */
    "bolton": {
        "open": [830, 700, 700, 700, 700, 700, 830],
        "close": [2200, 2200, 2200, 2200, 2200, 2200, 2200],
        "breakfast": {
            "open": [830, 700, 700, 700, 700, 700, 830],
            "close": [1130, 1030, 1030, 1030, 1030, 1030, 1130],
        },
        "lunch": {
            "open": [1130, 1030, 1030, 1030, 1030, 1030, 1130],
            "close": [1600, 1600, 1600, 1600, 1600, 1600, 1600],
        },
        "dinner": {
            "open": [1600, 1600, 1600, 1600, 1600, 1600, 1600],  
            "close": [2200, 2200, 2200, 2200, 2200, 2200, 2200],
        },
    },
    "joefrank": {
        "open": [830, 700, 700, 700, 700, 700, 830],
        "close": [2100, 2100, 2100, 2100, 2100, 2100, 2100],
        "breakfast": {
            "open": [830, 700, 700, 700, 700, 700, 830],
            "close": [1130, 1030, 1030, 1030, 1030, 1030, 1130],
        },
        "lunch": {
            "open": [1130, 1030, 1030, 1030, 1030, 1030, 1130],
            "close": [1600, 1600, 1600, 1600, 1600, 1600, 1600],
        },
        "dinner": {
            "open": [1600, 1600, 1600, 1600, 1600, 1600, 1600],
            "close": [2100, 2100, 2100, 2100, 2100, 2100, 2100],
        },
    },
    "ohouse": {
        "open": [-1, 700, 700, 700, 700, 700, -1],
        "close": [-2, 2100, 2100, 2100, 2100, 2100, -2],
        "breakfast": {
            "open": [-1, 700, 700, 700, 700, 700, -1],
            "close": [-2, 1030, 1030, 1030, 1030, 1030, -2],
        },
        "lunch": {
            "open": [-1, 1030, 1030, 1030, 1030, 1030, -1],
            "close": [-2, 1600, 1600, 1600, 1600, 1600, -2],
        },
        "dinner": {
            "open": [-1, 1600, 1600, 1600, 1600, 1600, -1],
            "close": [-2, 2100, 2100, 2100, 2100, 2100, -2],
        },
    },
    "snelling": {
        "open": [-1, 700, 0, 0, 0, 0, -1],
        "close": [-2, 2359, 2359, 2359, 2359, 1430, -2],
        "breakfast": {
            "open": [-1, 700, 0, 0, 0, 0, -1],
            "close": [-2, 1030, 1030, 1030, 1030, 1030, -2]
        },
        "lunch": {
            "open": [-1, 1030, 1030, 1030, 1030, 1030, -2],
            "close": [-2, 1600, 1600, 1600, 1600, 1430, -2],
        },
        "dinner": {
            "open": [-1, 1600, 1600, 1600, 1600, -1, -1],
            "close": [-2, 2359, 2359, 2359, 2359, -2, -2],
        }
    },
    "niche": {
        "open": [-1, 700, 700, 700, 700, 700, -1],
        "close": [-2, 1430, 1430, 1430, 1430, 1430, -2],
        "breakfast": {
            "open": [-1, 700, 700, 700, 700, 700, -1],
            "close": [-2, 1000, 1000, 1000, 1000, 1000, -2]
        },
        "lunch": {
            "open": [-1, 1000, 1000, 1000, 1000, 1000, -1],
            "close": [-2, 1430, 1430, 1430, 1430, 1430, -2],
        },
        "dinner": {
            "open": [-1, -1, -1, -1, -1, -1, -1],
            "close": [-2, -2, -2, -2, -2 , -2, -2],
        }
    }
}

const date = new Date();

const getTime = () => {
    return (100 * date.getHours()) + date.getMinutes()
}

const checkOpen = (diningHall) => {
    const weekDay = date.getDay();
    const open = dining_hall_hours[diningHall]["open"][weekDay]
    const close = dining_hall_hours[diningHall]["close"][weekDay]
    const time = getTime();
    return open < time && time < close;
}

function searchItem(diningHall, item) {
    const formattedItem = item.replace(/ /g, '_').toLowerCase();
    for (const key in diningHall) {
        if (diningHall.hasOwnProperty(key)) {
            const formattedKey = key.replace(/ /g, '_').toLowerCase();
            if (formattedKey === formattedItem) {
                return diningHall[key];
            }
        }
    }
    return null;
}

function currentMeal(diningHall) {
    const weekDay = date.getDay();
    const time = getTime();
    const Bopen = dining_hall_hours[diningHall]["breakfast"]["open"][weekDay]
    const Bclose = dining_hall_hours[diningHall]["breakfast"]["close"][weekDay]
    const Lopen = dining_hall_hours[diningHall]["lunch"]["open"][weekDay]
    const Lclose = dining_hall_hours[diningHall]["lunch"]["close"][weekDay]
    const Dopen = dining_hall_hours[diningHall]["dinner"]["open"][weekDay]
    const Dclose = dining_hall_hours[diningHall]["dinner"]["close"][weekDay]

    if (Bopen < time && time < Bclose) return "breakfast";
    if (Lopen < time && time < Lclose) return "lunch";
    if (Dopen < time && time < Dclose) return "dinner";
    else return "closed";
}

const listItems = (diningHall, filter) => {
    let items = [];
    for (const key in diningHall) {
        if (diningHall.hasOwnProperty(key) && filter(key)) {
            items.push(key);
        }
    }
    return items;
}

items = listItems(snellingBreakfast, (item) => parseInt(snellingBreakfast[item]["nutrition_info"]["protein"]) >= 15);
console.log(items);