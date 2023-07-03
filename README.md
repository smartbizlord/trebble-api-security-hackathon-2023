# Trebble - API - Security - Hackathon - 2023 

## Movie_Smart

### Brief Section

**Movie Smart** is a movie streaming API with admin access to upload movies and change relevant data built with the express framework of nodejs, it was built for the [**treblle**](https://treblle.com) API security hackathon that commenced from the 3rd of July through the 7th of July.

### Pre-requisite

To clone this repository, you can head over to [GitHub Repository](https://github.com/smartbizlord/trebble-api-security-hackathon-2023). the major requirements for this API is shown below

- NodeJS (npm)
- mongoDB
- .env (Environment Variables)

| Variable | Data Type |
| ----------- | ----------- |
| PORT | Number |
| BASE_URL | String |
| NODE_ENV | String |
| MONGODB_URL | String |
| DB_URL | String |
| DB_HOST | String |
| DB_NAME | String |
| DB_USER | String |
| DB_PASSWORD | String |
| DIALECT | String |
| thumbnails_path | String |
| movies_path | String |
| JWT_SECRET | String |
| JWT_ACCESS_EXPIRATION_MINUTES | Number |
| JWT_REFRESH_EXPIRATION_DAYS | Number |
| JWT_RESET_PASSWORD_EXPIRATION_MINUTES | Number |
| JWT_VERIFY_EMAIL_EXPIRATION_MINUTES | Number |
| SMTP_HOST | String |
| SMTP_PORT | Number |
| SMTP_USERNAME | String |
| SMTP_PASSWORD | String |
| EMAIL_FROM | String |
| TREBLLE_API_KEY | String |
| TREBLLE_PROJECT_ID | String |

> These variables are required and the API cannot start without them! :joy:

### Starting the API
first run `npm install` to install the necessary dependencies

after the dependencies are installed, type `npm start` and visit the version 1.0 from `http://localhost:{port}/v1.0/`. default port is `3000`

### Current Available Endpoints

> All endpoints accept JSON objects and returns JSON objects

| endpoint | method | request payload |
| --- | --- | --- |
| --- | --- | <pre><code></code>{<br>&nbsp;<span style="color: green;">"mumu"</span><span>: </span><span style="color: green;">"mumu", </span><span> :</span><span style="color: red;">required</span><br>}</code></pre> |


### Security Checks

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

### Team

![smartbizlord](https://github.com/) [Oladimeji Amusa](https://github.com/smartbizlord)
![blessme247](https://github.com/) [Abraham Solabi](https://github.com/blessme247)

### Enquiries

[Send A Mail](mailto:smartbizlord@gmail.com)[^1]

[^1]: Happy coding :wave:







