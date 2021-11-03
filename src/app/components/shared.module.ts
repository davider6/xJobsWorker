import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PopemailComponent } from './popemail/popemail.component';
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { RatingComponent } from './rating/rating.component';
@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [PopemailComponent,ImageSliderComponent, RatingComponent],
  exports: [PopemailComponent,ImageSliderComponent,RatingComponent]
})
export class SharedModule {}
