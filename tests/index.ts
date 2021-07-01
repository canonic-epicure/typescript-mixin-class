import { Project } from "@bryntum/siesta/index.js"

const project = Project.new({
    title                   : 'TypeScript mixin class test suite',

    testDescriptor          : {}
})

project.plan(
    {
        filename       : 'class',

        items       : [
            'mixin.t.js',
            'mixin_caching.t.js'
        ]
    },
)

project.start()

