import React from 'react';
import _ from 'underscore';

class TimeframeFilter extends React.Component {

    constructor(props) {
        super(props);

        let timeframe = this.props.timeframe || this.props.options[0].value;

        this.state = {
            timeframe: timeframe, 
            showDropdown: false 
        };
    }

    componentWillReceiveProps(nextProps) {
        let state = this.state;
        state.selected = nextProps.selected;
        this.setState(state);
    }

    render() {
        let { options } = this.props;
        let { showDropdown, timeframe } = this.state;

        let caption = _(options).find((o) => o.value === timeframe).caption;
        let dropdownOptions = _(options).map((o) => {
            return (
                <a key={o.value} className="block btn" onClick={this.updateSelection.bind(this, o.value)}>
                    {o.caption}
                </a>
            );
        });

        let arrow = showDropdown ? <span className="ion ion-arrow-up-b" /> : <span className="ion ion-arrow-down-b" />

        return (
            <span className="relative">
                <a className="btn" onClick={this.toggleDropdown.bind(this)}>
                    {caption} {arrow}
                </a>
                { showDropdown ? (
                    <div className="absolute bg-white border rounded z1 right-0" style={{width: '250px'}}>
                        { dropdownOptions }
                    </div>
                ) : null }
            </span>
        );
    }

    toggleDropdown() {
        let state = this.state;
        state.showDropdown = !state.showDropdown;
        this.setState(state);
    }

    updateSelection(newSelection) {
        let state = this.state;
        state.timeframe = newSelection;
        state.showDropdown = false;
        this.setState(state);

        this.props.onTimeframeChanged(newSelection);
    }
}
TimeframeFilter.defaultProps = {
    options: [
        {value: 'today', caption: 'Today'},
        {value: 'yesterday', caption: 'Yesterday'},
        {value: 'this_week', caption: 'This Week'},
        {value: 'last_week', caption: 'Last Week'},
        {value: 'this_month', caption: 'This Month'},
        {value: 'last_month', caption: 'Last Month'},
    ]
}

TimeframeFilter.propTypes = {
    timeframe: React.PropTypes.oneOf(
        [
            'today', 
            'yesterday', 
            'this_week', 
            'last_week', 
            'this_month', 
            'last_month'
        ])
        .isRequired,
    onTimeframeChanged: React.PropTypes.func.isRequired,
}

export default TimeframeFilter;