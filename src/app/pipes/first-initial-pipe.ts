import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
  name: 'firstinitial'
})
export class FirstInitialPipe implements PipeTransform {
  transform(value: string): string {
    const separated: string[] = value.split(' ');
    return separated[0].charAt(0) + ". " + separated[1];
   }
}