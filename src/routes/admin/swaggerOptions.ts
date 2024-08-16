import { describe } from "node:test";

let filePattern;

if (process.env.NODE_ENV === "production") {
  filePattern = ["./admin.js"];
} else {
  filePattern = ["./admin.{ts,js}"];
}

/**
 * Swagger Options, used to configure the swagger-ui-express package
 */
export const swaggerOptions = {
  openapi: "3.0.0",
  info: {
    title: "phish.directory Admin Endpoints",
    description: "Admin docs for phish.directory",
    version: `1.0.0`,
    basePath: "/admin",
    securityDefinitions: {
      BearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
    security: {
      BearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
  },
  // filesPattern: ["../routes/*.ts", "../database/models/*.schema.ts"], // Glob pattern to find your jsdoc files
  filesPattern: filePattern, // Glob pattern to find your jsdoc files
  swaggerUIPath: "/admin/docs", // SwaggerUI will be render in this url.
  baseDir: __dirname,
};
