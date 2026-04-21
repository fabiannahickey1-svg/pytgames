declare function gtag(...args: unknown[]): void;

type EventParams = Record<string, string | number>;

export function trackEvent(name: string, params?: EventParams) {
  if (typeof gtag !== "undefined") {
    gtag("event", name, params);
  }
}
