1. go to respective folder of deployment ex. IDMS-FOLDER_NAME

2. **\*\***\*\*\*\***\*\***git pull the latest code\***\*\*\*\*\*\*\*** [git pull origin master]
3. replace folders "code/backend","code/frontend/src" ,"code/employee_mngt/src" for both employe_mng [except environment folder]
4. run locally all folder and check ui and company images if not replace
5. check environment/environment.prod.ts url in ["code/frontend" ,"code/employee_mngt"] (note: - according to respective company)
6. make build of ["code/frontend" ,"code/employee_mngt"] this folder using [ng build --prod]
7. push the code to master [git add . ==> git commit -m "b&d" ==> git push -u origin master]

8. open putty for ["IDMS Company"] [userName@ip][password]
9. cd github-company
10. git pull origin master
11. git userName, password [github credentials][USER_NAME,USER_PASSWORD]
12. cd code/backend
13. check .env ["code/backend"]
14. sudo pm2 restart src/app.js --name idms-company && sudo pm2 restart src/esmp-app.js --name esmp-idms-company
15. check the deployed url ==> https://www.idms-FOLDER_NAME.com

<!-- cd  github-FOLDER_NAME
git pull https://USER_NAME:USER_PASSWORD@github.com/REPOSITORY_URL master -->

cd code
cd backend
sudo pm2 status
password :
sudo pm2 restart src/app.js --name idms-FOLDER_NAME

<!-- sudo pm2 restart backend/app.js --name   idms-FOLDER_NAME
sudo pm2 restart backend/hr-app.js --name  esmp-idms-FOLDER_NAME -->

git pull https://USER_NAME:USER_PASSWORD@github.com/REPOSITORY_URL master

1. check node_module ["code","code/frontend"]
2. check .env ["code"]
3. create build ==> npm run build ["code/frontend"]
4. git add
5. git commit
6. git push

7. open putty for ["IDMS FOLDER_NAME"] [SYSTEM_NAME@IP_ADDRESS][PASSWORD]
8. ls [github-FOLDER_NAME idms-FOLDER_NAME ]
9. cd github-FOLDER_NAME
10. git pull
11. git userName, password [github credentials][USER_NAME,USER_PASSWORD]
12. cd code
13. check .env ["code"]
14. sudo pm2 restart backend/app.js
15. deployed url ==> https://www.idms-FOLDER_NAME.com

cd github-FOLDER_NAME
git pull https://USER_NAME:USER_PASSWORD@github.com/REPOSITORY_URL master
cd code
sudo pm2 restart backend/app.js --name idms-FOLDER_NAME

cd code
sudo pm2 start backend/app.js --name idms-FOLDER_NAME
sudo pm2 start backend/hr-app.js --name esmp-idms-FOLDER_NAME

mkdir github-FOLDER_NAME
cd github-FOLDER_NAME
git init
git remote add origin https://github.com/REPOSITORY_URL
git pull origin main

git push -u https://USER_NAME:USER_PASSWORD@github.com/REPOSITORY_URL master

https://idms-FOLDER_NAME.com/
