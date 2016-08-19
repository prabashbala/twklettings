import { Component, Input } from '@angular/core';


@Component({
    selector: 'tabs',
    template: `   
   
     <md-tab-group>
        <md-tab *ngFor="let tab of tabs">
              <template md-tab-label>
                {{tab.tabTitle}}
              </template>
              <template md-tab-content>
                {{tab.tabTemplate}}
              </template>
            </md-tab>        
      </md-tab-group>
  `,
})
export class Tabs {
      @Input() tabs:Tab[];
    
}
export class Tab {

    tabindex: number;
    tabTitle: string;
    tabTemplate: string;
    active : boolean;

    constructor(itabindex: number,
        itabTitle: string,
        itabTemplate: string,
        iactive: boolean) {
        this.tabindex = itabindex;
        this.tabTitle = itabTitle;
        this.tabTemplate = itabTemplate;
        this.active = iactive;
    }
}

