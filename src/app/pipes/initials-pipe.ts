import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {
  transform(value: string): string {
    const separated: string[] = value.split(' ');
    return separated[0].charAt(0) + separated[1].charAt(0);
   }
}