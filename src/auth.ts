const KEY = "FOUNDER_HQ_AUTH_OK";

export function isAuthed(): boolean {
  return localStorage.getItem(KEY) === "1";
}

export function setAuthed(ok: boolean) {
  localStorage.setItem(KEY, ok ? "1" : "0");
}

export function logout() {
  localStorage.removeItem(KEY);
}
