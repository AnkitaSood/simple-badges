import {AppComponent} from "./app.component";
import {moduleMetadata} from "@storybook/angular";

export default {
    component: AppComponent,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [AppComponent]
        })
    ]
}

const Template = (args: any) => ({
    props: args,
});

export const Badges = Template.bind({})
// @ts-ignore
Badges.args = {};
