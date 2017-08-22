import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
               <img [src]="title"/>
               <table>
                    <tr>
                        <td [attr.colspan] = "colSpan"></td>
                    </tr>
               </table>
               <button class="btn btn-primary">Save</button>
    `
})
export class CoursesComponent{
    imageUrl = '';
    colSpan = 2;

    // Logic for caling an HTTP Service

}