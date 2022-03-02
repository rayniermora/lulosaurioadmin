import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSanitizerPipe } from './sanitizer.pipe';
import { ImagenesPipe } from './imagenes.pipe';



@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [ImageSanitizerPipe,ImagenesPipe],
    exports: [ImageSanitizerPipe,ImagenesPipe]
})

export class MainPipeModule {}