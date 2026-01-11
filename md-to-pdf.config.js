module.exports = {
  stylesheet: ["output.css"],
  body_class: ["prose", "prose-lg", "max-w-none"],
  pdf_options: {
    format: "A4",
    margin: "25mm",
    printBackground: true,
    preferCSSPageSize: false,
  },
  marked_options: {
    headerIds: true,
    gfm: true,
    breaks: false,
  },
};
