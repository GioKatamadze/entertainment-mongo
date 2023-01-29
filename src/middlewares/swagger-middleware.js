import SwaggerUI from "swagger-ui-express";
import YAML from "yamljs";

const swaggerMiddleware = () => {
  const options = {
    customCss: ".swagger-ui .toobar {display: none}",
    customSiteTitle: "Entertainment Web App",
  };

  const swaggerDocumnet = YAML.load("./src/config/swagger.yaml");
  return [SwaggerUI.serve, SwaggerUI.setup(swaggerDocumnet, options)];
};

export default swaggerMiddleware;
