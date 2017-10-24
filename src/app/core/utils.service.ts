import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

  constructor() { }

  loading(data: any, error: boolean): boolean {
    return !data && !error;
  }

  loadSuccess(data: any, error: boolean): boolean {
    return data && !error;
  }

  newlinesToMarkup(text: string): string {
    const sentences = text.split(/\r\n|\r|\n/gi);
    const withPTags = sentences.map(
      sentence => {
        if (sentence) {
          return `<p>${sentence}</p>`;
        }
      }
    );
    const trimmed = withPTags.filter(
      sentence => !!sentence === true
    );
    return trimmed.join('');
  }

}
