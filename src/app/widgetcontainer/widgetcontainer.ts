import { Component } from "@angular/core";
import { DateTimeWidget } from "../datetimewidget/datetimewidget";
import { QuickLinkWidget } from "../quicklinkwidget/quicklinkwidget";

@Component({
    standalone: true,
    selector: "WidgetContainer",
    templateUrl: "./widgetcontainer.html",
    styleUrl: "./widgetcontainer.css",
    imports: [DateTimeWidget, QuickLinkWidget],
})
export class WidgetContainer {

}