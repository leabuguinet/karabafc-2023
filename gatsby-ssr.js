

// Import React so that you can use JSX in HeadComponents
const React = require("react")

const HtmlAttributes = {
  lang: "en"
}

const HeadComponents = [
  <link href="https://fonts.bunny.net/css?family=league-spartan:200,400,600,700,800" rel="stylesheet"></link>,
   <script src="/js/finisher-header.es5.min.js"></script>
]


exports.onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes,

}, pluginOptions) => {
  setHtmlAttributes(HtmlAttributes)
  setHeadComponents(HeadComponents)
}