// Refer to https://github.com/pbteja1998/remix-auth-google for more information
import { AuthStrategies } from '~/services/auth_strategies';
import type { User } from '~/services/auth.server';
import { GoogleStrategy } from 'remix-auth-google';
import { parsedEnv } from '@/utils/env.server';
import { AuthorizationError } from 'remix-auth';
import { getUsernameFromEmail } from '@/utils/string';

const clientID = parsedEnv.GOOGLE_CLIENT_ID || '';
const clientSecret = parsedEnv.GOOGLE_CLIENT_SECRET || '';
const callbackURL = `${parsedEnv.APP_URL}/auth/${AuthStrategies.GOOGLE}/callback`;

if (!clientID || !clientSecret) {
  throw new Error('Missing GOOGLE_CLIENT_ID or GOOGLE_CLIENT_SECRET');
}

export const googleStrategy = new GoogleStrategy<User>(
  {
    clientID,
    clientSecret,
    callbackURL,
  },
  async ({ profile }) => {
    const email = profile.emails[0]?.value.trim().toLowerCase();
    if (!email) throw new AuthorizationError('Email is not found');

    const fullName = profile._json.name;
    const imageUrl = profile.photos[0].value;
    const username = getUsernameFromEmail(profile._json.email);

    const user = await modelUser.getByEmail({ email });

    // Do something with the tokens and profile
    return {};
  }
);
