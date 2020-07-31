import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-readonly-text",
  templateUrl: "./readonly-text.component.html",
  styleUrls: ["./readonly-text.component.css"],
})
export class ReadonlyTextComponent implements OnInit {
  @Input() label: string;
  @Input() value: string;

  constructor() {}

  ngOnInit(): void {}
}
