module.exports = {
  stylesheet: ["output.css"],
  body_class: ["prose", "prose-lg", "max-w-none"],
  pdf_options: {
    format: "A5",
    margin: "20mm",
    printBackground: true,
    preferCSSPageSize: false,
  },
  marked_options: {
    headerIds: true,
    gfm: true,
    breaks: false,
  },
};
