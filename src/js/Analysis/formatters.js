import numeral from 'numeral';

var formatters = {
    dollars: (value) => {
        return numeral(value).format('$0.00');
    },
    units: (value) => {
        return numeral(value).format('0');
    }
};

export default formatters;