import { Component } from '@angular/core';

@Component({
    styles: [`
            .container {
                text-align: center;
                display: table-cell;
                vertical-align: middle;
            }

            .content {
                text-align: center;
                display: inline-block;
            }

            .title {
                font-size: 72px;
                margin-bottom: 40px;
            }
    `],

    template: `
        <div class="container">
            <div class="content">
                <span class="title lead"> <strong> Oh!</strong> Page Not Found.</span>
            </div>
        </div>
    `
})



export class NotFoundComponent {
}