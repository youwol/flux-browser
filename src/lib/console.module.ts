import { BuilderView, Flux, Property, Schema, ModuleFlux, freeContract } from '@youwol/flux-core';
import { pack } from './main'


export namespace ModuleConsole {


    let icon = `<path d="M32,464V48c0-8.837,7.163-16,16-16h240v64c0,17.673,14.327,32,32,32h64v48h32v-64c0.025-4.253-1.645-8.341-4.64-11.36     l-96-96C312.341,1.645,308.253-0.024,304,0H48C21.49,0,0,21.491,0,48v416c0,26.51,21.49,48,48,48h112v-32H48     C39.164,480,32,472.837,32,464z" ></path>
    <path d="M480,320h-32v32h32v32h-64v-96h96c0-17.673-14.327-32-32-32h-64c-17.673,0-32,14.327-32,32v96c0,17.673,14.327,32,32,32     h64c17.673,0,32-14.327,32-32v-32C512,334.327,497.673,320,480,320z"></path>
    <path d="M304,256c-35.346,0-64,28.654-64,64v32c0,35.346,28.654,64,64,64c35.346,0,64-28.654,64-64v-32     C368,284.654,339.346,256,304,256z M336,352c0,17.673-14.327,32-32,32c-17.673,0-32-14.327-32-32v-32c0-17.673,14.327-32,32-32     c17.673,0,32,14.327,32,32V352z"></path>
    <path d="M160,256h-32v144c0,8.837,7.163,16,16,16h80v-32h-64V256z"></path>`


    @Schema({
        pack
    })
    export class PersistentData {

        @Property({ description: "log prefix" })
        readonly prefix: string

        constructor({ prefix } = { prefix: "Console Module" }) {
            this.prefix = prefix
        }
    }


    @Flux({
        pack: pack,
        namespace: ModuleConsole,
        id: "ModuleConsole",
        displayName: "Console Logger",
        description: "Log data in the console"
    })
    @BuilderView({
        namespace: ModuleConsole,
        icon: icon
    })
    export class Module extends ModuleFlux {

        constructor(params) {
            super(params)
            this.addInput({
                contract: freeContract(),
                onTriggered: ({ data, configuration, context }) => {
                    console.log(configuration.prefix, { data, configuration, context })
                }
            })
        }
    }

}