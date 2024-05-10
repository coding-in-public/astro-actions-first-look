import type { APIRoute } from "astro";
import { db, Order } from "astro:db";

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();

  if (!body) {
    return new Response(null, { status: 400 });
  }

  if (
    !body.shirtColor ||
    !body.firstName ||
    !body.lastName ||
    !body.shirtSize
  ) {
    return new Response(null, { status: 400 });
  }

  try {
    // TODO: sanitize inputs
    await db.insert(Order).values({
      firstName: body.firstName,
      lastName: body.lastName,
      shirtSize: body.shirtSize,
      shirtColor: body.shirtColor,
      subscribeToNewsletter: body["subscribeToNewsletter"] ? true : false,
    });
    return new Response(
      JSON.stringify({
        success: true,
      }),
      {
        status: 201,
      }
    );
  } catch (e) {
    return new Response(null, { status: 400 });
  }
};
