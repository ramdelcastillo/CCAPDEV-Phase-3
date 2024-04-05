<!-- ABOUT THE PROJECT -->
## INFOSECPH Web Forum Application

![infosec-main](https://github.com/ramdelcastillo/CCAPDEV-Phase-2/assets/91018988/87148bdb-d687-4255-a2d8-7c28fcfbfdb9)<br>
![infosec-user](https://github.com/ramdelcastillo/CCAPDEV-Phase-2/assets/91018988/9eaf3641-2f85-4578-83bb-57a23542eab9)

The **INFOSECPH Web Forum Application** is a forum for cyber security in the Philippines to make it easier to find jobs, opportunities, and general to specific information regarding the information security field in the country. This alleviate the limitation of going through a forum website such as Reddit where the information is diverse and  help people interested in cyber security to go through a forum where the information regarding cyber security is consolidated and accessible. Another goal of this cyber security forum is to promote and build a community for cyber security professionals and enthusiasts in the Philippines.


<!-- GETTING STARTED -->
## Getting Started

Before running the folder, make sure to install the pre-requisites provided to avoid issues or errors. The application will be downloaded in your computer via zip file. Do note that this application used localhost:3000 and 
internet connection is required to see images.

### Prerequisites
Make sure to install the following before running the file:
* [Node.js](https://nodejs.org/en)
* [MongoDB Community Server v7.0.4](https://www.mongodb.com/try/download/community)
* [MongoDB Compass v 1.41.0](https://www.mongodb.com/try/download/compass)


### Installation

1. Open the file in the command prompt.
2. Input npm init
   ```sh
   npm init
   ```
3. Press the Enter key until the end of the utility application and type yes at the end <br>
  ![npminit](https://github.com/ramdelcastillo/CCAPDEV-Phase-2/assets/91018988/5e5b3dc5-6fde-48c1-a353-cfc603680402)
  
4. Input the command to install the packages needed

   ```sh
   npm i bcrypt passport passport-local express-session express-flash dotenv method-override
   ```

    ![apdevmodules](https://github.com/ramdelcastillo/CCAPDEV-Phase-3/assets/91410042/985b5a71-6336-4bc3-baa5-e881247e1772)

5. Open the MongoDB Compass Application
  ![mongodb](https://github.com/ramdelcastillo/CCAPDEV-Phase-2/assets/91018988/e8b460fe-3662-4fd3-85d5-1edf35f278e1)

6. Press Connect in the MongoDB Compass
  ![mongodbmain](https://github.com/ramdelcastillo/CCAPDEV-Phase-2/assets/91018988/604881ca-9266-4b05-8856-adad098465b7)

7. Input the command below to run the application
    ```sh
    node server.js
    ```
    ![listeningport3000](https://github.com/ramdelcastillo/CCAPDEV-Phase-2/assets/91018988/29cd3ece-1212-4f96-95b6-b0d942cff302)

    Notice that MongoDB Compass will be updated with the server database with 4 collections<br>
    ![mongodb-changed](https://github.com/ramdelcastillo/CCAPDEV-Phase-2/assets/91018988/f9af2fa9-a866-409d-be94-1b3f03052a10)

8. In MongoDB, click the comments collection and click add data. Under Add data, click Import JSON or CSV file<br>
  ![mongodbcollection](https://github.com/ramdelcastillo/CCAPDEV-Phase-2/assets/91018988/727defdd-4de3-40ab-ac5e-54382a1f9e40)

9. Navigate to the folder and find 'data' folder. Select the appropriate JSON file.<br>
  ![datafolder](https://github.com/ramdelcastillo/CCAPDEV-Phase-2/assets/91018988/fc6647d8-55d1-47af-8e7a-b28a03d2eb20)

10. Click Import.<br>
  ![importfile](https://github.com/ramdelcastillo/CCAPDEV-Phase-2/assets/91018988/1684e93a-3288-40d1-ab6b-e461bd464854)

11. Repeat steps 8-10 to the remaining collections in the MongoDB<br>
  ![mongodb-after](https://github.com/ramdelcastillo/CCAPDEV-Phase-2/assets/91018988/1b92008d-3445-4b86-903c-c6b032329f24)

12. Input the local address in the web browser. The application should load.<br>
  ![local3000](https://github.com/ramdelcastillo/CCAPDEV-Phase-2/assets/91018988/730fa8e8-f81e-4398-9b7e-82afe5953e80)

13. To create an account, click sign up on the upper right part of the application.
14. Fill out the form to create a user.
    ![signup](https://github.com/ramdelcastillo/CCAPDEV-Phase-3/assets/91410042/ff68b5b3-b26a-4f52-bdb3-0346c46b75d0)
    
15. To log in, click log-in located on the upper part of the application.
    ![login](https://github.com/ramdelcastillo/CCAPDEV-Phase-3/assets/91410042/03322f69-c89e-4e7c-89c4-6064f4886936)
    
16. To add a friend, click the user and click Add Friend.
    ![addfriend](https://github.com/ramdelcastillo/CCAPDEV-Phase-3/assets/91410042/62fd560c-a5a9-4052-bf4f-17d951e032f8)


### **Note that some features are yet to be implemented.**


<!-- USAGE EXAMPLES -->
## Usage

Below are some of the screenshots of the application<br>
 ![sample1](https://github.com/ramdelcastillo/CCAPDEV-Phase-2/assets/91018988/30b3b402-1dec-450b-be30-4016f7a178f1)
 ![sample2](https://github.com/ramdelcastillo/CCAPDEV-Phase-2/assets/91018988/25da73f8-9942-413c-b290-25269976e2b8)
 ![sample3](https://github.com/ramdelcastillo/CCAPDEV-Phase-2/assets/91018988/a3400d01-828c-497a-a803-9d2b37c115bb)
 ![sample4](https://github.com/ramdelcastillo/CCAPDEV-Phase-2/assets/91018988/422b2310-2f95-4662-a665-34398fbab369)






