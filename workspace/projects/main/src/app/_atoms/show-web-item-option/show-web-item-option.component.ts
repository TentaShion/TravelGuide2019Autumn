import { Component, Input } from '@angular/core'
import { BrowserPlugin, Plugins } from '@capacitor/core'

/**
 * Web サイトを表示するオプション項目
 */
@Component({
  selector: 'app-show-web-item-option',
  templateUrl: './show-web-item-option.component.html',
})
export class ShowWebItemOptionComponent {

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
