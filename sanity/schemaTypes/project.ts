import { defineField, defineType } from "sanity";

export const project = defineType({
    name: "project",
    title: "Project",
    type: "document",
    fields:[
        defineField({
            name: "slug",
            type: "slug",
            options:{
                source:'title',
            }
        }),
        defineField({
            name: "title",
            type: "string"
        }),
        defineField({
            name: "author",
            type: "reference",
            to: [{ type: "author" }]
        }),
        defineField({
            name: "views",
            type: "number",
        }),
        defineField({
            name: "description",
            type: "text"
        }),
        defineField({
            name: "category",
            type: "string",
            validation:(Rule) => Rule.min(1).max(30).required().error('Category is required'),
        }),
        defineField({
            name: "image",
            type: "url",
            validation:(Rule) => Rule.required()
        }),
        defineField({
            name:"details",
            type:"markdown",
        }),
    ]
})