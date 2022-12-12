export default function waitForRedirect(fn: (...args: any[]) => void) {
  // the redirect actually happens instead of guessing.
  setTimeout(fn, 100);
}
