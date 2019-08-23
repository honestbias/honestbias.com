export default {
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    {
      name: "slug",
      title: "Slug (DO NOT MODIFY)",
      type: "string",
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],

  preview: {
    select: {
      title: "slug",
      media: "mainImage",
    },
  },
};
