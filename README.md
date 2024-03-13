<!-- ABOUT THE PROJECT -->
## INFOSECPH Web Forum Application

![Infosecph1](InfoSecPh\InfoSecPh\public\images\infosec-main.png)<br>
![Infosecph](InfoSecPh\InfoSecPh\public\images\infosec-user.png)

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
3. Press Enter key until the end of utility application and type yes at the end <br>
  ![npminit](InfoSecPh\InfoSecPh\public\images\screenshot1.png)
  
4. Input the command to install the packages needed
   ```sh
   npm i express express-handlebars body-parser mongoose hbs
   ```

    ![npmexpress](InfoSecPh\InfoSecPh\public\images\screenshot2.png)

5. Open the MongoDB Compass Application
  ![mongodb](InfoSecPh\InfoSecPh\public\images\screenshot3.png)

6. Press Connect in the MongoDB Compass
  ![mongodbmain](InfoSecPh\InfoSecPh\public\images\screenshot4.png)

7. Input the command below to run the application
    ```sh
    node server.js
    ```
    ![listeningport3000](InfoSecPh\InfoSecPh\public\images\screenshot5.png)

    Notice that MongoDB Compass will be updated with the server database with 4 collections<br>
    ![mongodb-changed](InfoSecPh\InfoSecPh\public\images\screenshot6.png)

8. In MongoDB, click the comments collection and click add data. Under Add data, click Import JSON or CSV file<br>
  ![mongodbcollection](InfoSecPh\InfoSecPh\public\images\screenshot7.png)

9. Navigate to the folder and find 'data' folder. Select the appropriate JSON file.<br>
  ![datafolder](InfoSecPh\InfoSecPh\public\images\screenshot8.png)

10. Click Import.<br>
  ![importfile](InfoSecPh\InfoSecPh\public\images\screenshot9.png)

11. Repeat steps 8-10 to the remaining collections in the MongoDB<br>
  ![mongodb-after](InfoSecPh\InfoSecPh\public\images\screenshot10.png)

12. Input the local address in the web browser. The application should load.<br>
  ![local3000](InfoSecPh\InfoSecPh\public\images\screenshot11.png)

### **Note that some features are yet to be implemented.**


<!-- USAGE EXAMPLES -->
## Usage

Below are some of the screenshots of the application<br>
 ![sample1](InfoSecPh\InfoSecPh\public\images\sample1.png)
 ![sample2](InfoSecPh\InfoSecPh\public\images\sample2.png)
 ![sample3](InfoSecPh\InfoSecPh\public\images\sample3.png)
 ![sample4](InfoSecPh\InfoSecPh\public\images\sample4.png)






