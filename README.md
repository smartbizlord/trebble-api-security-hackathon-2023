# Trebble - API - Security - Hackathon - 2023 

## Movie_Smart

### Brief Section

**Movie Smart** is a movie streaming API with admin access to upload movies and change relevant data built with the express framework of nodejs, it was built for the [**treblle**](https://treblle.com) API security hackathon that commenced from the 3rd of July through the 7th of July.

### Pre-requisite

To clone this repository, you can head over to [GitHub Repository](https://github.com/smartbizlord/trebble-api-security-hackathon-2023). the major requirements for this API is shown below

- NodeJS (npm)
- mongoDB
- .env (Environment Variables)

| Variable | Data Type | Allowed Values  |
| ----------- | ----------- | ----------- |
| PORT | Number | Default: 3000 |
| BASE_URL | String | the url for hosting the API |
| NODE_ENV | String | production&nbsp;\|&nbsp; development |
| DB_URL | String | mongo url |
| thumbnails_path | String | file directory path |
| movies_path | String | file directory path |
| JWT_SECRET | String | any |
| JWT_ACCESS_EXPIRATION_MINUTES | Number | any |
| JWT_REFRESH_EXPIRATION_DAYS | Number | any |
| JWT_RESET_PASSWORD_EXPIRATION_MINUTES | Number | any |
| JWT_VERIFY_EMAIL_EXPIRATION_MINUTES | Number | any |
| SMTP_HOST | String | eg: smtp.gmail.com |
| SMTP_PORT | Number | 465 |
| SMTP_USERNAME | String | any |
| SMTP_PASSWORD | String | any |
| EMAIL_FROM | String | any |
| TREBLLE_API_KEY | String | any |
| TREBLLE_PROJECT_ID | String | any |

> These variables are required and the API cannot start without them! :joy:

### Starting the API
first run `npm install` to install the necessary dependencies

after the dependencies are installed, type `npm start` and visit the version 1.0 from `http://localhost:{port}/v1.0/`. default port is `3000`

### Current Available Endpoints

> All endpoints accept JSON objects and returns JSON objects

| endpoint | method | request payload |
| --- | --- | --- |
| Auth | Auth | Auth |
| /v1.0/auth/register | POST | <pre>`Request Body`<br><br>{<br>&nbsp;&nbsp;<span style="color: green;">"email", </span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"password", </span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"firstName", </span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"lastName", </span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"gender", </span><span> :</span><span style="color: red;">required</span><br>}</pre> |
| /v1.0/auth/login | POST | <pre>`Request Body`<br><br>{<br>&nbsp;&nbsp;<span style="color: green;">"email", </span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"password", </span><span> :</span><span style="color: red;">required</span><br>}</pre> |
| /v1.0/auth/logout | POST | <pre>`Request Body`<br><br>{<br>&nbsp;&nbsp;<span style="color: green;">"refreshToken", </span><span> :</span><span style="color: red;">required</span><br>}</pre> |
| /v1.0/auth/refresh-tokens | POST | <pre>`Request Body`<br><br>{<br>&nbsp;&nbsp;<span style="color: green;">"refreshToken", </span><span> :</span><span style="color: red;">required</span><br>}</pre> |
| /v1.0/auth/forgot-password | POST | <pre>`Request Body`<br><br>{<br>&nbsp;&nbsp;<span style="color: green;">"email", </span><span> :</span><span style="color: red;">required</span><br>}</pre> |
| /v1.0/auth/reset-password | POST | <pre>`Request Body`<br><br>{<br>&nbsp;&nbsp;<span style="color: green;">"password", </span><span> :</span><span style="color: red;">required</span><br>}<br><br>`Request Query`<br><br>{<br>&nbsp;&nbsp;<span style="color: green;">"token", </span><span> :</span><span style="color: red;">required</span><br>}</pre> |
| /v1.0/auth/send-verification-email | POST | <pre>`Request Query`<br><br>{<br>&nbsp;&nbsp;<span style="color: green;">"token", </span><span> :</span><span style="color: red;">required</span><br>}</pre> |
| /v1.0/auth/verify-email | POST | <pre>`Request Query`<br><br>{<br>&nbsp;&nbsp;<span style="color: green;">"token", </span><span> :</span><span style="color: red;">required</span><br>}</pre> |
| Movies | Movies | Movies |
| /v1.0/movies/ | GET | <pre>`Request Query`<br><br>{<br>&nbsp;&nbsp;<span style="color: green;">"page", </span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"limit", </span><span> :</span><span style="color: red;">required</span><br>}</pre> |
| /v1.0/movies/genres | GET | <pre>`Request Query`<br><br>{<br>&nbsp;&nbsp;<span style="color: green;">"page", </span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"limit", </span><span> :</span><span style="color: red;">required</span><br>}</pre> |
| /v1.0/movies/countries | GET | <pre>`Request Query`<br><br>{<br>&nbsp;&nbsp;<span style="color: green;">"page", </span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"limit", </span><span> :</span><span style="color: red;">required</span><br>}</pre> |
| /v1.0/movies/:id | GET | <pre>`Request Query`<br><br>{<br>&nbsp;&nbsp;<span style="color: green;">"page", </span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"limit", </span><span> :</span><span style="color: red;">required</span><br>}</pre> |
| /v1.0/movies/genres/:id | GET | <pre>`Request Query`<br><br>{<br>&nbsp;&nbsp;<span style="color: green;">"page", </span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"limit", </span><span> :</span><span style="color: red;">required</span><br>}</pre> |
| /v1.0/movies/countries/:id | GET | <pre>`Request Query`<br><br>{<br>&nbsp;&nbsp;<span style="color: green;">"page</span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"limit", </span><span> :</span><span style="color: red;">required</span><br>}</pre> |
| Admins | Admins | Admins |
| /v1.0/admins/movies | GET | <pre>`Request Query`<br><br>{<br>&nbsp;&nbsp;<span style="color: green;">"page</span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"limit", </span><span> :</span><span style="color: red;">required</span><br>}</pre> |
| /v1.0/admins/movies | POST | <pre>`Request Body`<br><br>{<br>&nbsp;&nbsp;<span style="color: green;">"movieTitle</span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"movieDescription", </span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"movieThumbnail</span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"releaseYear</span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"movieCast</span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"countryId</span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"movieDirector</span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"movieDuration</span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"isActive</span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"special</span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"genreId</span><span> :</span><span style="color: red;">required</span><br>}</pre> |
| /v1.0/admins/genres | GET | <pre>`Request Query`<br><br>{<br>&nbsp;&nbsp;<span style="color: green;">"page</span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"limit", </span><span> :</span><span style="color: red;">required</span><br>}</pre> |
| /v1.0/admins/genres | POST | <pre>`Request Body`<br><br>{<br>&nbsp;&nbsp;<span style="color: green;">"genreName</span><span> :</span><span style="color: red;">required</span><br>}</pre> |
| /v1.0/admins/countries | GET | <pre>`Request Query`<br><br>{<br>&nbsp;&nbsp;<span style="color: green;">"page</span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"limit", </span><span> :</span><span style="color: red;">required</span><br>}</pre> |
| /v1.0/admins/countries | POST | <pre>`Request Body`<br><br>{<br>&nbsp;&nbsp;<span style="color: green;">"countryName</span><span> :</span><span style="color: red;">required</span><br>}</pre> |
| /v1.0/admins/users | GET | <pre>`Request Query`<br><br>{<br>&nbsp;&nbsp;<span style="color: green;">"page</span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"limit", </span><span> :</span><span style="color: red;">required</span><br>}</pre> |
| /v1.0/admins/users | POST | <pre>`Request Body`<br><br>{<br>&nbsp;&nbsp;<span style="color: green;">"email", </span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"password", </span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"firstName", </span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"lastName", </span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"gender", </span><span> :</span><span style="color: red;">required</span><br>}</pre> |
| /v1.0/admins/movies/:id | GET | <pre>`Request Query`<br><br>{}<br><br>`Request Query`<br><br>{}</pre> |
| /v1.0/admins/movies/:id | PATCH | <pre>`Request Body`<br><br>{<br>&nbsp;&nbsp;<span style="color: green;">"movieTitle</span><span> :</span><span style="color: red;">optional</span><br>&nbsp;&nbsp;<span style="color: green;">"movieDescription", </span><span> :</span><span style="color: red;">optional</span><br>&nbsp;&nbsp;<span style="color: green;">"movieThumbnail</span><span> :</span><span style="color: red;">optional</span><br>&nbsp;&nbsp;<span style="color: green;">"releaseYear</span><span> :</span><span style="color: red;">optional</span><br>&nbsp;&nbsp;<span style="color: green;">"movieCast</span><span> :</span><span style="color: red;">optional</span><br>&nbsp;&nbsp;<span style="color: green;">"countryId</span><span> :</span><span style="color: red;">optional</span><br>&nbsp;&nbsp;<span style="color: green;">"movieDirector</span><span> :</span><span style="color: red;">optional</span><br>&nbsp;&nbsp;<span style="color: green;">"movieDuration</span><span> :</span><span style="color: red;">optional</span><br>&nbsp;&nbsp;<span style="color: green;">"isActive</span><span> :</span><span style="color: red;">optional</span><br>&nbsp;&nbsp;<span style="color: green;">"special</span><span> :</span><span style="color: red;">optional</span><br>&nbsp;&nbsp;<span style="color: green;">"genreId</span><span> :</span><span style="color: red;">optional</span><br>}</pre> |
| /v1.0/admins/movies/:id | DELETE | <pre>`Request Query`<br><br>{}<br><br>`Request Query`<br><br>{}</pre> |
| /v1.0/admins/genres/:id | GET | <pre>`Request Query`<br><br>{}<br><br>`Request Query`<br><br>{}</pre> |
| /v1.0/admins/genres/:id | DELETE | <pre>`Request Query`<br><br>{}<br><br>`Request Query`<br><br>{}</pre> |
| /v1.0/admins/countries/:id | GET | <pre>`Request Query`<br><br>{}<br><br>`Request Query`<br><br>{}</pre> |
| /v1.0/admins/countries/:id | DELETE | <pre>`Request Query`<br><br>{}<br><br>`Request Query`<br><br>{}</pre> |
| /v1.0/admins/users/:id | GET | <pre>`Request Query`<br><br>{}<br><br>`Request Query`<br><br>{}</pre> |
| /v1.0/admins/users/:id | PATCH | <pre>`Request Body`<br><br>{<br>&nbsp;&nbsp;<span style="color: green;">"email", </span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"firstName", </span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"lastName", </span><span> :</span><span style="color: red;">required</span><br>&nbsp;&nbsp;<span style="color: green;">"gender", </span><span> :</span><span style="color: red;">required</span><br>}</pre> |
| /v1.0/admins/users/:id | DELETE | <pre>`Request Query`<br><br>{}<br><br>`Request Query`<br><br>{}</pre> |


### Security Hackathon Checklist

- [x] SQL Injection
- [x] Authentication
- [x] Authorization
- [x] UUID
- [x] Rate Limiting
- [x] Content Labeling
- [x] MIME sniffing
- [x] Force Secure Connection
- [x] Embedding Prevention
- [x] Security Policies
- [x] Content-Type specification
- [x] Method limiting
- [x] Request Validation

### Team

![smartbizlord](https://avatars.githubusercontent.com/u/103539335?v=4) 


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Oladimeji Amusa](https://github.com/smartbizlord)

![blessme247](https://avatars.githubusercontent.com/u/67491400?v=4)


 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [Abraham Solabi](https://github.com/blessme247)

### Enquiries

[Send A Mail](mailto:smartbizlord@gmail.com)[^1]

[^1]: Happy coding :wave:







