import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Pipe({
  name: 'truncate',
})
// export class TruncatePipe implements PipeTransform {
//   constructor(private sanitizer: DomSanitizer) {}

//   transform(value: string, words: number): SafeHtml {
//     const replacedNewlines = value?.replace(/\n/g, '<br>');
//     const truncatedText = this.truncate(replacedNewlines, words);

//     return this.sanitizer.bypassSecurityTrustHtml(truncatedText);
//   }

//   private truncate(text: string, words: number): string {
//     const wordsArray = text?.split(' ');
//     const truncatedWords = wordsArray?.slice(0, words);
//     const remainingWords = wordsArray?.slice(words);

//     let truncatedText = truncatedWords?.join(' ');

//     if (remainingWords?.length > 0) {
//       truncatedText +=
//         ' <br> ' + this.truncate(remainingWords?.join(' '), words);
//     }

//     return truncatedText;
//   }
// }

export class TruncatePipe implements PipeTransform {
  transform(value: string, limit = 25, completeWords = false, ellipsis = '...') {
    if (completeWords) {
      limit = value.substr(0, limit).lastIndexOf(' ');
    }
    return value.length > limit ? value.substr(0, limit) + ellipsis : value;
  }
}







// use 
//   <p>{{ longText | truncate: 20 }}</p>