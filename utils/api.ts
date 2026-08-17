const BACKEND_API_URL = process.env.NEXT_PUBLIC_BACKEND_API || "";

export function apiUrl(path: string) {
  return `${BACKEND_API_URL.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
}
