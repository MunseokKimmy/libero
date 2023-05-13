// icon.module
// Third Example - icon module 
import { NgModule } from "@angular/core"; 
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser"; 
import { MatIconRegistry } from "@angular/material/icon"; 
import { MaterialModule } from "./material.module";
@NgModule({ 
imports: [MaterialModule]}) 
export class IconModule { 
private path: string = "../assets/icons";
 constructor(
  private domSanitizer: DomSanitizer, 
  public matIconRegistry: MatIconRegistry ) {
  this.matIconRegistry
  .addSvgIcon("ace", this.setPath(`${this.path}/ace.svg`))
  .addSvgIcon("kill", this.setPath(`${this.path}/kill.svg`))
  .addSvgIcon("block-touch", this.setPath(`${this.path}/reset.svg`))
  .addSvgIcon("kill2", this.setPath(`${this.path}/kill2.svg`))
  .addSvgIcon("block", this.setPath(`${this.path}/block.svg`))
  .addSvgIcon("assist", this.setPath(`${this.path}/assist.svg`))
  .addSvgIcon("dig", this.setPath(`${this.path}/dig.svg`))
  .addSvgIcon("first-hit", this.setPath(`${this.path}/1.svg`))
  .addSvgIcon("second-hit", this.setPath(`${this.path}/2.svg`))
  .addSvgIcon("over-the-net", this.setPath(`${this.path}/over-the-net.svg`))
  .addSvgIcon("error", this.setPath(`${this.path}/error.svg`));
 }
 private setPath(url: string): SafeResourceUrl { 
  return this.domSanitizer.bypassSecurityTrustResourceUrl(url); 
 }
}