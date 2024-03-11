import { Directive, TemplateRef, ViewContainerRef  , Input} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  constructor(private templateREF : TemplateRef<any> , private vcREF : ViewContainerRef ) { }

  @Input() set appUnless(condition : boolean){ // method get executed whenever property changed
    if (!condition){
      this.vcREF.createEmbeddedView(this.templateREF) ;
    }else{
      this.vcREF.clear();
    }
  }
}
