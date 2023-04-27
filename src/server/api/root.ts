import { contactRouter } from "@server/api/routers/contact";
import { inquiriesRouter } from "@server/api/routers/inquiries";
import { newsletterRouter } from "@server/api/routers/newsletter";
import { createTRPCRouter } from "@server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  inquiries: inquiriesRouter,
  contact: contactRouter,
  newsletter: newsletterRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
