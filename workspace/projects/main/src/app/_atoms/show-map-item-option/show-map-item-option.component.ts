import { Component, Input } from '@angular/core'
import { BrowserPlugin, Plugins } from '@capacitor/core'

/**
 * マップを表示するオプション項目
 */
@Component({
  selector: 'app-show-map-item-option',
  templateUrl: './show-map-item-option.component.html',
})
export class ShowMapItemOptionComponent {

  private readonly browser: BrowserPlugin

  /** タップ時に表示するURL */
  @Input() url: string


  constructor(
  ) {
    this.browser = Plugins.Browser
  }


  open() {
    this.url && this.browser.open({ url: this.url })
  }
}
