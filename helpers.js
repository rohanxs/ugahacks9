dining_hall_hours = {
    /*
    "dining hall": {
        "open" : [S, M, T, W, T, F, S],
        "close": [S, M, T, W, T, F, S],
    }
    */
    "bolton": {
        "open": [830, 700, 700, 700, 700, 700, 830],
        "close": [2200, 2200, 2200, 2200, 2200, 2200, 2200],
    },
    "joefrank": {
        "open": [830, 700, 700, 700, 700, 700, 830],
        "close": [2100, 2100, 2100, 2100, 2100, 2100, 2100],
    },
    "ohouse": {
        "open": [-1, 700, 700, 700, 700, 700, -1],
        "close": [-2, 2100, 2100, 2100, 2100, 2100, -2],
    },
    "snelling": {
        "open": [-1, 700, 0, 0, 0, 0, -1],
        "close": [-2, 2359, 2359, 2359, 2359, 1430, -2],
    },
    "niche": {
        "open": [-1, 700, 700, 700, 700, 700, -1],
        "close": [-2, 1430, 1430, 1430, 1430, 1430, -2]
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

console.log(checkOpen("joefrank"))