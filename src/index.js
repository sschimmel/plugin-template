import { name, version } from "../package.json";

export default {
  hooks: {
    preRenderSvg: function(next) {
      // Add your plugin version as an SVG attribute
      this.attributes.add('freesewing:plugin-template', version);
      next();
    }
  }
  // macros: {}
};
