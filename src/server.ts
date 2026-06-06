import "./lib/error-capture";
import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

export default {
  async fetch(request: Request) {
    try {
      const { default: handler } = await import("@tanstack/react-start/server-entry");
      const response = await (handler as any).fetch(request);

      if (response.status >= 500) {
        const contentType = response.headers.get("content-type") ?? "";
        if (contentType.includes("application/json")) {
          const body = await response.clone().text();
          if (body.includes('"unhandled":true')) {
            console.error(consumeLastCapturedError() ?? new Error(`SSR error: ${body}`));
            return new Response(renderErrorPage(), {
              status: 500,
              headers: { "content-type": "text/html; charset=utf-8" },
            });
          }
        }
      }
      return response;
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
