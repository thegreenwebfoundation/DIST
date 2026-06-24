// Adapted from https://htdocs.dev/posts/simple-http-basic-authentication-for-cloudflare-pages/
// to allow setting of username and password in the environment, and to be used as a worker
// which explicitly passes to the underlying assets, rather than a middleware.

export default {
  async fetch(request, env) {
    // Only require auth if a username and password is set in the environment
    if(env.HTTP_AUTH_USERNAME && env.HTTP_AUTH_PASSWORD) {

      // Get the authorization header from the request
      const auth = request.headers.get('Authorization');

      // If no authorization header is present, prompt for credentials
      if (!auth) {
        return new Response('Authentication required', {
          status: 401,
          headers: {
            'WWW-Authenticate': 'Basic realm="Secure Area"'
          }
        });
      }

      // Split the auth header to get the encoded credentials
      const [scheme, encoded] = auth.split(' ');

      // Validate it's using Basic auth
      if (!encoded || scheme !== 'Basic') {
        return new Response('Invalid authentication', {
          status: 401,
          headers: {
            'WWW-Authenticate': 'Basic realm="Secure Area"'
          }
        });
      }

      // Decode the Base64 credentials
      const decoded = atob(encoded);
      const [username, password] = decoded.split(':');


      // Check if the credentials match
      if (username !== env.HTTP_AUTH_USERNAME || password !== env.HTTP_AUTH_PASSWORD) {
        return new Response('Invalid credentials', {
          status: 401,
          headers: {
            'WWW-Authenticate': 'Basic realm="Secure Area"'
          }
        });
      }
    }

    // If authentication passes, or if no auth needed, continue to the requested page
    return env.ASSETS.fetch(request);
  }
}
