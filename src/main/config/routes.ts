import { Router } from "express";

export const apiRoutes = async (app) => {
  const router = Router();

  (await import("../routes/categories")).default(router);

  app.use(router);
};
