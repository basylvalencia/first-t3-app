import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const shopifyRouter = router({
  collection: publicProcedure
  .input(z.object({ text: z.string().nullish() }).nullish())
  .query(({ input }) => {
      console.log(GQL());
      return {
          greeting: `Hello ${input?.text ?? "world"}`,
      };
  }),
});
