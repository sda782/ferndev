import { Component } from "@angular/core";

@Component({
    standalone: true,
    selector: "DateTimeWidget",
    templateUrl: "./datetimewidget.html",
    styleUrl: "./datetimewidget.css",
})
export class DateTimeWidget {
    internalTime = new Date();
    private timerID: any;
    ngOnInit() {
        this.timerID = setInterval(() => {
            this.internalTime = new Date();
        }, 1000)
    }

    ngOnDestroy() {
        if (this.timerID) clearInterval(this.timerID);
    }
}