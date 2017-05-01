import {CanDeactivate} from "@angular/router";
import {ProductComponent} from "../product/product.component";
/**
 * Created by zzy on 2017/5/1.
 */
export class UnsavedGuard implements CanDeactivate<ProductComponent> {
  canDeactivate(component: ProductComponent) {
    return window.confirm("你还没有保存,确定要离开吗?")
  }


}
