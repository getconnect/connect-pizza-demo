import moment from 'moment';

export function dateTime(dateTime) {
    
    function xHourWindow(time, windowSize) {
        var hour = time.hour();
        var base = Math.floor(hour / windowSize) * windowSize;
        return base + '-' + (base + windowSize);
    }

    var curentTime = moment(dateTime);

    return {
        dayOfWeek: curentTime.format('dddd'),
        period: curentTime.format('A'),
        threeHourWindow: xHourWindow(curentTime, 3)
    };
}
