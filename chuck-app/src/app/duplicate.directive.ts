import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDuplicate]'
})
export class DuplicateDirective {
  @Input() set appDuplicate(condition: boolean){
    this.viewContainer.clear();
    // this.viewContainer.createEmbeddedView(this.templateRef);

    if(condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

}
