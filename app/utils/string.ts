import { customAlphabet } from 'nanoid';

export function getUsernameFromEmail(email: string) {
  // Step 1: Remove the domain part
  const atIndex = email.indexOf('@');

  if (atIndex !== -1) {
    // Step 2: Replace '.' with '_'
    return email.substring(0, atIndex).replace(/\./g, '_');
  } else {
    // Handle the case where the string doesn't contain '@'
    return email;
  }
}

export function createNanoIdShort() {
  const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz', 3);
  return nanoid();
}
