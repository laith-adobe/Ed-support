import { createOptimizedPicture } from "../../scripts/lib-franklin";

export default function decorate(block){
    const div = document.createElement('div');
    [...block.children].forEach(row=>{
        console.log(row);
    })
}