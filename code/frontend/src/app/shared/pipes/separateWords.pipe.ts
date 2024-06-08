import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "separateWords"
})
export class SeparateWordsPipe implements PipeTransform {
    transform(value: string): string {
        // Replace transitions from lowercase to uppercase with a space before the uppercase letter
        return value
            .replace(/([a-z])([A-Z])/g, "$1 $2")
            .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2")
            .trim();
    }
}
