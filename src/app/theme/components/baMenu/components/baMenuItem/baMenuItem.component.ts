import {Component, ElementRef, HostListener, ViewEncapsulation, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'ba-menu-item',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./baMenuItem.scss')],
  template: require('./baMenuItem.html'),
  providers: [],
  directives: [BaMenuItem]
})
export class BaMenuItem {

  @Input() menuItem:any;
  @Input() child:boolean = false;

  @Output() itemHover = new EventEmitter<any>();
  @Output() toggleSubMenu = new EventEmitter<any>();

  public outOfArea:number = -200;

  public ngOnInit():void {
  }

  public onHoverItem($event):void {
    this.itemHover.emit($event);
  }

  public onToggleSubMenu($event, item):boolean {
    $event.item = item;
    this.toggleSubMenu.emit($event);
    return false;
  }
}
