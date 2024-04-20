import { Pipe, PipeTransform } from '@angular/core';
import { AppGlobalService } from '@core/services';

@Pipe({
  name: 'labelTranslate',
})
export class LabelTranslatePipe implements PipeTransform {
  constructor(private appGlobalService: AppGlobalService) {}

  transform(value: string, replaceValue: string = ''): string {
    return this.getLabel(value) ?? value;
  }

  private getLabel(value: string): string | undefined {
    const { labelsJSON, menuItemId } = this.appGlobalService;
    if (!labelsJSON) {
      return value;
    }
    let neValue = labelsJSON.find(
      (ele: any) => ele.menuItemId == menuItemId && ele.labelName == value
    )?.displayLabelName;
    return neValue;
  }
}
