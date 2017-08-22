import { LikeComponent } from './like.components'

let component = new LikeComponent(10, true);
component.onclick();
console.log(`likesCount: ${component.likesCount}. isSelected: ${component.isSelected}`)