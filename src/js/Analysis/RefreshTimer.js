class RefreshTimer {
    constructor(viz, milliseconds) {
        this.refreshMilliseconds = milliseconds || 1000;
        this.viz = viz;
        this.timerId = setTimeout(() => this.refresh(), this.refreshMilliseconds)
    }

    refresh() {
        this.viz.refresh();
        this.timerId = setTimeout(() => this.refresh(), this.refreshMilliseconds)
    }

    destroy() {
        clearTimeout(this.timerId);
    }
}

export default RefreshTimer;