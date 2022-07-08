import NextAuth from 'next-auth'
import { NextApiRequest, NextApiResponse } from 'next'
import CredentialsProvider from 'next-auth/providers/credentials'
export default async function auth(req: NextApiRequest, res: NextApiResponse) {
    // wrapping nexth auth in auth function
    // allow regular request manipulation
    // i.e: add headers, read query, body params etc.
    return await NextAuth(req, res, {
        session: {
            // Choose how you want to save the user session.
            // The default is `"jwt"`, an encrypted JWT (JWE) stored in the session cookie.
            // If you use an `adapter` however, we default it to `"database"` instead.
            // You can still force a JWT session by explicitly defining `"jwt"`.
            // When using `"database"`, the session cookie will only contain a `sessionToken` value,
            // which is used to look up the session in the database.
            strategy: 'database',

            // Seconds - How long until an idle session expires and is no longer valid.
            maxAge: 30 * 24 * 60 * 60, // 30 days

            // Seconds - Throttle how frequently to write to database to extend a session.
            // Use it to limit write operations. Set to 0 to always update the database.
            // Note: This option is ignored if using JSON Web Tokens
            updateAge: 24 * 60 * 60, // 24 hours
        },
        pages: {
            signIn: '/auth/signin',
            signOut: '/auth/signout',
            error: '/auth/error', // Error code passed in query string as ?error=
            verifyRequest: '/auth/verify-request', // (used for check email message)
            newUser: '/auth/new-user', // New users will be directed here on first sign in (leave the property out if not of interest)
        },
        // see events docs https://next-auth.js.org/configuration/events
        events: {
            async signIn(message) {
                /* on successful sign in */
            },
            async signOut(message) {
                /* on signout */
            },
            async createUser(message) {
                /* user created */
            },
            async updateUser(message) {
                /* user updated - e.g. their email was verified */
            },
            async linkAccount(message) {
                /* account (e.g. Twitter) linked to a user */
            },
            async session(message) {
                /* session is active */
            },
        },
        logger: {
            error(code, metadata) {
                //   log.error(code, metadata)
            },
            warn(code) {
                //   log.warn(code)
            },
            debug(code, metadata) {
                //   log.debug(code, metadata)
            },
        },
        // Configure one or more authentication providers
        providers: [
            CredentialsProvider({
                // The name to display on the sign in form (e.g. 'Sign in with...')
                name: 'Credentials',
                // The credentials is used to generate a suitable form on the sign in page.
                // You can specify whatever fields you are expecting to be submitted.
                // e.g. domain, username, password, 2FA token, etc.
                // You can pass any HTML attribute to the <input> tag through the object.
                credentials: {
                    username: {
                        label: 'Username',
                        type: 'text',
                        placeholder: 'jsmith',
                    },
                    password: { label: 'Password', type: 'password' },
                },
                async authorize(credentials, req) {
                    // You need to provide your own logic here that takes the credentials
                    // submitted and returns either a object representing a user or value
                    // that is false/null if the credentials are invalid.
                    // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
                    // You can also use the `req` object to obtain additional parameters
                    // (i.e., the request IP address)
                    const res = await fetch('/your/endpoint', {
                        method: 'POST',
                        body: JSON.stringify(credentials),
                        headers: { 'Content-Type': 'application/json' },
                    })
                    const user = await res.json()

                    // If no error and we have user data, return it
                    if (res.ok && user) {
                        return user
                    }
                    // Return null if user data could not be retrieved
                    return null
                },
            }),
        ],
        callbacks: {
            async jwt({ token, account }) {
                // Persist the OAuth access_token to the token right after signin
                if (account) {
                    token.accessToken = account.access_token
                }
                return token
            },
            async session({ session, token, user }) {
                // Send properties to the client, like an access_token from a provider.
                session.accessToken = token.accessToken
                return session
            },
        },
    })
}
